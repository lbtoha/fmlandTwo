import PopularShow from "@/components/shared/PopularShow";
import popularShowData from "../../../../public/data/popularShowData";
import PopularShowCard from "../../shared/PopularShowCard";

const PopularShowTwo = () => {
  return (
    <PopularShow>
      {popularShowData.map(({ id, ...props }) => (
        <PopularShowCard key={id} {...props} bg={true} />
      ))}
    </PopularShow>
  );
};

export default PopularShowTwo;
