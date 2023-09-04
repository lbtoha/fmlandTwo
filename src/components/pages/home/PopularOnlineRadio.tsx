import Link from "next/link";
import popularRadioData from "../../../../public/data/popularRadioData";
import PopularRadioCard from "./PopularRadioCard";

const PopularOnlineRadio = () => {
  return (
    // <!-- online radio section start -->
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-top">
              <span className="top-title">Music</span>
              <h2 className="section-title">Popular Online Radios</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row gy-4">
          {popularRadioData.map(({ id, ...props }) => (
            <PopularRadioCard key={id} {...props} />
          ))}
        </div>

        <div className="text-center mt-60">
          <Link href="radio-station" className="btn btn-main btn-rounded">
            Explore More
          </Link>
        </div>
      </div>
    </section>
    //   <!-- online radio section end -->
  );
};

export default PopularOnlineRadio;
