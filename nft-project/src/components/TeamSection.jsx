import team1 from "../assets/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TeamSection = () => {
  return (
    <section className="team">
      <div className="team-container">
        <h1>Kaiju Kingz Team</h1>
        <div className="team-section-1">
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <div className="team-member-info">
              <h2>
                DOTS{" "}
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
              </h2>
              <h3>Lead Developer</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <div className="team-member-info">
              <h2>
                3LLL{" "}
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
              </h2>
              <h3>Artist</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <div className="team-member-info">
              <h2>
                Madotsuki{" "}
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
              </h2>
              <h3>Community Manager</h3>
            </div>
          </div>
        </div>
        <div className="team-section-2">
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <div className="team-member-info">
              <h2>
                KEKWIN{" "}
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
              </h2>
              <h3>Developer</h3>
            </div>
          </div>
          <div className="team-member">
            <img src={team1} alt="" className="team-img" />
            <div className="team-member-info">
              <h2>
                arzy{" "}
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
              </h2>
              <h3>Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
