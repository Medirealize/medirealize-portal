import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";

function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

function getYesterdayJst() {
  const now = new Date();
  const jstNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  jstNow.setDate(jstNow.getDate() - 1);
  return jstNow;
}

function getCommitsForDate(dateStr) {
  try {
    const out = execSync(
      `git log --since="${dateStr} 00:00" --until="${dateStr} 23:59" --pretty=format:%s`,
      { encoding: "utf-8" },
    );
    return out
      .split("\n")
      .map((v) => v.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function buildBody(commits) {
  const head = commits.slice(0, 3).join(" / ");
  return [
    `昨日の主戦場は「${head || "実装改善"}」だった。`,
    "実装の詰まりは、仕様の言葉と導線のズレに出る。今回はそのズレを1つずつ潰した。",
    "購読者向けには、再利用できる手順とテンプレを必ず残す方針で記録した。",
  ].join("");
}

function buildTipMarkdown(dateStr, commits) {
  return `# ${dateStr} の実践Tips

## 今日の要点
- 主要コミット: ${commits.join(" / ") || "修正ログなし"}
- まずは「導線」「法務」「権限」を同時に整えると、後戻りが減る

## そのまま使える手順
1. 画面文言を「何を売るか」に合わせて統一する
2. 購読判定をサーバー側で行い、未購読を確実に弾く
3. 具体価値コンテンツへのリンクを開発日誌内に埋める

## 一言メモ
迷いを減らす実装は、機能追加より先に着手すると効率が上がる。
`;
}

async function main() {
  const root = process.cwd();
  const date = getYesterdayJst();
  const dateStr = formatDate(date);

  const entriesPath = path.join(root, "content", "dev-log", "entries.json");
  const tipsDir = path.join(root, "content", "dev-log", "tips");
  await fs.mkdir(tipsDir, { recursive: true });

  const raw = await fs.readFile(entriesPath, "utf-8");
  const entries = JSON.parse(raw);
  if (entries.some((e) => e.date === dateStr)) {
    console.log(`entry for ${dateStr} already exists.`);
    return;
  }

  const commits = getCommitsForDate(dateStr);
  const slug = `${dateStr}-tips`;
  const tipFile = path.join(tipsDir, `${slug}.md`);
  await fs.writeFile(tipFile, buildTipMarkdown(dateStr, commits), "utf-8");

  const newEntry = {
    date: dateStr,
    title: `C/D${dateStr.slice(5).replace("-", "")}：導線と仕様を縫い直した日`,
    body: buildBody(commits),
    valueLink: {
      href: `/dev-log/tips/${slug}`,
      label: `${dateStr} の実践Tipsを見る`,
    },
  };

  entries.unshift(newEntry);
  await fs.writeFile(entriesPath, `${JSON.stringify(entries, null, 2)}\n`, "utf-8");
  console.log(`generated dev-log entry and tips for ${dateStr}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

