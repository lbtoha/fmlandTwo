import Host from "./Host";
import Player from "./Player";

const RadioSectionDetails = () => {
  return (
    <section className="section-bg pt-120 pb-120">
      <div className="container">
        <Player />
        <Host />
      </div>
    </section>
  );
};

export default RadioSectionDetails;
