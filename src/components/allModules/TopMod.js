import React from "react"
import styled from "styled-components"
import hpHeroBaseball from "./../../images/hpHeroBaseball.png"
const TopMod = () => {
  return (
    <TopModContainer>
      <ContentContainer>
        <StyledH1>Eliminate Your Print Servers</StyledH1>
        <StyledP>
          Tired of wasting time on print-related tickets and dealing with
          constant spooler vulnerabilities? So were we. Eliminate your print
          servers and discover the future of print management.
        </StyledP>
        <StyledButton>
          <span id={"button-p"}>SCHEDULE A DEMO</span>
        </StyledButton>
      </ContentContainer>
      <img
        src={hpHeroBaseball}
        alt={"hero-baseball"}
        className={"hero-baseball-img"}
      />
    </TopModContainer>
  )
}

export default TopMod

const TopModContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 630px;
  background-image: url("https://printerlogic.com/static/HPHeroBG-897435bd9f7bea03d886b5a8960bba52.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  gap: 5vw;
  box-sizing: border-box;
  .hero-baseball-img {
    width: 32.639vw;
    height: 32.5vw;
  }
  @media screen and (min-width: 1441px) {
    .hero-baseball-img {
      width: 470px;
      height: 468px;
    }
  }

  @media screen and (min-width: 429px) and (max-width: 1024px) {
    gap: 4vw;
    height: 50vw;
  }
  @media screen and (max-width: 428px) {
    flex-direction: column-reverse;
    gap: 11.682vw;
    height: 224vw;

    .hero-baseball-img {
      width: 69.806vw;
      height: 69.516vw;
    }
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 39.167vw;
  gap: 1.667vw;

  @media screen and (min-width: 1441px) {
    width: 564px;
    gap: 24px;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    width: 42.969vw;
    gap: 2.344vw;
  }
  @media screen and (max-width: 428px) {
    width: 87vw;
    gap: 3vw;
  }
`
const StyledH1 = styled.h1`
  font-family: "Archivo" sans-serif;
  color: white;
  font-weight: 700;
  margin: 0px;
  font-size: 4vw;
  @media screen and (min-width: 1441px) {
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 64px;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
    line-height: 6vw;
  }
  @media screen and (max-width: 428px) {
    font-size: 11vw;
    line-height: 13vw;
  }
`
const StyledP = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    font-family: Archivo;
    font-style: normal;
    font-weight: 400;
    font-size: 1.667vw;
    line-height: 2.5vw;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    font-family: Archivo;
    font-style: normal;
    font-weight: 400;
    font-size: 2vw;
    line-height: 3vw;
  }
  @media screen and (max-width: 428px) {
    font-family: Archivo;
    font-style: normal;
    font-weight: 400;
    font-size: 5.607vw;
    line-height: 8.411vw;
  }
`
const StyledButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 81, 0);
  color: white;
  width: max-content;
  font-weight: 700;

  @media screen and (min-width: 1441px) {
    height: 42px;
    border-radius: 28px;
    padding: 0px 30px;
    border: 1px solid rgb(255, 81, 0);
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    height: 2.917vw;
    border-radius: 1.944vw;
    padding: 0vw 2.083vw;
    border: 0.069vw solid rgb(255, 81, 0);
    font-size: 1.111vw;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    border-radius: 2.734vw;
    padding: 0.977vw 1.563vw;
    height: 3.516vw;
    border: 0.5vw solid rgb(255, 81, 0);
    font-size: 1.563vw;
  }
  @media screen and (max-width: 428px) {
    border-radius: 6.542vw;
    padding: 2vw 3vw;
    height: 9vw;
    width: auto;
    border: 0.5vw solid rgb(255, 81, 0);
  }
  transition: background-color 0.4s;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(255, 81, 0);
  }
`
