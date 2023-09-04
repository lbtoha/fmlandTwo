import { FC, MouseEvent } from "react";

// Define the props for the NextArrow component
interface NextArrowProps {
  currentSlide: number;
  slideCount: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

// Define the NextArrow component
const NextArrow: FC<NextArrowProps> = ({
  currentSlide,
  slideCount,
  onClick,
}) => (
  <button
    type="button"
    className="slick-arrow next"
    style={{ display: "block" }}
    data-role="none"
    onClick={onClick}
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

export default NextArrow;
