import React, { useEffect, useState } from "react";
import Link from "next/link";
// import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
// import Input from "reusecore/Form/Input";

// import Button from "reusecore/Button";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { contract_address , abi} from "../../../config";
// import {
//   FaBitcoin,
//   FaCcMastercard,
//   FaCcVisa,
//   FaCcDiscover,
// } from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";
import { ethers } from "ethers";

const CoinFund = () => {

  const [whitelist_Address, setWhitelist_Address] = useState("")
  const [gas_price, setGas_price] = useState("")


  useEffect(() => {
    connect_wallet()
  }, [])
  async function connect_wallet(){
    if(Web3.givenProvider){
      const providerOptions = {
        /* See Provider Options Section */
      };
      
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });
      
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.getGasPrice().then(result => {
        console.log(result)
        setGas_price(result)
      });

      
    
    }else{
      alert("Web3 Not Found");
      //setwalletText("Connected");
    }

  }
  const whitelistAddress = async function(){
    console.log("whitelist address:"+whitelist_Address)
    if(whitelist_Address !== "" || whitelist_Address !== "0"){
      if(Web3.givenProvider ){ 

        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable()
        const contract = new web3.eth.Contract(abi, contract_address);
  
        const addresses = await web3.eth.getAccounts()
        const address = addresses[0]
        console.log("addresses[0]: "+addresses[0])
        // console.log("addresses[1]: "+addresses[1])
        // console.log("Default address: "+await web3.eth.defaultAccount)

  
        contract.methods.includeAccount(whitelist_Address).send({from : address, gasPrice: gas_price, gas: 3000000}, (err, result) => {
          if(err != null){
              alert("Error");

          }
          if(result != null){
              //alert("Whitelist Successful")
          }
      })
  
      }
    }else{
      alert("Enter Whitelist Address");
    }


  }

    return (
      <CoinFundWrapper id="token">
        <Container>
          <Row>
            <Col className="lg-6 md-12 ">
              <Box className="coin-fund-content-left">
                <SectionTitle>
                  <SectionBackground>
                    <Heading>
                      Powering Data for the new equity blockchain.
                    </Heading>
                  </SectionBackground>
                  <Text>
                    The highly the not having with lively. Our up with ran go her
                    it gloomy the back, though however projected not for six with
                    then, trusted as concepts belt.
                  </Text>
                </SectionTitle>
                
                  
                    
  
                    
                 <Box className="btn-wrapper">
                 <input style={{width: 400 ,height: 50 }}
                        type="text"
                        onChange={e => { setWhitelist_Address(e.target.value); }}
                        placeholder="Enter Address to Whitelist"
                      />
                   </Box> 
                
                <Box className="btn-wrapper">                    
                  <Link href="">
                    <a onClick={whitelistAddress} className="btn btn-fill">Send</a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-6 md-12 countdown-wrap">

  

            </Col>
          </Row>
        </Container>
      </CoinFundWrapper>
    );
}
export default CoinFund;
