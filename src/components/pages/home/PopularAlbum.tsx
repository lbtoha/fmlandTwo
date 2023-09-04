import Image from "next/image";
import popularAlbumData from "../../../../public/data/popularAlbumData";
import PopularAlbumCard from "./PopularAlbumCard";

const PopularAlbum = () => {
  return (
    // <!-- albam section start -->
    <section className="pt-120 pb-120 multi-section-bg position-relative z-index-p">
      <div className="multi-top-dots">
        <Image
          width={250}
          height={133}
          src="/images/elements/multi-top-dots.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-top">
              <span className="top-title">Music</span>
              <h2 className="section-title">Most Popular Albam</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row gy-4">
          {popularAlbumData.map(({ id, ...props }) => (
            <PopularAlbumCard key={id} {...props} />
          ))}
        </div>
      </div>
    </section>

    //<!-- albam section end -->
  );
};

export default PopularAlbum;
