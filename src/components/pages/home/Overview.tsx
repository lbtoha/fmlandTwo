const Overview = () => {
  return (
    //  <!-- overview section start -->
    <section className="overview-section">
      <div
        className="overview-overlay-img"
        style={{ backgroundImage: "url('/images/bg/overview2.jpg')" }}
      ></div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <div className="overview-item-two text-lg-start text-center">
              <h4>30+</h4>
              <p>Shows</p>
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <div className="overview-item-two text-lg-start text-center">
              <h4>24K+</h4>
              <p>listener</p>
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <div className="overview-item-two text-lg-start text-center">
              <h4>50+</h4>
              <p>Radio Jockey</p>
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <div className="overview-item-two text-lg-start text-center">
              <h4>20+</h4>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- overview section end -->
  );
};

export default Overview;
