import PopularShow from "@/components/shared/PopularShow";
import PopularShowCard from "@/components/shared/PopularShowCard";
import popularShowData from "../../../../public/data/popularShowData";

const PopularShowOne = () => {
  return (
    <PopularShow>
      {popularShowData.map(({ id, ...props }) => (
        <PopularShowCard key={id} {...props} />
      ))}
    </PopularShow>
  );
};

export default PopularShowOne;
