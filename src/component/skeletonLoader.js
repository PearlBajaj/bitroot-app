import "../styles/global.scss";

export default function SkeletonLoader() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-box image "></div>
      <div className="skeleton-box dots marign"></div>
      <div className="skeleton-box title marign"></div>
      <div className="skeleton-box content marign"></div>
      <div className="skeleton-box name marign"></div>
    </div>
  );
}
