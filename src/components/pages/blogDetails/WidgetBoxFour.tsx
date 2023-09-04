import Image from "next/image";
import Link from "next/link";

const WidgetBoxFour = () => {
  return (
    <div className="widget-box style-two author-widget">
      <div className="author-widget-thumb">
        <Image
          width={416}
          height={180}
          src="/images/blog/author.jpg"
          alt="image"
          className="rounded-0"
        />
        <ul className="social-link mt-1">
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
      <div className="author-widget-content">
        <h5 className="author-name">RJ Mario</h5>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    //  widget-box four end
  );
};

export default WidgetBoxFour;
