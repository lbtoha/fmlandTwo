import { FC, MouseEvent } from "react";

// Define the props for the PrevArrow component
interface PrevArrowProps {
  currentSlide: number;
  slideCount: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

// Define the PrevArrow component
const PrevArrow: FC<PrevArrowProps> = ({
  currentSlide,
  slideCount,
  onClick,
}) => (
  <button
    type="button"
    className="slick-arrow prev"
    style={{ display: "block" }}
    data-role="none"
    onClick={onClick}
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

export default PrevArrow;
