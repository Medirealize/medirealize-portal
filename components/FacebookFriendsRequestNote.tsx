/**
 * Facebook 友達申請時の合言葉案内（プロフィール・Recruit 等で共用）
 */
export default function FacebookFriendsRequestNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-pretty text-[12px] leading-relaxed text-[#65676B] sm:text-[13px] sm:text-balance ${className}`}
    >
      ※Facebookは基本的に『友達のみ閲覧可能』としております。日々の開発の裏側をご覧になりたい方は、お手数ですが合言葉として
      <strong className="font-bold text-[#050505]">『メディリアライズ』</strong>
      と一言添えて、申請をお願いいたします。
    </p>
  );
}
