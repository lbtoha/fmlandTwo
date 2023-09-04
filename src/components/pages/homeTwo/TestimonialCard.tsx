import Image, { StaticImageData } from "next/image";

const TestimonialCard = ({
  image,
  name,
  title,
  message,
}: {
  image: StaticImageData;
  name: string;
  title: string;
  message: string;
}) => {
  return (
    <div className="single-slide">
      <div className="testimonial-item style-five">
        <i className="fas fa-quote-right quote-top"></i>
        <div className="testimonial-item-thumb">
          <Image width={81} height={81} src={image} alt="image" />
        </div>
        <div className="testimonial-item-content mt-3">
          <h5 className="fw-500 mb-2">{name}</h5>
          <span className="designation">{title}</span>
          <p className="mt-4">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
