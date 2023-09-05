import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  image: StaticImageData;
  name: string;
  date: string;
  title: string;
};

const BlogCard = ({ image, name, date, title }: Props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-item style-three">
        <div className="blog-thumb">
          <Link href="blog-details" className="d-block h-100">
            <Image width={376} height={222} src={image} alt="image" />
          </Link>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="single-meta">{name}</span>
            <span className="single-meta">{date}</span>
          </div>
          <h4 className="blog-title">
            <Link href="blog-details">{title}</Link>
          </h4>
          <Link href="blog-details" className="blog-btn">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
