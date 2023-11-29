import React from "react"
import styled from "styled-components"

const SmallInsert = () => {
  return (
    <Wrapper>
      <p>SEAMLESS INTEGRATIONS</p>
      <h2> Get It All Together</h2>
    </Wrapper>
  )
}

export default SmallInsert

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 80px 0px;
  flex-direction: column;
  align-items: center;
  gap: 24px;

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
  @media screen and (min-width: 1441px) {
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    display: flex;
    width: 1024px;
    padding: 60px 40px;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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
  }
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100vw;
    padding: 40px 26px;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    p {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Eyebrow/eyebrowM */
      font-family: Archivo;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: 20px; /* 125% */
      letter-spacing: 3.2px;
      text-transform: uppercase;
    }
    h2 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      /* Headings/h2Mobile */
      font-family: Archivo;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px; /* 110.526% */
    }
  }
`
