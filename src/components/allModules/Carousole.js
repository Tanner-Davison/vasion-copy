import React from "react"
import styled from "styled-components"
import pricelineImg from "../../images/pricelineImg.png"
import jpMorganImg from "../../images/jpMorganImg.png"
import metLifeImg from "../../images/metLifeImg.png"
import nascarImg from "../../images/nascarImg.png"

const Carosoul = () => {
  return (
    <CarosoulWrapper>
      <CarosoulContainer>
        <h3>Trusted by over 10000 organizations worldwide</h3>
        <div className={"logo-wrapper"}>
          <div className={"logos"}>
            <img className={"logoId"} src={pricelineImg} alt={"pricelineImg"} />
            <img className={"logoId"} src={jpMorganImg} alt={"jpMorgan"} />
            <img className={"logoId"} src={metLifeImg} alt={"metLife"} />
            <img className={"logoId"} src={nascarImg} alt={"nascarImg"} />
          </div>

          <div className={"logos"}>
            <img className={"logoId"} src={pricelineImg} alt={"pricelineImg"} />
            <img className={"logoId"} src={jpMorganImg} alt={"jpMorgan"} />
            <img className={"logoId"} src={metLifeImg} alt={"metLife"} />
            <img className={"logoId"} src={nascarImg} alt={"nascarImg"} />
          </div>
        </div>
      </CarosoulContainer>
    </CarosoulWrapper>
  )
}

export default Carosoul

const CarosoulWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  img {
    height: 4.5vw;
  }
  .logoId {
    white-space: nowrap;
    padding: 10px 44px;
  }
  h3 {
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 40px;
    color: white;
  }
  .logos {
    position: relative;
    display: inline-block;
    gap: 78px;
    white-space: nowrap;

    animation: scroll 10s linear infinite;
  }

  .logo-wrapper {
    display: inline-block;
    gap: 10px;
    flex-direction: row;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 1441px) {
    padding: 32px 100px;
    width: 100vw;
    .logoId {
      height: 4vw;
    }
    .logos {
      animation: scroll 10s linear infinite;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;
    max-width: unset !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h3 {
      color: #fff;
      text-align: center;
      font-family: Archivo;
      font-size: 29px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }
    img {
      height: 50px;
      max-width: auto;
    }
    .logoId {
      display: inline-block;
      white-space: nowrap;
      padding: 10px 5px;
    }
    .logos {
      position: relative;
      display: inline-flex;
      overflow-x: hidden;
      max-width: unset !important;
      width: 900px;
      white-space: nowrap;
      animation: scroll 10s linear infinite;
      z-index: 1;
    }
    .logo-wrapper {
      position: relative;
      width: 90vw;
      z-index: 1;
    }
  }
  @media screen and (max-width: 428px) {
    display: flex;
    width: 428px;
    padding: 40px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    img {
      height: 50px;
      max-width: auto;
    }
    .logoId {
      display: inline-block;
      white-space: nowrap;
      padding: 10px 5px;
    }
    .logos {
      position: relative;
      display: inline-flex;
      overflow-x: hidden;
      max-width: unset !important;
      width: 780px;
      white-space: nowrap;
      animation: scroll 10s linear infinite;
      z-index: 1;
      gap:49px;
    }
    .logo-wrapper {
      position: relative;
      width: 90vw;
      z-index: 1;
    }

    h3 {
      font-family: Archivo;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
    }
  }
`
const CarosoulContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(61, 37, 98);
  padding: 34px 30px;
  width: 90%;
  align-items: center;
  gap: 40px;
  border-radius: 24px;
  @media screen and (min-width: 1441px) {
    padding: 60px 114px;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`