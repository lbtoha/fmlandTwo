import Image from "next/image";

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
                <a href="blog-details.html" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/7.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">
                    One of the daily rituals I often find myself doing
                  </a>
                </h4>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item style-three">
              <div className="blog-thumb">
                <a href="blog-details.html" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/8.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">
                    Contrary to popular belief, Lorem Ipsum is
                  </a>
                </h4>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item style-three">
              <div className="blog-thumb">
                <a href="blog-details.html" className="d-block h-100">
                  <Image
                    width={376}
                    height={222}
                    src="/images/blog/9.jpg"
                    alt="image"
                  />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="single-meta">John Doe</span>
                  <span className="single-meta">19 Jan 2022</span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">
                    There are many variations of passages
                  </a>
                </h4>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-50 text-center">
          <a href="blog.html" className="btn btn-rounded btn-main">
            Read More
          </a>
        </div>
      </div>
    </section>

    // <!-- blog section end --> */}
  );
};

export default Latestblog;
