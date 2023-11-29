import React from "react"
import { useState } from "react"
import styled from "styled-components"
import FourOptionData from "./FourOptionHelper/FourOptionData"
import Card from "./Card.js"
import Carosoul from "./Carousole.js"
const FourOption = () => {
  return (
    <>
      <IconDrop>
        <h3 id="contentHeader">
          How You Can Make the Switch to Serverless Printing
        </h3>
        <DropDownWrapper>
          {FourOptionData.map(card => {
            return <Card key={card.id} cardData={card} />
          })}
        </DropDownWrapper>
      </IconDrop>
    </>
  )
}
export default FourOption

const IconDrop = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 2vw;
  width: 100%;
  padding: 7vw 10vw 17vw 10vw;
  margin-bottom: 0px;

  @media screen and (min-width: 429px) and (max-width: 1024px) {
    padding: 3vw 2vw;
  }
  h3 {
    font-family: Archivo;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    width: 565px;
  }
  @media screen and (min-width: 1441px) {
    gap: 40px;
    width: 100vw;
    height: 724px;
    padding: 100px 20vw 0px 20vw;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 428px) {
    align-items: center;
    & > h3 {
      position: relative;
      font-family: Archivo;
      font-size: 27px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      width: 386px;
      align-self: flex-start;
      left: -10px;
    }
  }
`
const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.972vw;

  @media screen and (min-width: 429px) and (max-width: 1024px) {
    position: relative;
    align-self: center;
    width: 98vw;
    height: 24em;
    & > h3 {
      font-family: Archivo;
      font-size: 27px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      width: 386px;
    }
  }
  @media screen and (max-width: 428px) {
    align-items: center;
    flex-direction: column;
  }
`
