import PopularShow from "@/components/shared/PopularShow";
import popularRadioStationData from "../../../../public/data/popularRadioStationData";
import PopularRadioStationCard from "../homeTwo/PopularRadioStationCard";

const PopularShowThree = () => {
  return (
    <PopularShow>
      {popularRadioStationData.map(({ id, ...props }) => (
        <PopularRadioStationCard key={id} {...props} />
      ))}
    </PopularShow>
  );
};

export default PopularShowThree;
