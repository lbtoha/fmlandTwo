import Link from "next/link";

const WidgetBoxThree = () => {
  return (
    <div className="widget-box style-two">
      <h4 className="widget-box-title">Follow Us</h4>
      <ul className="social-links-white">
        <li>
          <Link href="#0">
            <i className="ri-facebook-fill"></i>
          </Link>
        </li>
        <li>
          <Link href="#0">
            <i className="ri-linkedin-fill"></i>
          </Link>
        </li>
        <li>
          <Link href="#0">
            <i className="ri-twitter-fill"></i>
          </Link>
        </li>
        <li>
          <Link href="#0">
            <i className="ri-instagram-line"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WidgetBoxThree;
