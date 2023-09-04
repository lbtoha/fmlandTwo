import image1 from "@/../public//images/albam/1.jpg";
import image2 from "@/../public//images/albam/2.jpg";
import image3 from "@/../public//images/albam/3.jpg";
import { v4 as uuidv4 } from "uuid";
// { image, title, radio }

const popularAlbumData = [
  {
    id: uuidv4(),
    image: image1,
    title: "“Music is love”",
    radio: "Radio 86.5",
  },
  {
    id: uuidv4(),
    image: image2,
    title: "“Music is love”",
    radio: "Radio 86.5",
  },
  {
    id: uuidv4(),
    image: image3,
    title: "“Music is love”",
    radio: "Radio 86.5",
  },
];

export default popularAlbumData;
