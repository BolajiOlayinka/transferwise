import React from "react";
import styled from "styled-components";
import Calc from "./Calc";

export default function Banner() {
  return (
    <WrapperSection>
      <Wrapper>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <Left>
              <h1>A cheaper, faster way to send money abroad <span style={{color:"#00b9ff"}}>.</span></h1>
              <p>Join over 8 million people who get the real exchange rate with 
              TransferWise. We’re up to 8x cheaper than banks.</p>
            </Left>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <Right>
              <Calc />
            </Right>
          </div>
        </div>
      </Wrapper>
    </WrapperSection>
  );
}

const Wrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
    padding-top: 80px;
    padding-bottom: 112px;
  }
`;
const WrapperSection = styled.div`
  background: var(--mainBlue);
  height: 600px;
`;

const Left = styled.div`

h1{
    max-width:500px;
    font-size: 2.625rem;
    color:white;
    margin-top:32px;
    margin-bottom:8px;
    font-weight:bold;
}
p{
    font-size:1rem;
    line-height:1.5;
    max-width: 500px;
    color:white;
}
`;

const Right = styled.div`

`;
