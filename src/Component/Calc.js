import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ngnflag from "../assets/flags/nigeria.svg";

import jpyflag from "../assets/flags/japan.svg";

import btcflag from "../assets/flags/btc.svg";
import usdcflag from "../assets/flags/usdc.svg";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from 'axios';

export default class Calc extends Component {
  state = {
    ButtonValueOne: "USDC",
    ButtonValueTwo: "NGN",
    ButtonFlagOne: usdcflag,
    ButtonFlagTwo: ngnflag,
    defaultValue:1000,
    modalone: false,
    modaltwo: false,
    BTCPrice:'',
    USDCPrice:''
  };
  componentDidMount(){
    axios.get("https://api.nomics.com/v1/currencies/ticker?key=faad65ad538a46ad1a3a66a3db9b6386&ids=BTC,USDC,USD,JPY")
    .then((res)=>{
      let BTCPrice= res.data['0']['price']
      let USDCPrice=res.data['1']['price']

      this.setState({
        BTCPrice:BTCPrice,
        USDCPrice:USDCPrice
      })
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    axios.get("https://api.nomics.com/v1/exchange-rates?key=faad65ad538a46ad1a3a66a3db9b6386&ids=USD,JPY")
    .then((res)=>{
      console.log(res)
    })
    .catch(()=>{

    })
  }
  toggleModalOne = () => {
    this.setState({ modalone: !this.state.modalone });
  };
  toggleModalTwo = () => {
    this.setState({ modaltwo: !this.state.modaltwo });
  };

    handleSelect=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
      
    }
    handleInput=(e)=>{
      this.setState({
        defaultValue:e.target.value
      })
      
    }
  JPYButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "JPY",
      ButtonFlagOne: jpyflag,
    });
  };
  JPYButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "JPY",
      ButtonFlagTwo: jpyflag,
    });
  };
  BTCButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "BTC",
      ButtonFlagOne: btcflag,
    });
  };
  BTCButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "BTC",
      ButtonFlagTwo: btcflag,
    });
  };
  USDCButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "USDC",
      ButtonFlagOne: usdcflag,
    });
  };
  USDCButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "USDC",
      ButtonFlagTwo: usdcflag,
    });
  };
  NGNButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "NGN",
      ButtonFlagOne: ngnflag,
    });
  };
  NGNButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "NGN",
      ButtonFlagTwo: ngnflag,
    });
  };

  render() {
    return (
      <React.Fragment>
      
        <SendSection>
        
          <InputSection>
            <p>You send</p>
            <input
              type="number"
              value={this.state.defaultValue}
              onChange={this.handleInput}
              autocomplete="off"
              placeholder="1000"
            />
          </InputSection>
          <StyledSelect>
            <StyledButton onClick={this.toggleModalOne}>
              <img src={this.state.ButtonFlagOne} alt="Currencies Flags" />{" "}
              {this.state.ButtonValueOne}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledButton>
          </StyledSelect>
        </SendSection>

        <CurrencyModal
          isOpen={this.state.modalone}
          toggle={this.toggleModalOne}
        >
          <ModalHeader toggle={this.toggleModalOne}></ModalHeader>
          <ModalBody>
            <ul>
              <li
                onClick={() => {
                  this.JPYButtonOneSelect();
                  this.toggleModalOne();
                }}
              >
                <img src={jpyflag} alt="Japanese Flag" />
                Japanese Yen
              </li>
              <li
                onClick={() => {
                  this.BTCButtonOneSelect();
                  this.toggleModalOne();
                }}
              >
                <img src={btcflag} alt="British Flag" />
                Bitcoin
              </li>
              <li
                onClick={() => {
                  this.USDCButtonOneSelect();
                  this.toggleModalOne();
                }}
              >
                <img src={usdcflag} alt="USDC Coin" />
                USD Coin
              </li>
              <li
                onClick={() => {
                  this.NGNButtonOneSelect();
                  this.toggleModalOne();
                }}
              >
                <img src={ngnflag} alt="Nigerian Flag" />
                Nigerian Naira
              </li>
            </ul>
          </ModalBody>
        </CurrencyModal>

                <RatesSection>
                <LineSection>
                <StyledLine/>
                </LineSection>
                
                <FixedRates className="my-auto">
                <div style={{display:"flex"}}>
                    <Amount>780,000</Amount>
                    <AmountDesc>Transfer rate (Fixed)</AmountDesc>
                  </div>
                  <div style={{display:"flex"}}>
                  
                    <Amount>980,000</Amount>
                    <AmountDesc>Amount We will convert</AmountDesc>
                  </div>
                  <div style={{display:"flex"}}>
                    <Amount>780,000</Amount>
                    <AmountDesc>Guaranteed Rates (10 mins)</AmountDesc>
                  </div>
                </FixedRates>
                </RatesSection>

        <ReceiveSection>
          <OutputSection>
            <p>You receive</p>
            <input
              type="number"
              autocomplete="off"
              disable="true"
            />
          </OutputSection>
          <StyledSelect>
            <StyledButton onClick={this.toggleModalTwo}>
              <img src={this.state.ButtonFlagTwo} alt="Currencies Flags" />{" "}
              {this.state.ButtonValueTwo}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledButton>
          </StyledSelect>
        </ReceiveSection>
               
                
        <OutputCurrencyModal
          isOpen={this.state.modaltwo}
          toggle={this.toggleModalTwo}
        >
          <ModalHeader toggle={this.toggleModalTwo}></ModalHeader>
          <ModalBody>
            <ul>
              <li
                onClick={() => {
                  this.JPYButtonTwoSelect();
                  this.toggleModalTwo();
                }}
              >
                <img src={jpyflag} alt="Japanese Flag" />
                Japanese Yen
              </li>
              <li
                onClick={() => {
                  this.BTCButtonTwoSelect();
                  this.toggleModalTwo();
                }}
              >
                <img src={btcflag} alt="Bitcoin Flag" />
                Bitcoin
              </li>
              <li
                onClick={() => {
                  this.USDCButtonTwoSelect();
                  this.toggleModalTwo();
                }}
              >
                <img src={usdcflag} alt="USD Coin" />
                USD Coin
              </li>
              <li
                onClick={() => {
                  this.NGNButtonTwoSelect();
                  this.toggleModalTwo();
                }}
              >
                <img src={ngnflag} alt="Nigerian Flag" />
                Nigerian Naira
              </li>
            </ul>
          </ModalBody>
        </OutputCurrencyModal>
      </React.Fragment>
    );
  }
}

const SendSection = styled.div`
  display: flex;
`;
const ReceiveSection = styled.div`
  display: flex;
  margin-top:-15px;
 
`;
const InputSection = styled.div`
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;

  input {
    border-left-width: 1px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    height: 36px;
    ${"" /* padding: 28px 12px 4px; */}
    font-size: 22px;
    line-height: 32px;
    outline: 0;
    border: none;
    -moz-outline-style: none;
    :active {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    :focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
  }
`;
const OutputSection = styled.div`
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;

  input {
    border-left-width: 1px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    height: 36px;
    ${"" /* padding: 28px 12px 4px; */}
    font-size: 22px;
    line-height: 32px;
    outline: 0;
    border: none;
    -moz-outline-style: none;
    :active {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    :focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
  }
`;
const StyledSelect = styled.div`
  background-color: #2e4369;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  width: 120px;
  background-color: #2e4369;
  border: #2e4369;
  justify-content: space-around;
  font-weight: bold;
  color: white;
  outline: 0;
  border: none;
  -moz-outline-style: none;
  img {
    width: 30px;
  }
  :hover {
    border: 0.5px solid white;
  }
  :focus {
    outline: 0;
    border: 0.5px solid white;
  }
`;
const CurrencyModal = styled(Modal)`
  background-color: white;
  width: 420px;
  text-align: left !important;
  position: relative;
  z-index: 100;
  margin-top: 80px;
  margin-right: 200px;

  font-weight: 400;
  border-radius: 3px;
  ul {
    text-decoration: none;
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  li {
    padding: 13px 16px 11px;

    width: 100%;
    font-size: 0.9375rem;
    :hover {
      cursor: pointer;
      background-color: #2e4369;
      outline: 0;
      color: white;
    }
  }
  img {
    width: 30px;
    padding-right: 10px;
  }
  @media (min-height: 592px) {
    max-height: 592px;
  }
`;
const OutputCurrencyModal = styled(Modal)`
  background-color: white;
  width: 420px;
  text-align: left !important;
  position: relative;
  z-index: 100;
  margin-top: 80px;
  margin-right: 200px;

  font-weight: 400;
  border-radius: 3px;
  ul {
    text-decoration: none;
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  li {
    padding: 13px 16px 11px;

    width: 100%;
    font-size: 0.9375rem;
    :hover {
      cursor: pointer;
      background-color: #2e4369;
      outline: 0;
      color: white;
    }
  }
  img {
    width: 30px;
    padding-right: 10px;
  }
  @media (min-height: 592px) {
    max-height: 592px;
  }
`;
const RatesSection =styled.div `
display:flex;
margin-top:-15px;
${'' /* align-items:center; */}

`
const LineSection = styled.div `
width:10%;

`
const StyledLine = styled.hr `
background-color:#2e4369;
height:170px;
border: 1px solid #2e4369;
width:1px;

position:relative;
z-index:0;
`
const FixedRates =styled.div `
padding-top:15px;
width:90%;

`
const Amount = styled.p `
width:30%;
color:white;
:second-child{
  color:#d3d5d8
}
`
const AmountDesc = styled.p `
color:#eaeaea;
:second-child{
  color:#d3d5d8;
}
:last-child(){
  color:#00b9ff;
}
`