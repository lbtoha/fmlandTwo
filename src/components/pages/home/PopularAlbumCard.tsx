import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = { image: StaticImageData; title: string; radio: string };

const PopularAlbumCard = ({ image, title, radio }: Props) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="albam-item">
        <div className="albam-item-thumb">
          <Image
            width={287}
            height={372}
            src={image}
            className="albam-item-main-img"
            alt="image"
          />
          <Image
            width={384}
            height={375}
            src="/images/albam/albam-ring.png"
            className="albam-item-ring-img"
            alt="image"
          />
        </div>
        <div className="albam-item-content">
          <div className="d-flex flex-wrap align-items-center">
            <h5 className="me-3">{title}</h5>
            <span>{radio}</span>
          </div>
          <Link href="radio-station-details" className="albam-item-link">
            Play Now <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularAlbumCard;
