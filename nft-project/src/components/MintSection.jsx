import { getDefaultNormalizer } from "@testing-library/dom";
import mint from "../assets/mint.gif";

const MintSection = () => {
  return (
    <section className="mint">
      <div className="mint-container">
        <div className="mint-info">
          <img src={mint} alt="" />
          <div className="mint-text">
            <p>SOLD OUT !!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintSection;
