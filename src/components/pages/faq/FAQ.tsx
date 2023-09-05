import Image from "next/image";

const FAQ = () => {
  return (
    //  faq section start
    <section
      className="pt-120 pb-120 multi-home-overlay"
      style={{ backgroundImage: "url('/images/bg/faq.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="accordion style-two" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-1"
                    aria-expanded="true"
                    aria-controls="c-1"
                  >
                    How does it work?
                  </button>
                </h2>
                <div
                  id="c-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="h-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-2"
                    aria-expanded="false"
                    aria-controls="c-2"
                  >
                    How can I trust you?
                  </button>
                </h2>
                <div
                  id="c-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="h-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-3"
                    aria-expanded="false"
                    aria-controls="c-3"
                  >
                    Do I need to tell you all my passwords?
                  </button>
                </h2>
                <div
                  id="c-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="h-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-4"
                    aria-expanded="false"
                    aria-controls="c-4"
                  >
                    Are you legit - will you steal my funds?
                  </button>
                </h2>
                <div
                  id="c-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="h-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-5"
                    aria-expanded="false"
                    aria-controls="c-5"
                  >
                    Can you recover my scammed or stolen assets?
                  </button>
                </h2>
                <div
                  id="c-5"
                  className="accordion-collapse collapse"
                  aria-labelledby="h-5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="h-6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#c-6"
                    aria-expanded="false"
                    aria-controls="c-6"
                  >
                    How long does the process take?
                  </button>
                </h2>
                <div
                  id="c-6"
                  className="accordion-collapse collapse"
                  aria-labelledby="h-6"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac nisi, vivamus vulputate elementum interdum ultrices in
                      amet. Urna, non sapien convallis id magna amet congue
                      donec et. Facilisi lacus amet eros nisl dignissim donec
                      sit blandit felis. Nunc, lacus, ullamcorper nunc maecenas
                      vulputate etiam nisl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-lg-block d-none">
            <div className="faq-thumb style-two">
              <Image
                width={526}
                height={650}
                src="/images/bg/faq1.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    //   faq section end
  );
};

export default FAQ;
