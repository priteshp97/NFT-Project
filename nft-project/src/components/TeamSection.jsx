import team1 from "../assets/1.png";
import twitter from "../assets/twitter2.JPG";

const TeamSection = () => {
  return (
    <section className="team">
      <div className="team-container">
        <h1>Kaiju Kingz Team</h1>
        <div className="team-section-1">
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <h2>DOTS</h2>
            <h3>Lead Developer</h3>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <h2>3LLL</h2>
            <h3>Artist</h3>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <h2>Madotsuki</h2>
            <h3>Community Manager</h3>
          </div>
        </div>
        <div className="team-section-2">
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <h2>KEKWIN</h2>
            <h3>Developer</h3>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <h2>arzy</h2>
            <h3>Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
