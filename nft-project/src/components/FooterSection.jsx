import footer1 from "../assets/footer1.JPG";
import footer2 from "../assets/footer2.JPG";
import footer3 from "../assets/footer3.JPG";
import logo from "../assets/kk-logo-header.png";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-icons">
            <img src={footer1} alt="" />
            <img src={footer2} alt="" />
            <img src={footer3} alt="" />
          </div>
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-text">
            <p>
              3333 Unique Kaijuz and 6666 Unique Baby Kaijuz Who Need A Home.
            </p>
            <p>© 2021 KAIJUKINGZ ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
