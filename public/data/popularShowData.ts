import icon1 from "@/../public/images/icons/multi-shows/1.png";
import icon2 from "@/../public/images/icons/multi-shows/2.png";
import icon3 from "@/../public/images/icons/multi-shows/3.png";
import icon4 from "@/../public/images/icons/multi-shows/4.png";
import icon5 from "@/../public/images/icons/multi-shows/5.png";
import icon6 from "@/../public/images/icons/multi-shows/6.png";
import image1 from "@/../public/images/shows/multi/1.jpg";
import image2 from "@/../public/images/shows/multi/2.jpg";
import image3 from "@/../public/images/shows/multi/3.jpg";
import image4 from "@/../public/images/shows/multi/4.jpg";
import { v4 as uuidv4 } from "uuid";

const popularShowData = [
  {
    id: uuidv4(),
    image: image1,
    showName: "FM-Open",
    radioName: "Radio 98.5",
    icon: icon1,
  },
  {
    id: uuidv4(),
    image: image2,
    showName: "Radio OMP",
    radioName: "Radio 98.5",
    icon: icon2,
  },
  {
    id: uuidv4(),
    image: image3,
    showName: "Music Pop",
    radioName: "Radio 98.5",
    icon: icon3,
  },
  {
    id: uuidv4(),
    image: image4,
    showName: "Sound Lab",
    radioName: "Radio 98.5",
    icon: icon4,
  },
  {
    id: uuidv4(),
    image: image1,
    showName: "FM-Open",
    radioName: "Radio 98.5",
    icon: icon5,
  },
  {
    id: uuidv4(),
    image: image2,
    showName: "Radio OMP",
    radioName: "Radio 98.5",
    icon: icon6,
  },
  {
    id: uuidv4(),
    image: image3,
    showName: "Music Pop",
    radioName: "Radio 98.5",
    icon: icon4,
  },
  {
    id: uuidv4(),
    image: image4,
    showName: "Sound Lab",
    radioName: "Radio 98.5",
    icon: icon1,
  },
];

export default popularShowData;
