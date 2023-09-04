import image1 from "@/../public/images/shows/player/s1.jpg";
import image2 from "@/../public/images/shows/player/s2.jpg";
import image3 from "@/../public/images/shows/player/s3.jpg";
import image4 from "@/../public/images/shows/player/s4.jpg";
import { v4 as uuidv4 } from "uuid";

const popularOnlineStation = [
  {
    id: uuidv4(),
    image: image1,
    radio: "Radio 86.5",
    showName: "“The Live Love”",
    viewNow: 24.2,
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: image2,
    radio: "Radio 86.5",
    showName: "“Music Show”",
    viewNow: 24.2,
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: image3,
    radio: "Radio 86.5",
    showName: "“World Music Show”",
    viewNow: 24.2,
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: image4,
    radio: "Radio 86.5",
    showName: "“Light show”",
    viewNow: 24.2,
    audio: "/audio/main.mp3",
  },
];

export default popularOnlineStation;
