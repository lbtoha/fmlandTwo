import { radioJockeys } from "../../../../public/data/radioJockey";
import ExpertRjCardTwo from "./ExpertRjCardTwo";

const Host = () => {
  return (
    <>
      <div className="section-top">
        <h3>Host</h3>
        <div className="section-top-line mt-4"></div>
      </div>
      <div className="row gy-4">
        {radioJockeys.map(({ id, ...props }) => (
          <ExpertRjCardTwo key={id} {...props} />
        ))}
      </div>
    </>
  );
};

export default Host;
