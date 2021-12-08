import imgs from "../assets/about-imgs.png";
import logo from "../assets/about-logo.png";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <img src={logo} alt="" className="about-left-img" />
          <p>
            KaijuKingz was spawned from the mind of CyberKongz holder and
            community member, OhDots, under his newly founded company: Augminted
            Labs. KaijuKingz hopes to expand its community with synergistic
            mechanics that foster competition and collaboration between Web3
            communities. The collection will start with a mint of 3,333 Genesis
            Kaijuz, each granting its holder access to special perks and
            accesses. Genesis Kaijuz passively generate Radioactive Waste, which
            can be used to create Baby Kaijuz. Standing larger than life in a
            69x69 pixel square, Kaijuz will have a wide variety of traits,
            types, and different aesthetics. Holding a Genesis Kaiju will
            reserve you a throne as a King of the Metaverse.
          </p>
        </div>
        <div className="about-right">
          <img src={imgs} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
