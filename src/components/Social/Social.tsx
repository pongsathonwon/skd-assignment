import "./style.css";
type SocialProps = {
  likes: number;
};
function Social({ likes }: SocialProps) {
  return (
    <div className="social">
      <span className="social-label">{likes}</span>
      <span className="social-label">Social</span>
    </div>
  );
}

export default Social;
