import React from "react"
import styled from "styled-components"
import One from "../images/One.png"
import Two from "../images/Two.png"
import Three from "../images/Three.png"

const ListSlider = () => {
  return (
    <Wrapper>
      <div className={"header"}>
        <p>LEAVE OLD TECHNOLOGY BEHIND</p>
        <h2>Discover the Future of Serverless Printing</h2>
      </div>
      <div className={"content-wrapper"}>
        <div id={"content-card"}>
          <img src={One} alt={"one"} />
          <p>
            <span>
              Get a demo with an expert that understands your unique needs.{" "}
            </span>
            <br></br>See how you can centrally manage printer objects, drivers,
            profiles, and settings from our Admin Console and push updates and
            changes to end users without scripting or GPOs.
          </p>
        </div>
        <div id={"content-card"}>
          <img src={Two} alt={"Two"} />
          <p>
            <span>Start a free trial of our serverless solution. </span>
            <br></br>Automatically import your existing printer objects and
            eliminate all print servers. See how it all works in a trial
            environment customized to your needs.
          </p>
        </div>
        <div id={"content-card"}>
          <img src={Three} alt={"Three"} />
          <p>
            <span>Smash those print servers! </span>
            <br></br>Get rid of those dinosaurs and enjoy the simplicity of
            centralized print management combined with advanced features
            tailored to work for you.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default ListSlider

const Wrapper = styled.div`
  p {
    max-width: unset;
  }
  span {
    font-weight: 700;
  }

  display: flex;
  width: 100vw;
  padding: 100px 60px 100px 107px;
  align-items: flex-start;
  img {
    width: 2.6vw;
  }
  .header {
    display: flex;
    padding: 10px 66px 0px 41px;
    flex-direction: column;
    align-items: flex-start;
    width: 45vw;
    gap: 24px;
  }
  .header > p {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    /* Eyebrow/eyebrowL */
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 133.333% */
    letter-spacing: 3.6px;
    text-transform: uppercase;
  }
  .header > h2 {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    font-family: Archivo;
    font-size: 3vw;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  }
  .content-wrapper {
    display: flex;
    padding: 18px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  }
  #content-card {
    display: flex;
    width: 564px;
    align-items: flex-start;
    width: 45vw;
    gap: 16px;
  }
  @media screen and (min-width: 1441px) {
    padding: 100px 177px 100px 107px;
  }
  #content-card {
    display: flex;
    width: 564px;
    align-items: flex-start;
    width: 35vw;
    gap: 16px;
  }
  @media screen and (min-width: 428px) and (max-width: 1024px) {
    display: flex;
    width: 100vw;
    padding: 60px 0px 60px 24px;
    align-items: flex-start;

    .header {
      display: flex;
      width: 40vw;
      padding: 10px 0px 0px 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      flex-shrink: 0;
    }
    .header > p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      /* Eyebrow/eyebrowL */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px; /* 133.333% */
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    .header > h2 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      font-family: Archivo;
      font-size: 6vw;
      font-style: normal;
      font-weight: 700;
      line-height: 7vw;
    }
    .content-wrapper {
      display: flex;
      padding: 18px 18px 18px 8px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    #content-card {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      width: 53vw;
    }
    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      /* Body/bodyL - 20|30 */
      font-family: Archivo;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
    img {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (max-width: 428px) {
    display: flex;
    width: 428px;
    padding: 40px 0px 40px 26px;
    flex-direction: column;
    align-items: flex-start;
    .header {
      width: 428px;
      padding-left: 0px;
    }
    .header > p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    .header > h2 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      /* Headings/h2Mobile */
      font-family: Archivo;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    .content-wrapper {
      display: flex;
      width: 402px;
      padding: 18px 26px 18px 0px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      #content-card {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        width: 100vw;
      }
      img {
        width: 10vw;
        height: 26px;
      }
      span {
        font-weight: 700;
      }
      p {
        color: var(--grey-grey-800191-d-1-e, #191d1e);
        font-family: Archivo;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
  }
`
