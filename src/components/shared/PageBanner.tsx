import Link from "next/link";

const PageBanner = ({ pageTitle }: { pageTitle: string }) => {
  return (
    //  page banner start
    <section
      className="inner-page-banner"
      style={{
        backgroundImage: "url('/images/bg/inner-page-banner2.jpg')",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="inner-page-title text-white">{pageTitle}</h2>
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    //  page banner end
  );
};

export default PageBanner;
