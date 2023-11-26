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
        <div className={'logos'}>
          <img src={pricelineImg} alt={"pricelineImg"} />
          <img src={jpMorganImg} alt={"jpMorgan"} />
          <img src={metLifeImg} alt={"metLife"} />
          <img src={nascarImg} alt={"nascarImg"} />
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
  background-color: purple;

  img {
    height: 2.5vw;
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
    display: flex;
    gap: 75px;
  }
  @media screen and (min-width: 1441px) {
    padding: 32px 100px;
    width: 100vw;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 10px;
    h3 {
      color: #fff;

      text-align: center;
      /* Headings/h3Desktop */
      font-family: Archivo;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }
  }
`
const CarosoulContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(61, 37, 98);

  padding: 32px 100px;
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