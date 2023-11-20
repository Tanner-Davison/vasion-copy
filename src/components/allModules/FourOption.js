import React from "react"
import styled from "styled-components"
import FourOptionData from "./FourOptionHelper/FourOptionData"

const FourOption = () => {
  return (
    <IconDrop>
      <h3>How You Can Make the Switch to Serverless Printing</h3>
      <DropDownWrapper>
        {FourOptionData.map(card => {
          return (
            <Card>
              <span id="CardHeader">
                <img src={card.number} /> <p>{card.title}</p>
              </span>
              <img src={card.image} alt={"title-representation"} />
            </Card>
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
  height: 50vw;
  gap: 2vw;
  width: 100%;
  padding: 6.944vw 10.278vw;
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
const Card = styled.div`
  position: relative;
  display: flex;
  width: 254px;
  height: 191px;
  padding: 20px 50px 30px 50px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  outline: 2px solid blue;
  margin: 5px;
  border-radius: 14px;
  background: #f6f7f7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  element.style {
    width: 254px;
    height: 191px;
  }
  img {
    position: relative;
    display: flex;

    height: 30px;
    width: 30px;
  }
  #CardHeader {
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 10px;
  }

  @media screen and (min-width: 1441px) {
    padding: 20px 40px 30px 50px;
    gap: 12px;

    #CardHeader > p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: black;
    }
  }
`
