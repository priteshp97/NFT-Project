import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { getDefaultNormalizer } from "@testing-library/dom";
import mint from "../assets/mint.gif";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import UndeadPastelClub from "./UndeadPastelClub.json";

const contractAddress = "0x453087ff5F927340911c878C4d9780DDe41257C6";

const MintSection = () => {
  const [accounts, setAccounts] = useState([]);

  async function connectAccounts() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  }, []);

  const [mintAmount, setMintAmount] = useState(1);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        UndeadPastelClub.abi,
        signer
      );

      try {
        const response = await contract.mint(1, {
          value: ethers.utils.parseEther("0.01"),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <section className="mint">
      <div className="mint-container">
        <div className="mint-info">
          <img src={mint} alt="" />
          <div className="mint-text">
            {accounts.length && (
              <div>
                {/* <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
                <button onClick={() => setMintAmount(mintAmount + 1)}>+</button> */}
                <button onClick={() => handleMint()}>Mint</button>
              </div>
            )}
            {/*<p>SOLD OUT !!!</p>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintSection;
