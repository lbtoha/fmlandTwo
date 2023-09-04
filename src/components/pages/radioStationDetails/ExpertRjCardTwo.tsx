import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ExpertRjCardTwo = ({
  image,
  name,
  title,
}: {
  image: StaticImageData;
  name: string;
  title: string;
}) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="rj-item style-two">
        <div className="thumb">
          <Image width={306} height={460} src={image} alt="image" />
        </div>
        <div className="content">
          <h4 className="rj-name">
            <Link href="/jockey-details">{name}</Link>
          </h4>
          <p className="rj-designation">{title}</p>
          <ul className="rj-social-links">
            <li>
              <Link href="#0">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  rj-item end  */}
    </div>
  );
};

export default ExpertRjCardTwo;
