import * as React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetStartedNow = styled.b`
  position: absolute;
  bottom: 1069.6px;
  left: 0px;
  letter-spacing: -2.78px;
  background: linear-gradient(176.64deg, #fff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1050px) {
    font-size: 6rem;
    left: calc(42% - 300px);
  }
`;
const GroupChild = styled.img`
  position: absolute;
  bottom: -7.7px;
  left: 225.3px;
  width: 557.3px;
  height: 1124.4px;
  @media (max-width: 1050px) {
    left: 170px;
  }
`;
const GroupItem = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: var(--color-mediumspringgreen-200);
  filter: blur(51.49px);
  width: 876px;
  height: 142.6px;
  opacity: 0.6;
`;
const StartTrading = styled.b`
  position: relative;
`;
const Cta = styled.div`
  position: absolute;
  bottom: 6.2px;
  left: 4.9px;
  background: linear-gradient(
    268.92deg,
    #d4f938 43.75%,
    rgba(50, 216, 117, 0.96)
  );
  width: 866.2px;
  height: 135px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11.13222599029541px 33.39667892456055px;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-image: linear-gradient(to right, #36d370, #64de64, #8ae856, #aff147, #d4f938);
    transform: scale(1.02);
  }
`;
const RectangleParent = styled.div`
  position: absolute;
  bottom: 58.5px;
  left: 67px;
  width: 876px;
  height: 142.6px;
  font-size: 38.27px;
  border-radius: 5px;
  @media (max-width: 1050px) {
    left: 5px
  }
`;
const GetStartedNowParent = styled.div`
  position: relative;
  width: 1100px;
  height: 1228.6px;
  @media (max-width: 1050px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const LandingPageInnerRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-141xl) 0px;
  text-align: left;
  font-size: var(--font-size-113xl-2);
  color: var(--color-black);
  font-family: var(--mobile-caption-1-medium);
`;

const SectionForm = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }
  , []);

  return (
    <LandingPageInnerRoot>
      <GetStartedNowParent>
        <GetStartedNow data-aos="fade-zoom-in">Get started now.</GetStartedNow>
        <GroupChild alt="" src="/group-1000003804.svg" data-aos="fade-zoom-in"/>
        <RectangleParent data-aos="fade-zoom-in">
          <GroupItem />
          <Cta>
            <StartTrading>Start Trading!</StartTrading>
          </Cta>
        </RectangleParent>
      </GetStartedNowParent>
    </LandingPageInnerRoot>
  );
};

export default SectionForm;
