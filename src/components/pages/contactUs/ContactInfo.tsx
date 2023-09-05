import Image from "next/image";

const ContactInfo = () => {
  return (
    //   contact info section start
    <section
      className="pt-120 pb-120 multi-home-overlay"
      style={{ backgroundImage: "url('/images/bg/contact.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Contact</span>
              <h2 className="section-title">Contact Info</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="contact-item style-two">
              <div className="top">
                <div className="icon">
                  <Image
                    width={66}
                    height={66}
                    src="/images/icons/contact/1.png"
                    alt="image"
                  />
                </div>
                <h4 className="title">Location</h4>
              </div>
              <ul className="contact-item-list">
                <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                <li>6391 Elgin St. Celina, Delaware 10299</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item style-two">
              <div className="top">
                <div className="icon">
                  <Image
                    width={66}
                    height={66}
                    src="/images/icons/contact/2.png"
                    alt="image"
                  />
                </div>
                <h4 className="title">Make a call</h4>
              </div>
              <ul className="contact-item-list">
                <li>+123 456 789 </li>
                <li>+254 564 3215</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item style-two">
              <div className="top">
                <div className="icon">
                  <Image
                    width={66}
                    height={66}
                    src="/images/icons/contact/3.png"
                    alt="image"
                  />
                </div>
                <h4 className="title">Mail</h4>
              </div>
              <ul className="contact-item-list">
                <li>contact.info.fmland@gmail.com</li>
                <li>info.fmlanf124@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    //    contact info section end
  );
};

export default ContactInfo;
