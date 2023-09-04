import image1 from "@/../public/images/testimonial/1.jpg";
import image2 from "@/../public/images/testimonial/2.jpg";
import image3 from "@/../public/images/testimonial/3.jpg";
import image4 from "@/../public/images/testimonial/4.jpg";
import { v4 as uuidv4 } from "uuid";
const testimonialData = [
  {
    id: uuidv4(),
    image: image1,
    name: "Monalisa",
    title: "Music Artist",
    message:
      "“Lorem ipsum dolor sit amet,consectetur adipiscing elit. Dignissim imperdiet justo, sapien viverra commodo id duis praesent tempus. Felis, mi diam nulla sit”.",
  },
  {
    id: uuidv4(),
    image: image2,
    name: "Monalisa",
    title: "Music Artist",
    message:
      "“Lorem ipsum dolor sit amet,consectetur adipiscing elit. Dignissim imperdiet justo, sapien viverra commodo id duis praesent tempus. Felis, mi diam nulla sit”.",
  },
  {
    id: uuidv4(),
    image: image3,
    name: "Monalisa",
    title: "Music Artist",
    message:
      "“Lorem ipsum dolor sit amet,consectetur adipiscing elit. Dignissim imperdiet justo, sapien viverra commodo id duis praesent tempus. Felis, mi diam nulla sit”.",
  },
  {
    id: uuidv4(),
    image: image4,
    name: "Monalisa",
    title: "Music Artist",
    message:
      "“Lorem ipsum dolor sit amet,consectetur adipiscing elit. Dignissim imperdiet justo, sapien viverra commodo id duis praesent tempus. Felis, mi diam nulla sit”.",
  },
];

export default testimonialData;
