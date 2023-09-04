import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  name: string;
  date: string;
  message: string;
  commentNumber: number;
};

const CommentCard = ({ image, name, date, message, commentNumber }: Props) => {
  return (
    <div
      className={`single-comment`}
      style={commentNumber % 2 === 0 ? { padding: "0 0 0 110px" } : {}}
    >
      <div className="single-comment-inner">
        <div className="single-comment-thumb">
          <Image width={65} height={65} src={image} alt="image" />
        </div>
        <div className="single-comment-content">
          <p className="fs[16px] text-white">
            <span className="fs[18px] fw-500 me-3">{name}</span> {date}
          </p>
          <p className="mt-3">{message}</p>
          <Link href="#0" className="text-base fs[16px] mt-4">
            Reply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
