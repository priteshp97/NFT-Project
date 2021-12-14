import logo from "../assets/kk-logo-header.png";
import breeding from "../assets/KK-breeding.png";

const UtilitySection = () => {
  return (
    <section className="utility">
      <div className="utility-container">
        <div className="utility-headings">
          <img src={logo} alt="" />
          <p>
            3333 Genesis Kaijuz <span>|</span> 6666 Baby Kaijuz to be created{" "}
            <span>|</span> 0.06666 Mint Price
          </p>
        </div>
        <div className="utility-info-container">
          <div className="utility-info-left">
            <h3>Genesis Kaijuz</h3>
            <p>
              The original Kingz. These were the first KaijuKingz to be minted,
              and the only ones capable of generating 5 $RWASTE a day. Currently
              $RWASTE can be used to name Kaijuz, write lore for Kaijuz, and
              even to create a Baby Kaiju by Fuzing the DNA from two Genesis
              Kaijuz. As the project and community develops, there will be even
              further utilization of $RWASTE, making Genesis Kaijuz the
              foundation for all things to come. All 3333 Genesis Kaijuz have
              been completely minted and there will never be any more created.
            </p>
          </div>
          <div className="utility-info-right">
            <h3>Baby Kaijuz</h3>
            <p>
              Created from mutating the fuzed DNA of two Genesis Kaijuz. There
              is a maximum of 6,666 of these monsters to be created. Although
              Baby Kaijuz require DNA from two separate Genesis Kaijuz to be
              created, they do not inherit traits from them. Instead, Baby
              Kaijuz mutate traits of their own, and can even be born with belly
              and spike colors that are different from their body colors. More
              will be revealed about Baby Kaijuz as Augminted Labs continues
              studying them over time.
            </p>
          </div>
        </div>
        <div className="utility-breeding">
          <img src={breeding} alt="" />
        </div>
        <div className="utility-community">
          <h3>The KaijuKingz Community</h3>
          <ul>
            <li>
              • Will aim to mentor and onboard untapped talent into the Web3
              ecosystem, as well as potentially granting scholarships, making
              the KaijuKingz community a gateway for future Kingz to earn their
              own thrones.
            </li>
            <li>
              • Will provide funding for living expenses,equipment, and classes
              for developers and creatives to promote them down a path of
              greatness.
            </li>
            <li>
              • Will expand the KaijuKingz universe with additional features and
              updates, allowing it to continually grow in ways that the
              community values most.
            </li>
          </ul>
        </div>
      </div>
      <div className="roadmap-launch">
        <h2 className="h-center">POST LAUNCH SCHEDULE</h2>
        <div className="roadmap-container">
          <div className="roadmap-1">
            <h2>PHASE 1</h2>
            <h2>Legendary Auction [Finished]</h2>
            <p>
              Feast your eyes on some of the rarest KaijuKingz in the
              collection: the Legendary Kaijuz. Only 10 of these mythical beasts
              exist, and they are all unique 1/1 special edition Kaijuz with
              animations exclusive to them. One Legendary Kaiju, the Mecha
              Kaiju, was exclusively auctioned off, only allowing holders of
              N0XSCAPE Founders Cards to participate in the auction. Another one
              of these special Legends was tucked away in the initial mint of
              KaijuKingz for one lucky degen to find. After all KaijuKingz were
              minted, the final 8 were auctioned off.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
