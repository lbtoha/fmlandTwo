import Image from "next/image";
import Link from "next/link";

const MakeASponsor = () => {
  return (
    // <!-- become sponsor section start -->
    <section
      className="pt-120 pb-120 multi-home-grad-overlay"
      style={{ backgroundImage: "url('/images/bg/become-sponsor.jpg')" }}
    >
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="section-top mb-40">
              <span className="top-title">Sponsor</span>
              <h2 className="section-title">Make A Sponsor</h2>
              <div className="section-top-line"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              tellus eget tincidunt et. Faucibus sed bibendum nunc, nunc,
              vestibulum elit odio et. Arcu consectetur sit aliquam, rhoncus
              convallis id ornare et.
            </p>
            <Link href="sponsor" className="btn btn-main btn-rounded mt-40">
              Become A Sponsor
            </Link>
          </div>
          <div className="col-lg-5 order-lg-2 order-1">
            <div className="become-sponsor-img">
              <Image
                width={525}
                height={463}
                src="/images/sponsors/become-sponsor.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <!-- become sponsor section end -->
  );
};

export default MakeASponsor;
