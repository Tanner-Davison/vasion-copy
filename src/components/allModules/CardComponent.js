import React from "react"
import styled from "styled-components"
import whiteImg from "../../images/whiteImg.png"

const CardComponent = () => {
  return (
    <Wrapper>
      <h3>Everything You Need—Plus the Extras You Want</h3>
      <div className={"cards-wrapper"}>
        <div className={"card-container"}>
          <div className={"headerWrapper"}>
            <h3 className={"header"}>Advanced Security</h3>

            <p>
              Secure your confidential data at all times during printing and
              stay protected with additional features like Secure Release
              Printing and Multiple IdP support.
            </p>
          </div>
          <button id={"buttonId"}>Learn More→</button>
        </div>
        <div className={"card-container"}>
          <div className={"headerWrapper"}>
            <h3 className={"header orange"}>Output Management</h3>
            <p>
              Connect your print environment to easily manage front- and
              back-end printing while gaining visibility and keeping all data
              secure. Enjoy integrations with leading EMR and ERP solutions.
            </p>
          </div>
          <button id={"buttonId"}>Learn More→</button>
        </div>
        <div className={"card-container"}>
          <div className={"headerWrapper"}>
            <h3 className={"header gray"}>Cost Management</h3>

            <p>
              Get full visibility into print habits and better control over
              costs with advanced features like Print Quota Management and
              Client Cost Management.
            </p>
          </div>
          <button id={"buttonId"}>Learn More→</button>
        </div>
      </div>
    </Wrapper>
  )
}
export default CardComponent

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 780px;
  padding: 100px 0px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(247, 245, 249);
  justify-content: center;
  gap: 40px;
  align-self: center;
  justify-self: center;
  .cards-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 41px;
  }
  .header {
    position: relative;
    display: flex;
    text-align: start;
    bottom: 10px;
    font-family: Archivo;
    font-size: 3.75vw;
    font-style: normal;
    font-weight: 100;
    line-height: 4vw;
    background: linear-gradient(
      270deg,
      #945aee 0%,
      rgba(148, 90, 238, 0.4) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header.orange {
    background-image: linear-gradient(
      270deg,
      rgb(255, 81, 0) 0%,
      rgba(255, 81, 0, 0.4) 100%
    );
  }
  .header.gray {
    background-image: linear-gradient(
      270deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  h3 {
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    color: var(--grey-grey-800191-d-1-e, #191d1e);
    text-align: center;
    font-family: Archivo;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .card-container {
    display: flex;
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 4px);
    width: 24vw;
    background-color: #ffff;
    height: 500px;
    border-radius: 14px;
    padding: 30px 16px 16px;
    align-items: flex-start;
  }
  #buttonId {
    position: absolute;
    bottom: 1px;
    left: 5px;
    background-color: transparent;
    border: none;
    color: var(--orange-primary-orange-ff-5100, #ff5100);
    font-family: Archivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    box-sizing: border-box;
  }
  #buttonId:hover {
    transform: scale(1.01);
    text-decoration: underline;
    cursor: pointer;
  }
  @media screen and (min-width: 429px) and (max-width: 1024px) {
    gap: 10px;
    .card-container {
      display: flex;
      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 4px);
      width: 30vw;
      height: 49vw;
      background-color: #ffff;
      border-radius: 14px;
      padding: 30px 10px 16px;
      align-items: flex-start;
    }
    .header {
      font-size: 4.492vw;
      line-height: 4.688vw;
      margin: 0vw 0vw -0.266vw;
      padding-bottom: 0px;
    }
    .cards-wrapper {
      gap: 14px;
    }
    p {
      font-family: Archivo;
      font-style: normal;
      font-weight: 400;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }
    #buttonId {
      font-family: Archivo;
      font-style: normal;
      font-weight: 700;
      font-size: 1.7vw;
      line-height: 2.5vw;
    }
  }
  @media screen and (max-width: 428px) {
    position: relative;
    display: flex;
    width: 100vw;
    height: auto;

    flex-direction: column;
    align-items: center;
    background-color: rgb(247, 245, 249);
    justify-content: center;
    gap: 0px;

    .cards-wrapper {
      flex-direction: column;
      gap: 20px;
      padding: 0vw 3.738vw 3.738vw;
    }
    .card-container {
      display: flex;
      width: 95vw;
      height: auto;
      flex-direction: column;
      align-items: center;

      padding: 2vw 10vw 20vw;
    }
    .headerWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
    .card-container > h3 {
      font-family: Archivo;
      font-size: 12vw;
      font-style: normal;
      font-weight: 100;
      line-height: 68px;
      background: linear-gradient(
        270deg,
        #945aee 0%,
        rgba(148, 90, 238, 0.4) 100%
      );
      padding-left: 42px;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      color: var(--grey-grey-800191-d-1-e, #191d1e);
      text-align: center;
      font-family: Archivo;
      font-size: 38px;
      padding: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    .header {
      font-size: 12.019vw;
      line-height: 15.888vw;
      bottom: -25px;
    }
    #buttonId {
      left: 8%;
    }
  }
`
