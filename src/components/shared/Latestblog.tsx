import Image from "next/image";
import Link from "next/link";

const Latestblog = () => {
  return (
    // <!-- blog section start -->
    <section className="pt-120 pb-120 position-relative z-index-p">
      <div className="multi-blog-dots">
        <Image
          width={203}
          height={133}
          src="/images/elements/multi-blog-dots.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Blog</span>
              <h2 className="section-title">Our Latest News</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item style-three">
              <div className="blog-thumb">
                <Link href="blog-details" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/7.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <Link href="blog-details">
                    One of the daily rituals I often find myself doing
                  </Link>
                </h4>
                <Link href="blog-details" className="blog-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item style-three">
              <div className="blog-thumb">
                <Link href="blog-details" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/8.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <Link href="blog-details">
                    Contrary to popular belief, Lorem Ipsum is
                  </Link>
                </h4>
                <Link href="blog-details" className="blog-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item style-three">
              <div className="blog-thumb">
                <Link href="blog-details" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/9.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <Link href="blog-details">
                    There are many variations of passages
                  </Link>
                </h4>
                <Link href="blog-details" className="blog-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-50 text-center">
          <Link href="blog" className="btn btn-rounded btn-main">
            Read More
          </Link>
        </div>
      </div>
    </section>

    // <!-- blog section end --> */}
  );
};

export default Latestblog;
