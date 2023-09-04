import Image from "next/image";
import Link from "next/link";

const WidgetBoxOne = () => {
  return (
    <div className="widget-box style-two">
      <form className="search-form style-two">
        <input
          type="text"
          name="#0"
          className="form-control"
          placeholder="Search..."
        />
        <button type="submit" className="search-form-btn">
          <i className="ri-search-line"></i>
        </button>
      </form>

      <h4 className="widget-box-title mt-30">Post Category</h4>
      <ul className="cat-list">
        <li>
          <Link href="multi-blog">
            <i className="ri-arrow-right-s-line"></i> Music
          </Link>
        </li>
        <li>
          <Link href="multi-blog">
            <i className="ri-arrow-right-s-line"></i> Artist
          </Link>
        </li>
        <li>
          <Link href="multi-blog">
            <i className="ri-arrow-right-s-line"></i> Podcast
          </Link>
        </li>
        <li>
          <Link href="multi-blog">
            <i className="ri-arrow-right-s-line"></i> Song
          </Link>
        </li>
      </ul>

      <h4 className="widget-box-title mt-30">Latest Post</h4>
      <div className="side-post style-two">
        <div className="side-post-thumb">
          <Image
            width={416}
            height={180}
            src="/images/blog/1.jpg"
            alt="image"
          />
        </div>
        <div className="side-post-content">
          <h6 className="side-post-title">
            <Link href="multi-blog-details">
              Myself in the world of travel where anything is possible.
            </Link>
          </h6>
          <p className="side-post-date">
            <i className="ri-alarm-line me-2"></i> 21 JUN, 2022
          </p>
        </div>
      </div>
      {/*  side-post end  */}
      <div className="side-post style-two">
        <div className="side-post-thumb">
          <Image
            width={416}
            height={180}
            src="/images/blog/2.jpg"
            alt="image"
          />
        </div>
        <div className="side-post-content">
          <h6 className="side-post-title">
            <Link href="multi-blog-details">
              Myself in the world of travel where anything is possible.
            </Link>
          </h6>
          <p className="side-post-date">
            <i className="ri-alarm-line me-2"></i> 21 JUN, 2022
          </p>
        </div>
      </div>
      {/*  side-post end  */}
    </div>
    // widget-box one end
  );
};

export default WidgetBoxOne;
