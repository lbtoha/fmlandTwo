import Image, { StaticImageData } from "next/image";
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
          <a href="blog-details.html" className="d-block h-100">
            <Image width={376} height={222} src={image} alt="image" />
          </a>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <span className="single-meta">{name}</span>
            <span className="single-meta">{date}</span>
          </div>
          <h4 className="blog-title">
            <a href="blog-details.html">{title}</a>
          </h4>
          <a href="blog-details.html" className="blog-btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
