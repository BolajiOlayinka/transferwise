import React, { Component } from "react";
import styled from "styled-components";

export default class Calc extends Component {
  render() {
    return (
      <React.Fragment>
        <SendSection>
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
            <select name="pets" id="pet-select">
              <option value="">USD</option>
              <option value="dog">GBP</option>
              <option value="cat">EUR</option>
              <option value="hamster">JPY</option>
              <option value="parrot">NGN</option>
              
            </select>
          </StyledSelect>
        </SendSection>
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
  background-color: var(--mainBlue);
  select{
    outline: 0;
    border: none;
    -moz-outline-style: none;
    height:61px;
    background-color:var(--mainBlue);
    color:white;
  }
`;
