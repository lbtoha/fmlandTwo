import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  icon: StaticImageData;
  showName: string;
  radioName: string;
  bg?: boolean;
};

const PopularShowCard = ({ image, showName, radioName, icon, bg }: Props) => {
  return (
    <div className="single-slide">
      <div
        className={`podcast-item style-three ${
          bg && "podcast-item-dark-bg"
        } link-item`}
      >
        <Link href="radio-station-details" className="full-link"></Link>
        <div className="podcast-item-thumb">
          <Image width={416} height={300} src={image} alt="image" />
        </div>
        <div className="podcast-item-content">
          <div className="artist-thumb">
            <Image width={24} height={40} src={icon} alt="image" />
          </div>
          <div className="artist-content">
            <h5 className="show-name">{showName}</h5>
            <p className="artist-name">{radioName}</p>
          </div>
        </div>
      </div>
      {/* <!-- podcast-item end --> */}
    </div>
  );
};

export default PopularShowCard;
