import image1 from "@/../public/images/blog/comment1.jpg";
import image2 from "@/../public/images/blog/comment2.jpg";
import { v4 as uuidv4 } from "uuid";
const comments = [
  {
    id: uuidv4(),
    image: image1,
    name: "Thoma",
    date: "19 jun 2022",
    message:
      "A mi gravida diam libero. In turpis arcu tempus magna leo ipsum tortor sed viverra. Leo, egestas eget leo nec.",
  },
  {
    id: uuidv4(),
    image: image2,
    name: "Malion",
    date: "19 jun 2022",
    message:
      "A mi gravida diam libero. In turpis arcu tempus magna leo ipsum tortor sed viverra. Leo, egestas eget leo nec.",
  },
  {
    id: uuidv4(),
    image: image1,
    name: "Thoma",
    date: "19 jun 2022",
    message:
      "A mi gravida diam libero. In turpis arcu tempus magna leo ipsum tortor sed viverra. Leo, egestas eget leo nec.",
  },
];

export default comments;
