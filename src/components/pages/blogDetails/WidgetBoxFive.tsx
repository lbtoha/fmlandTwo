import Link from "next/link";

const WidgetBoxFive = () => {
  return (
    <div
      className="widget-box ad-widget"
      style={{ backgroundImage: "url('/images/blog/ad.jpg')" }}
    >
      <h4 className="title">Let&lsquo;s Discuss For Make A Sponsor</h4>
      <Link href="#" className="btn btn-main btn-rounded mt-4">
        Make A Sponsor
      </Link>
    </div>
  );
};

export default WidgetBoxFive;
