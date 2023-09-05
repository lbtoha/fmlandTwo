import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  message: string;
  radio: string;
};

const PopularShowCard = ({ image, icon, title, message, radio }: Props) => {
  return (
    <div className="single-slide">
      <div className="station-item-two p-4">
        <div className="thumb">
          <Image width={120} height={222} src={image} alt="image" />
        </div>
        <div className="content">
          <div className="station-top">
            <div className="icon">
              <Image width={34} height={33} src={icon} alt="image" />
            </div>
            <div className="station-name">
              <h5 className="fw-500 mb-2">{title}</h5>
              <span className="fs[16px] text-base">{radio}</span>
            </div>
          </div>
          <p className="mt-30">{message}</p>
          <Link href="radio-station-details" className="text-base mt-30">
            Explore <i className="fas fa-long-arrow-alt-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularShowCard;
