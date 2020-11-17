import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ngnflag from "../assets/flags/nigeria.svg";
import usaflag from "../assets/flags/usa.svg";
import jpyflag from "../assets/flags/japan.svg";
import ukflag from "../assets/flags/uk.svg";
import euroflag from "../assets/flags/euro.svg";

export default class Calc extends Component {
  state = {
    JPY: "JPY",
    USD: "USD",
    NGN: "NGN",
    EUR: "EUR",
    modal: false,
  };
  toggle = () => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({ modal: !this.state.modal });
  };
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <SendSection
          ref={(node) => {
            this.node = node;
          }}
        >
          <InputSection>
            <p>You send</p>
            <input
              type="number"
              value="1,000"
              inputmode="decimal"
              autocomplete="off"
              placeholder="1000"
            />
          </InputSection>
          <StyledSelect>
            <StyledButton onClick={this.toggle}>
              <img src={usaflag} alt="" /> USA
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledButton>
            {/* <select name="pets" id="pet-select">
              <option value="">USD</option>
              <option value="dog">GBP</option>
              <option value="cat">EUR</option>
              <option value="hamster">JPY</option>
              <option value="parrot">NGN</option>
              
            </select> */}
          </StyledSelect>
        </SendSection>
        {this.state.modal ? (
          <CurrencyModal>
            <CloseModal>
              <FontAwesomeIcon icon={faTimes} />
            </CloseModal>
            <hr />
            <ul>
              <li>
                <img src={jpyflag} alt="Japanese Flag" />
                Japanese Yen
              </li>
              <li>
                <img src={ukflag} alt="Japanese Flag" />
                British Pound
              </li>
              <li>
                <img src={ngnflag} alt="Japanese Flag" />
                Nigerian Naira
              </li>
              <li>
                <img src={usaflag} alt="Japanese Flag" />
                United States Dollar
              </li>
              <li>
                <img src={euroflag} alt="Euro Flag" />
                Euro
              </li>
            </ul>
          </CurrencyModal>
        ) : null}
      </React.Fragment>
    );
  }
}

const SendSection = styled.div`
  display: flex;
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
const CurrencyModal = styled.div`
  background-color: white;
  width: 450px;
  text-align: left !important;
  position: relative;
  z-index: 100;
  margin-top: -70px;
  margin-left: 18px;
  padding-top: 40px;
  padding-bottom: 40px;
  ul {
    text-decoration: none;
    list-style-type: none;
  }
  li {
    height: 40px;
    width: 100%;
    :hover {
      cursor: pointer;
    }
  }
  img {
    width: 30px;
  }
`;
const CloseModal = styled.div`
display:flex;
  width: 100%;
  margin-left: auto;
  padding-right: 20px;
`;
