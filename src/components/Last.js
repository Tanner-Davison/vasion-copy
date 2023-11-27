import React from "react"
import styled from "styled-components"

const Last = () => {
  return (
    <Wrapper>
      <h2> Ready to Try It for Yourself?</h2>
      <p>
        Get a customized demo with our experts to see how simple and secure
        eliminating your print servers can be.
      </p>
      <button> Schedule A Demo</button>
    </Wrapper>
  )
}

export default Last;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 80px 264px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: #3d2562;
  h2 {
    color: var(--grey-white-ffffff, #fff);
    text-align: center;
    /* Headings/h2Desktop */
    font-family: Archivo;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  }
  p {
    color: var(--grey-white-ffffff, #fff);
    text-align: center;
    /* Body/bodyM */
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
  }
  button {
    display: flex;
    height: 42px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 1px;
    border-radius: 28px;
    background: var(--orange-primary-orange-ff-5100, #ff5100);
  }
  @media screen and (min-width: 428px) and (max-width: 1024px) {
    display: flex;
    width: 100vw;
    padding: 60px 160px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #3d2562;
    h2 {
      color: var(--grey-white-ffffff, #fff);
      text-align: center;
      /* Headings/h2Desktop */
      font-family: Archivo;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px; /* 116.667% */
    }
    p {
      color: var(--grey-white-ffffff, #fff);
      text-align: center;
      /* Body/bodyM */
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px; /* 150% */
    }
    button {
      display: flex;
      height: 42px;
      padding: 10px 30px;
      justify-content: center;
      align-items: center;
      gap: 1px;
      border-radius: 28px;
      border: none;
      background: var(--orange-primary-orange-ff-5100, #ff5100);
    }
  }
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100vw;
    padding: 40px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #3d2562;
    h2 {
      color: var(--grey-white-ffffff, #fff);
      text-align: center;
      /* Headings/h2Mobile */
      font-family: Archivo;
      color: white;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px; /* 110.526% */
    }
    p {
      color: var(--grey-white-ffffff, #fff);
      text-align: center;
      /* Body/bodyM */
      font-family: Archivo;
      font-size: 18px;
      color: white;
      font-style: normal;
      font-weight: 400;
      line-height: 27px; /* 150% */
    }
    button {
      display: flex;
      height: 40px;
      padding: 10px 20px;
      justify-content: center;
      align-items: center;
      gap: 1px;
      border-radius: 20px;
      background: var(--orange-primary-orange-ff-5100, #ff5100);
      border: none;
    }
  }
`
