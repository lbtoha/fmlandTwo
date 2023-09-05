const Contact = () => {
  return (
    //  contact section start
    <section className="pt-120 pb-120 position-relative z-index2">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7">
            <form className="row gy-4 contact-form style-two">
              <div className="col-md-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                  placeholder="Company"
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  id="message"
                  name="message"
                  cols={30}
                  rows={10}
                  className="form-control textarea-md"
                  placeholder="Write a comments"
                ></textarea>
              </div>
              <div className="col-lg-12 text-center mt-5">
                <button
                  type="submit"
                  id="contact_form_submit"
                  className="btn btn-rounded btn-main"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="contact-map style-two">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7499.484785459639!2d-122.42760422031482!3d37.7866430027955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1675184241076!5m2!1sen!2sbd"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    // contact section end
  );
};

export default Contact;
