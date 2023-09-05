import Link from "next/link";
import popularRadioStationData from "../../../public/data/popularRadioStationData";
import PopularRadioStationCard from "../pages/homeTwo/PopularRadioStationCard";

const PopularRadioStation = () => {
  return (
    // <!-- radio station section start -->
    <section
      className="pt-120 pb-120"
      style={{ backgroundImage: "url('/images/bg/multi-radio-station2.png')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-top text-center">
              <span className="top-title">Radio</span>
              <h2 className="section-title">Popular Radio Station</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {popularRadioStationData.map(({ id, ...props }) => (
            <PopularRadioStationCard key={id} {...props} />
          ))}
        </div>
        <div className="mt-60 text-center">
          <Link href="radio-station" className="btn btn-main btn-rounded">
            Explore More
          </Link>
        </div>
      </div>
    </section>

    // <!-- radio station section end --> */}
  );
};

export default PopularRadioStation;
