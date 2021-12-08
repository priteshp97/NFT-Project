import NavSection from "./NavSection";
import headerLogo from "../assets/kk-logo-header.png";
import arrow from "../assets/arrow.png";

const HeaderSection = () => {
  return (
    <>
      <NavSection />
      <div className="header">
        <div className="header-info">
          <img src={headerLogo} alt="" />
          <p className="header-info-text">
            Behold the KaijuKingz; larger than life pixel beasts tearing down a
            city near you. Our creed is to expand the Metaverse by supporting
            talented creatives and developers looking to break into NFTs.
            $RWASTE radiates in the core of our community, passively generated
            by Genesis Kaijuz as fuel for out Kaijuz. Demolish the old to make
            way for a new kind of community - a community of Kingz.
          </p>
          <button className="btn-connect">LEARN MORE</button>
          <img src={arrow} alt="" className="arrow" />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
