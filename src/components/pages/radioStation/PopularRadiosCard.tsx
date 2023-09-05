import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const PopularRadiosCard = ({
  icon,
  title,
  radio,
}: {
  icon: StaticImageData;
  title: string;
  radio: string;
}) => {
  return (
    <div className="single-slide">
      <div className="station-item link-item">
        <Link href="radio-station-details" className="full-link"></Link>
        <div className="station-item-icon">
          <Image width={24} height={40} src={icon} alt="image" />
        </div>
        <h4 className="station-item-title">{title}</h4>
        <p>{radio}</p>
        <Link href="#0">
          Explore <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default PopularRadiosCard;
