import popularRadioStationData from "@/../public/data/popularRadioStationData";
import PopularShow from "@/components/shared/PopularShow";
import PopularShowCard from "./PopularShowCard";

const PopularShowThree = () => {
  return (
    <PopularShow>
      {popularRadioStationData.map(({ id, ...props }) => (
        <PopularShowCard key={id} {...props} />
      ))}
    </PopularShow>
  );
};

export default PopularShowThree;
