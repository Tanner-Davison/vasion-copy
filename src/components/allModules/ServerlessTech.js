import React from "react"
import styled from "styled-components"
import KepointsImg from "./../../images/KepointsImg.png"
import FireDirectoryImg from "./../../images/FireDirectoryImg.png"
import DegradingStocksImg from "./../../images/DegradingStocksImg.png"

const ServerlessTech = () => {
  return (
    <>
      <ContentWrapper>
        <ServerlessDiv>
          <p id={"head-p"}>SERVERLESS TECHNOLOGY</p>
          <h2 id={"head-h2"}>Print Management Made Easier</h2>
        </ServerlessDiv>

        <DoubleColumn>
          <ContentSectionOne>
            <h3 id={"double-columns-h3"}>Get Centrally Managed Direct IP</h3>
            <p id={"double-columns-p"}>
              Ditch the costly legacy architecture and move to a direct IP print
              environment. Reduce your attack surface, keep your data secure,
              and lose the complex infrastructure that holds you back while
              gaining more control with centralized management.
            </p>
          </ContentSectionOne>
          <img
            src={KepointsImg}
            alt={"bullet-point-list"}
            className={"bullet-list-img"}
          />
        </DoubleColumn>
      </ContentWrapper>
      <ContentWrapper>
        <DoubleColumnSwitch>
          <ContentSectionOne>
            <h3 id={"double-columns-h3"}>Eliminate Scripts and GPOs</h3>
            <p id={"double-columns-p"}>
              Roll out updates, apply user changes, and add devices—all without
              scripting and GPOs. The PrinterLogic Admin Console makes it easy
              and even empowers your end users with a Self-Service Installation
              Portal, including floormaps to quickly choose the printer they
              need.
            </p>
          </ContentSectionOne>
          <img
            src={FireDirectoryImg}
            alt={"bullet-point-list"}
            className={"bullet-list-img"}
            style={{ height: "auto" }}
          />
        </DoubleColumnSwitch>
      </ContentWrapper>
      <ContentWrapper>
        <DoubleColumn>
          <ContentSectionOne>
            <h3 id={"double-columns-h3"}>Eliminate Scripts and GPOs</h3>
            <p id={"double-columns-p"}>
              Roll out updates, apply user changes, and add devices—all without
              scripting and GPOs. The PrinterLogic Admin Console makes it easy
              and even empowers your end users with a Self-Service Installation
              Portal, including floormaps to quickly choose the printer they
              need.
            </p>
          </ContentSectionOne>
          <img
            src={DegradingStocksImg}
            alt={"bullet-point-list"}
            className={"bullet-list-img"}
            style={{ height: "auto" }}
          />
        </DoubleColumn>
      </ContentWrapper>
    </>
  )
}
export default ServerlessTech
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
`
const ServerlessDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6.944vw 10.278vw 2.778vw;
  gap: 1.111vw;
  #head-p {
    font-style: normal;
    font-weight: 800;
    font-size: 1.25vw;
    line-height: 2vw;
    letter-spacing: 0.2em;
  }
  #head-h2 {
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 3vw;
    line-height: 3vw;
  }
  @media screen and (min-width: 1440px) {
    padding: 6vw 10vw 2vw;
    gap: 16px;
    #head-p {
      font-size: 18px;
      line-height: 24px;
    }
    #head-h2 {
      font-size: 48px;
      line-height: 56px;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    #head-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 800;
      font-size: 1.25vw;
      line-height: 1.667vw;
      letter-spacing: 0.2em;
    }
    #head-h2 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 3.333vw;
      line-height: 3.889vw;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    #head-p {
      font-size: 1.758vw;
      line-height: 2.344vw;
    }
    #head-h2 {
      font-size: 4.688vw;
      line-height: 5.469vw;
    }
  }
  @media screen and (max-width: 428px) {
    text-align: center;
    padding: 9vw 6vw;
    gap: 2.804vw;

    #head-h2 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 8.879vw;
      line-height: 9.813vw;
    }
    #head-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 800;
      font-size: 4.206vw;
      line-height: 5.607vw;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }
`
const DoubleColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6.944vw 10.278vw;
  gap: 4.583vw;
  width: 100%;
  img {
    height: auto;
    width: 35.694vw;
  }
  @media screen and (min-width: 1440px) {
    padding: 60px 148px;
    gap: 6.445vw;
    align-items: center;
    justify-content: center;
    width: 1440px;
    img {
      width: 514px;
      height: 233px;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    padding: 3.859vw 3.906vw;
    gap: 6.445vw;

    img {
      width: 40vw;
    }
  }
  @media screen and (max-width: 428px) {
    flex-direction: column-reverse;
    padding: 9vw 6vw;
    gap: 9vw;
    img {
      width: 85vw;
    }
  }
`
const ContentSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.111vw vw;
  @media screen and (min-width: 1440px) {
    gap: 15px;
    #double-columns-h3 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 40px;
    }
    #double-columns-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
  }

  element.style {
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    #double-columns-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.25vw;
      line-height: 1.875vw;
    }
    #double-columns-h3 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 2.361vw;
      line-height: 2.778vw;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    gap: 1vw;
    #double-columns-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }
    #double-columns-h3 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 3.32vw;
      line-height: 3.906vw;
    }
  }

  @media screen and(min-width: 429px) and (max-width: 1024px) {
    padding: 5.859vw 3.906vw;
    gap: 6.445vw;

    #double-columns-h3 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 3.32vw;
      line-height: 3.906vw;
    }
    #double-columns-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }
  }
  @media screen and (max-width: 428px) {
    gap: 2vw;
    #double-columns-h3 {
      font-size: 7.009vw;
      line-height: 8.411vw;
    }
    #double-columns-p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 4.206vw;
      line-height: 6.308vw;
    }
  }
`
const DoubleColumnSwitch = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 6.944vw 10.278vw;
    gap: 4.583vw;
    width: 100%;
  img {
    height: auto;
    width: 35.694vw;
  }
  @media screen and (min-width: 1440px) {
    padding: 2vw;
    gap: 66px;
    width: 1440px;
    img {
      width: 514px;
      height: 233px;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    padding: 3vw 3vw;
    gap: 6vw;
    height: auto;
    img {
      width: 40vw;
    }
  }
  @media screen and (max-width: 428px) {
    flex-direction: column-reverse;
    padding: 9vw 6vw;
    gap: 9vw;
    img {
      width: 87.85vw;
    }
  }
`
