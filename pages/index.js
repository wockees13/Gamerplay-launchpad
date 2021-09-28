import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Flexbox from "flexbox-react";

import Navigation from "sections/Navigation";
import BannerTwo from "sections/BannerTwo";
import CoinFund from "sections/CoinFund";
import Footer from "sections/Footer";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

import Link from "next/link";
// import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { Button } from "react-scroll";
// import Input from "reusecore/Form/Input";

// import Button from "reusecore/Button";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { contract_address, abi } from "../config";
import CoinFundWrapper from "./coinFund.style";

import Badge from "reusecore/Badge";
import Image from "reusecore/Image";

import BannerImage from "assets/images/banners/banner-two/KCC-GO-Illustration.png";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import { FaGithub } from "react-icons/fa";

import keyIcon from "assets/images/banners/banner-two/cryptik-banner-key-icon.svg";
import watchIcon from "assets/images/banners/banner-two/cryptik-banner-watch-icon.svg";
import heartIcon from "assets/images/banners/banner-two/cryptik-banner-heart-icon.svg";
import stackedCoins from "assets/images/banners/banner-two/stackedCoins.png";

import BannerWrapper from "./banner.style";

const Home = () => {
  const [whitelist_Address, setWhitelist_Address] = useState("");
  const [gas_price, setGas_price] = useState("");
  const [eth_amount, setEth_amount] = useState("");
  const [funds_raised, setFunds_raised] = useState("0");
  const [total_buyers, setTotalBuyers] = useState("0");

  useEffect(() => {
    connect_wallet();
    fetch_data();
  }, []);

  async function fetch_data() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(abi, contract_address);

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      //await Web3.givenProvider.enable()

      // Update Function name Here
      contract.methods.returnPreSaleMember().call((err, result) => {
        if (result != null) {
          setTotalBuyers(result);
        }
      });

      // Update Function name Here
      contract.methods.returnPreSaleAmount().call((err, result) => {
        if (result != null) {
            setFunds_raised(result / 1000000000000000000);
        }
      });
    }
  }
  async function connect_wallet() {
    if (Web3.givenProvider) {
      const providerOptions = {
        /* See Provider Options Section */
      };

      const web3Modal = new Web3Modal({
        network: "binance", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.getGasPrice().then((result) => {
        console.log(result);
        setGas_price(result);
      });
    } else {
      alert("Web3 Not Found");
      //setwalletText("Connected");
    }
  }

 
  async function buy() {
      if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(abi, contract_address);

      const addresses = await web3.eth.getAccounts();
          const address = addresses[0];
          const amount = web3.utils.toWei(eth_amount, "ether")
      console.log("addresses[0]: " + addresses[0]);
          console.log("Contract Address: " + contract_address);

      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)
        const result = await contract.methods.buy(amount).send({
        from: address,
        value: web3.utils.toWei(eth_amount, "ether"),
            gas: 400000
      });
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Link href="">
          <a onClick={connect_wallet} className="connect-btn">
            Connect Wallet
          </a>
        </Link>
      </nav>
      <Head>
        <title>KCCGO | Launchpad</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />

      <BannerWrapper>
        
        <img
          src={particleBottomRight}
          className="section__particle bottom-right"
          alt="cryptik particles"
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <Heading className="heading">KCCGO Launchpad</Heading>
              <Text as="span" className="description">
                Launching X/X/20XX X:XX PM (UCT)
              </Text>
              <div className="coins__list">
                <div className="coin">
                                  <Image src={keyIcon} alt="crypto banner icon" />
                  <Text>Softcap</Text>
                </div>
                <div className="coin">
                  <Image src={watchIcon} alt="crypto banner icon" />
                  <Text>Hardcap</Text>
                </div>
                <div className="coin">
                  <Image src={heartIcon} alt="crypto banner icon" />
                  <Text>Max amount can spend</Text>
                </div>
              </div>
              <div>
                <h2>Funds Raised: {funds_raised} Bnb</h2>
                <h2>Total Buyers: {total_buyers}</h2>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setEth_amount(e.target.value);
                  }}
                  placeholder="Enter BNB Amount"
                />
              </div>
              <Link href="">
                <button onClick={buy} className="connect-btn buy-btn">
                  Buy
                </button>
              </Link>
            </div>
            <div className="col">
              <Image
                src={BannerImage}
                alt="crypto banner icon"
                style={{ width: 400, height: 400 }}
              />
            </div>
          </div>
        </div>
 </BannerWrapper>
    </ThemeProvider>
  );
};

export default Home;
