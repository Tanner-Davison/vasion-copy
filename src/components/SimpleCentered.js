import React from "react"
import styled from "styled-components"
import smallPic from "../images/smallPic.png"
const SimpleCentered = () => {
  return (
    <Wrapper>
      <div className={"content"}>
        <img src={smallPic} alt={"smallPic"} />
        <div id={"textWrapper"}>
          <h3>Simple and Secure Integrations</h3>
          <p>
            Our native integrations seamlessly connect the tools you need every
            day. From EMR systems to IdP collaborations, you get visibility,
            security, and control for all printing on one unified platform.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default SimpleCentered

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  img {
    width: 35vw;
  }
  .content {
    display: flex;
    width: 100vw;
    padding: 0px 148px 80px 148px;
    align-items: center;
    flex-direction: row-reverse;
    gap: 66px;
  }
  @media screen and (min-width: 1441px) {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    .content {
      display: flex;
      width: 1440px;
      padding: 0px 148px 80px 148px;
      align-items: center;
      gap: 66px;
    }
    img {
      width: 514px;
      height: 386px;
    }
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;
    width: 100vw;
    align-items: center;

    #textWrapper {
      width: 45vw;
    }
    p {
      width: 196px;
    }
    img {
      width: 45vw;
    }
    .content {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 0px;
      padding: 0px 40px 60px 218px;
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;

    .content {
      display: flex;
      width: 100%;
      padding: 40px 26px;
      flex-direction: column;
      align-items: flex-start;
      gap: 42px;
    }
    h3 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      /* Headings/h3Mobile */
      font-family: Archivo;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px; /* 120% */
    }
    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      /* Body/bodyM */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px; /* 150% */
    }
    img {
      width: 376px;
      height: 282px;
    }
  }
`
