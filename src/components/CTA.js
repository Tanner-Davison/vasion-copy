import React from "react";
import styled from "styled-components";
import BottomRightCircles from '../images/BottomRightCircles.png'
const CTA = ()=>{
    return (
      <AllWrapper>
        <ContentDiv>
          <h3>
            Liberate your team from outdated print servers. Switch to our
            serverless direct IP infrastructure today.
          </h3>
          <button id={"buttonId"}>
            <p>SCHEDULE A DEMO </p>
          </button>
        </ContentDiv>
        
      </AllWrapper>
    )
};

export default CTA;

const AllWrapper = styled.div`
  display: inline-flex;
  width: 100vw;
  padding: 100px 148px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: inline-flex;
    padding: 57px 55px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100vw;
    padding: 30px 42px;
    flex-direction: column;
    align-items: flex-start;

    gap: 10px;
  }
`
const ContentDiv = styled.div`
  display: flex;
  width: 80vw;
  padding: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border-radius: 24px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #3d2562;
  h3 {
    color: var(--grey-white-ffffff, #fff);
    font-family: Archivo;
    font-size: 30px;
    width: 50%;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }
  #buttonId {
    display: flex;
    height: 42px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 1px;
    border: none;
    border-radius: 28px;
    background: var(--orange-primary-orange-ff-5100, #ff5100);
    color: white;
  }
  #buttonId >p{
    font-size: 1em;
    font-weight: 600;
  }

  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;
    padding-right: 0px;
    flex-direction: row;
    justify-content: center;
    width: 90vw;
    align-self: center;
    align-items: center;
    padding: 31px 48px;
    gap: 4vw;
    flex: 1 0 0;
    border-radius: 24px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      #3d2562;
    h3 {
      color: var(--grey-white-ffffff, #fff);
      font-family: Archivo;
      font-size: 30px;
      width: 64%;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
    }
    #buttonId {
      display: flex;
      height: 42px;
      padding: 10px 30px;
      justify-content: center;
      align-items: center;
      border: none;
      gap: 1px;
      color: white;
      border-radius: 28px;
      background: var(--orange-primary-orange-ff-5100, #ff5100);
    }
    #buttonId > p {
      display: flex;
      font-size: 1em;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding: 36px 28px;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border-radius: 24px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      #3d2562;
    h3 {
      color: var(--grey-white-ffffff, #fff);
      /* Headings/h3Mobile */
      font-family: Archivo;
      font-size: 30px;
      font-style: normal;
      width: 100%;
      font-weight: 700;
      line-height: 36px; /* 120% */
    }
    #buttonId {
      display: flex;
      height: 40px;
      padding: 10px 20px;
      align-items: center;
      border: none;
      gap: 1px;
      border-radius: 20px;
      font-weight: 600;
      color: white;
      border: none;
      background: var(--orange-primary-orange-ff-5100, #ff5100);
    }
  }
`