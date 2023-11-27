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

export default Last

const Wrapper = styled.div`
  @media screen and (max-width: 428px) {
    display: flex;
    width: 100vw;
    padding: 40px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    h2 {
      color: var(--grey-white-ffffff, #fff);
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
