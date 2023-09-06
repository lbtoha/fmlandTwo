import image1 from "@/../public//images/station/1.jpg";
import image2 from "@/../public//images/station/2.jpg";
import image3 from "@/../public//images/station/3.jpg";
import image4 from "@/../public//images/station/4.jpg";
import image5 from "@/../public//images/station/5.jpg";
import image6 from "@/../public//images/station/6.jpg";
import icon1 from "@/../public/images/icons/multi-shows/1.png";
import icon2 from "@/../public/images/icons/multi-shows/2.png";
import icon3 from "@/../public/images/icons/multi-shows/3.png";
import icon4 from "@/../public/images/icons/multi-shows/4.png";
import icon5 from "@/../public/images/icons/multi-shows/5.png";
import icon6 from "@/../public/images/icons/multi-shows/6.png";
import { v4 as uuidv4 } from "uuid";

const popularRadioStationData = [
  {
    id: uuidv4(),
    image: image1,
    title: "FM-Open",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon1,
  },
  {
    id: uuidv4(),
    image: image2,
    title: "Radio Op",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon2,
  },
  {
    id: uuidv4(),
    image: image3,
    title: "Music Pop",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon3,
  },
  {
    id: uuidv4(),
    image: image4,
    title: "FM Lab",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon4,
  },
  {
    id: uuidv4(),
    image: image5,
    title: "FM-Open",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon5,
  },
  {
    id: uuidv4(),
    image: image6,
    title: "Radio OM",
    radio: "Radio 95.5",
    message: "Lorem ipsum dolor sit at of amet, The most.",
    icon: icon6,
  },
];

export default popularRadioStationData;
