import Image, { StaticImageData } from "next/image";

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
        <a href="radio-station-details.html" className="full-link"></a>
        <div className="station-item-icon">
          <Image width={24} height={40} src={icon} alt="image" />
        </div>
        <h4 className="station-item-title">{title}</h4>
        <p>{radio}</p>
        <a href="#0">
          Explore <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  );
};

export default PopularRadiosCard;
