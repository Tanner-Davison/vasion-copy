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
        </StatsSecondSection>
      </AllWrapper>
    )
};

export default Stats;
const AllWrapper = styled.div`
@media screen and (max-width: 428px) {
  display: flex;
  width: 100vw;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
}
`
const StatsFirstSection = styled.div`
  display: flex;
  width: 100vw;
  p {
    max-width: unset;
  }
  @media screen and (max-width: 428px) {
    padding: 40px 24px;
    flex-direction: column;
    align-items: center;
    width:100vw;
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
    }
  }
`