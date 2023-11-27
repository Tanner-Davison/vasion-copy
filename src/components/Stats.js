import React from 'react';
import styled from 'styled-components';

const Stats = ()=>{
    return (
      <StatsFirstSection>
        <p>A COMPLETE SERVERLESS PRINT SOLUTION</p>
        <h2>Cloud Native from the Start</h2>
        <body>
          Print management shouldn’t be complicated or reliant on unsecure print
          servers. That’s why we built a simple, scalable, cloud native direct
          IP printing platform. And why we continually develop additional
          features—so it’s easy for you to keep up with new technology and keep
          costs down.
          <br></br>
          <span>Learn more about our serverless technology →</span>
        </body>
      </StatsFirstSection>
    )
};

export default Stats;

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