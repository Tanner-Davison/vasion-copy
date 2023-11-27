import React from 'react';
import styled from 'styled-components';

const Stats = ()=>{
    return (
      <AllWrapper>
        <StatsFirstSection>
          <p>A COMPLETE SERVERLESS PRINT SOLUTION</p>
          <h2>Cloud Native from the Start</h2>
          <body>
            Print management shouldn’t be complicated or reliant on unsecure
            print servers. That’s why we built a simple, scalable, cloud native
            direct IP printing platform. And why we continually develop
            additional features—so it’s easy for you to keep up with new
            technology and keep costs down.
            <br></br>
            <span>Learn more about our serverless technology →</span>
          </body>
        </StatsFirstSection>

        <StatsSecondSection>
          <div className={"stat-wrapper"}>
            <span id={"number"}>97%</span>
            <p id={"stat-text"}>
              of customers are likely to recommend PrinterLogic.{" "}
            </p>
          </div>
          <div className={"stat-wrapper"}>
            <span id={"number"}>71%</span>
            <p id={"stat-text"}>
              of customers reduced time spent on print management by more than
              half.{" "}
            </p>
          </div>
          <div className={"stat-wrapper"}>
            <span id={"number"}>87%</span>
            <p id={"stat-text"}>of customers reported at least 100% ROI. </p>
          </div>
        </StatsSecondSection>
      </AllWrapper>
    )
};

export default Stats;
const AllWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
`
const StatsFirstSection = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 0px 80px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  p {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    /* Eyebrow/eyebrowL */
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 133.333% */
    letter-spacing: 3.6px;
    text-transform: uppercase;
  }
  h2 {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    /* Headings/h2Desktop */
    font-family: Archivo;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  }
  body {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    width: 76%;
    font-weight: 400;
    line-height: 27px;
  }
  p {
    max-width: unset;
  }
  @media screen and (min-width: 1441px) {
    width: 100vw;
    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Eyebrow/eyebrowL */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px; /* 133.333% */
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    body {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Body/bodyM */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      width:65vw;
      line-height: 27px; /* 150% */
    }
  }
  @media screen and (min-width: 428px) and (max-width: 1024px) {
    display: flex;
    width: 100vw;
    padding: 100px 0px 80px 0px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Eyebrow/eyebrowL */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px; /* 133.333% */
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    h2 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Headings/h2Desktop */
      font-family: Archivo;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px; /* 116.667% */
    }
    body {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      width: 76%;
      font-weight: 400;
      line-height: 27px;
    }
  }
  @media screen and (max-width: 428px) {
    padding: 40px 24px;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    gap: 8px;

    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: 20px;
      letter-spacing: 3.2px;
      text-transform: uppercase;
    }
    h2 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    body {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
    span {
      color: var(--orange-primary-orange-ff-5100, #ff5100);
      text-align: center;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
    }
  }
`
const StatsSecondSection = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: flex-start;
  .stat-wrapper {
    display: flex;
    width: 27vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
  }
  #number {
    color: var(--orange-primary-orange-ff-5100, #ff5100);
    text-align: center;
    /* Statistics Numbers/statDesktop */
    font-family: Orbitron;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 100% */
  }
  #stat-text {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
  @media screen and (min-width: 428px) and (max-width: 1024px) {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: flex-start;
    .stat-wrapper {
      display: flex;
      width: 27vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex-shrink: 0;
    }
    #number {
      color: var(--orange-primary-orange-ff-5100, #ff5100);
      text-align: center;
      /* Statistics Numbers/statDesktop */
      font-family: Orbitron;
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: 48px; /* 100% */
    }
    #stat-text {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }

  @media screen and (max-width: 428px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 24px;

    .stat-wrapper {
      display: flex;
      width: 376px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
    #number {
      color: var(--orange-primary-orange-ff-5100, #ff5100);
      text-align: center;
      /* Statistics Numbers/statMobile */
      font-family: Orbitron;
      font-size: 42px;
      font-style: normal;
      font-weight: 500;
      line-height: 42px;
    }
    #stat-text {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
  }
`