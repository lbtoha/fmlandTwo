import Image from "next/image";

const DetailsBlogPost = () => {
  return (
    <div className="blog-details-wrapper style-two">
      <div className="blog-details-thumb">
        <Image width={857} height={524} src="/images/blog/b2.jpg" alt="image" />
      </div>
      <div className="blog-details-content">
        <div className="blog-meta">
          <span className="single-meta">John Doe</span>
          <span className="single-meta">19 Jan 2022</span>
        </div>
        <h2 className="blog-details-title text-base">
          One of the daily rituals I often find myself doing
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis at
          aenean magna morbi vel. Risus, rhoncus neque turpis id facilisis
          ultricies leo, risus tincidunt. Tempus pulvinar tellus laoreet neque.
          Aliquet eu diam et proin. Risus cras in urna, sed in tellus. Quis
          tempor ullamcorper pretium curabitur aliquet. Consectetur molestie ac
          sed volutpat praesent tempor ac. Tortor consequat, nunc nisi nec,
          aliquam. Nam egestas eget odio et, eget mauris vitae nunc, odio.
          Interdum faucibus leo velit risus nisl justo, suspendisse. Id sed
          orci, eget leo.
        </p>
        <div className="row gy-4 mt-2 mb-4">
          <div className="col-lg-6">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </p>
          </div>
          <div className="col-lg-6">
            <Image
              width={416}
              height={300}
              src="/images/blog/m1.jpg"
              alt="image"
              className="rounded-30"
            />
          </div>
        </div>
        {/* <!-- row end --> */}
        <blockquote>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </blockquote>
      </div>
    </div>
    // blog-details-wrapper end
  );
};

export default DetailsBlogPost;
