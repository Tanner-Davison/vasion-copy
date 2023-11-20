import styled, {css} from "styled-components";
import React from "react";
import { useState } from "react";

const Card =(cardData)=>{
  const [hover, setHover] = useState(false);
  const [showContent, setShowContent]=useState(false)
  console.log(cardData.cardData.number)
  const handleMouseEnter = () => {
    setHover(true)
    setTimeout(() => setShowContent(true), 900)
  }
  const handleMouseLeave = () => {
    setHover(false);

    setShowContent(false)
  }
    return (
      <CustomCard
        key={cardData.cardData.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        hover={hover}
      >
        <span id="cardHeader">
          <img src={cardData.cardData.number} alt={"card-number"} />
          <p>{cardData.cardData.title}</p>
        </span>
        <img
          id={"purple-logo"}
          src={cardData.cardData.image}
          alt={"title-representation"}
        />
        {hover && (
          <>
            <span id={'descriptionHeader'}>{cardData.cardData.contentHead}</span>
            <p className={showContent ? 'para-appear' : 'para-appear hidden'}>{showContent && cardData.cardData.contentParagraph}</p>
          </>
        )}
      </CustomCard>
    )
}

export default Card;

const CustomCard = styled.div`
  position: relative;
  display: flex;
  width: 254px;
  height: 254px;
  padding: 20px 50px 30px 50px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  outline: 2px solid blue;
  margin: 5px;
  border-radius: 14px;
  background: #f6f7f7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  transition: width 1s ease-in-out, height 1s ease-in-out;

  img {
    position: relative;
    display: flex;
    height: auto;
    width: 30px;
  }
  #purple-logo {
    height: 50px;
    width: 50px;
  }
  #cardHeader {
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 10px;
  }
  #cardHeader > p {
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: black;
  }
  .para-appear.hidden{
    opacity: 0%;
    transition: opacity 1s ease-in;
  }
  .para-appear{
    opacity: 100%;
    font-family: 'archivo';
    font-weight: 700;
    transition: opacity .5s ease-in;
  }
  #descriptionHeader{
    font-size:18px;
    font-weight: 750;
  }
  @media screen and (min-width: 1441px) {
    padding: 20px 40px 30px 50px;
    gap: 12px;
  }
  ${({ hover }) =>
    hover &&
    css`
      height: 400px;
      width: 350px;
      cursor: pointer;
    `}
`