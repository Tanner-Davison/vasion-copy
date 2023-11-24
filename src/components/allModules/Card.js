import styled, {css} from "styled-components";
import React from "react";
import { useState } from "react";

const Card =(cardData)=>{
  const [hover, setHover] = useState(false);
  const [showContent, setShowContent]=useState(false)
  
  const handleMouseEnter = () => {
    setHover((prev)=>!prev)
    setTimeout(() => setShowContent(true), 1000)
  }
  const handleMouseLeave = () => {
    setHover((prev)=>!prev);

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
            <p className={showContent ? 'descriptionHeader':'descriptionHeader hidden' }>{cardData.cardData.contentHead}</p>
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
  height: 191px;
  padding: 20px 50px 30px 50px;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  outline: 2px solid blue;
  margin: 5px;
  border-radius: 14px;
  background: #f6f7f7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  transition: width 0.7s ease-in-out, height 0.7s ease-in-out;
  overflow-y: hidden;

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
    align-self: center;
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
  .descriptionHeader.hidden {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .descriptionHeader {
    font-family: "archivo";
    font-size: 18px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.3s;
    line-height: 27px;
    align-self: flex-start;
  }
  .para-appear.hidden {
    opacity: 0%;
    transition: opacity 0.3s ease-in;
  }
  .para-appear {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 1441px) {
    padding: 20px 40px 30px 50px;
    gap: 12px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    .descriptionHeader {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 1.25vw;
      line-height: 1.875vw;
      opacity: 1;
    }
    .para-appear {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.25vw;
      line-height: 1.875vw;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    width: 19.629vw;
    height: 18.652vw;
    gap: 1.172vw;
    border-radius: 1.367vw;
    padding: 1.953vw 4.883vw 2.93vw 2.93vw;
    ${({ hover }) =>
      hover &&
      css`
        width: 44.732vw;
        height: 39.453vw;
        cursor: pointer;
      `};

    .descriptionHeader {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 1.25vw;
      line-height: 1.875vw;
      opacity: 1;
    }
    .para-appear {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }
  }
  ${({ hover }) =>
    hover &&
    css`
      height: 404px;
      width: 340px;
      cursor: pointer;
    `};
`