import React from "react"
import { useState } from "react";
import styled from "styled-components"
import FourOptionData from "./FourOptionHelper/FourOptionData"
import Card from './Card.js'
const FourOption = () => {
    const [hover, setHover] = useState(false);

  return (
    <IconDrop>
      <h3>How You Can Make the Switch to Serverless Printing</h3>
      <DropDownWrapper>
        {FourOptionData.map(card => {
          return (
            <Card 
            key={card.id}
            cardData={card} />
          )
        })}
      </DropDownWrapper>
    </IconDrop>
  )
}
export default FourOption

const IconDrop = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 2vw;
  width: 100%;
  padding: 7vw 10vw;
  margin-bottom: 0px;

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
    padding: 100px 20vw;
    margin-bottom: 0px;
  }
`
const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  outline: 2px solid red;
`
