import React from "react"
import styled from "styled-components"
import RightPng from "../images/RightPng.png"
import leftPng from "../images/leftPng.png"

const PullQuote = () => {
  return (
    <ComponentWrapper>
      <img src={leftPng} alt={"left arrow"} id="imageId" />

      <div className={"middleDiv"}>
        <p className={"paragraph"} id={"paragraphMain"}>
          We are thrilled to partner with PrinterLogic to offer our mutual
          customers a simplified and enhanced printing experience.
        </p>

        <p className={"paragraph"} id={"paragraphStamp"}>
          —Ed Kraft, Technology & User Services Manager, Regal Ware, Inc.
        </p>
        <span>“</span>
        <p id={"bottom-link"}> See what other customers have to say →</p>
      </div>
      <img src={rightPng} alt={"rightArrow"} id={"imageId"} />
    </ComponentWrapper>
  )
}
export default PullQuote

const ComponentWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 98vw;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 45px;
  padding-bottom: 100px;
  gap: 54px;
  @media screen and (min-width: 1441px) {
    display: flex;
    width: 100vw;
    padding: 60px 80px;
    flex-direction: row;
    align-items: center;
    gap: 10em;
  }
  #imageId {
    width: 30px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
  }
  #imageId:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  .middleDiv {
    position: relative;
    display: flex;
    padding-top: 24px;
    align-items: flex-start;
    flex-direction: column;
    width: 944px;
    height: auto;
    gap: 24px;
  }
  p {
    max-width: unset;
  }
  .paragraph {
    position: relative;
    margin: 0;
    word-break: break-word;
    padding: 0;
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    font-family: Archivo;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
  }

  #paragraphStamp {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  span {
    position: absolute;
    top: 44px;
    left: -53px;
    color: var(--purple-primary-purple-591559, #591559);
    font-family: Archivo;
    font-size: 140px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
  }
  #bottom-link {
    position: absolute;
    bottom: -50px;
    color: #ff5100;
    left: 30%;
    /* Headings/h6Desktop */
    font-family: Archivo;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    transition: transform 0.3s ease-in-out;
  }
  #bottom-link:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media screen and (min-width: 428px) and (max-width: 1024px) {
    position: relative;
    display: inline-flex;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1vw;
    #imageId {
      width: 4vw;
      height: 6vw;
    }
    .middleDiv {
      position: relative;
      display: flex;
      padding-top: 24px;
      align-items: flex-start;
      flex-direction: column;
      width: 80%;
      height: auto;
      gap: 24px;
    }
    .paragraph {
      font-size: 4.5vw;
      line-height: 6vw;
      font-weight: 550;
      word-spacing: 2px;
      padding-left: 8%;
    }
    #paragraphStamp {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 428px) {
    gap: 10px;
    #imageId {
      width: 15px;
      height: 24px;
    }
    .paragraph {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      padding-left: 11vw;
    }
    span {
      position: absolute;
      top: 41px;
      left: 1px;
      color: var(--purple-primary-purple-591559, #591559);
      font-family: Archivo;
      font-size: 104px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px;
    }
    #bottom-link {
      position: absolute;
      bottom: -43px;
      color: #ff5100;
      left: 5%;
      font-family: Archivo;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      transition: transform 0.3s ease-in-out;
    }
  }
`
