import * as React from "react";
import styled from "styled-components";

const FrameIcon = styled.img`
  position: relative;
  width: 100px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Career = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--electric-green-primary);
  }
  font-size: 12px;
`;
const CareerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  // gap: var(--gap-15xl);
  gap: 3rem;
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const TradeNowWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  width: 150px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: var(--font-size-base);
  color: var(--color-black);
  cursor: pointer;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  // gap: var(--gap-37xl);
  gap: 4rem;
`;
const TopNavRoot = styled.div`
  // align-self: stretch;
  // background-color: var(--color-darkolivegreen);
  // backdrop-filter: blur(40px);
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: center;
  // padding: var(--padding-5xl) var(--padding-197xl);
  // gap: var(--gap-368xl);
  // text-align: left;
  // font-size: var(--mobile-subheading-medium-size);
  // color: var(--color-gray-100);
  // font-family: var(--mobile-caption-1-medium);
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TopnavChild = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1050px) {
    width: 75%;
  }
`;

const Header = () => {
  return (
    <TopNavRoot>
      <TopnavChild>
        <FrameIcon alt="website icon" src="/frame.svg" />
        <FrameParent>
          <CareerParent>
            <Career>Career</Career>
            <Career>Blogs</Career>
            <Career>Leaderboard</Career>
            <Career>Fees</Career>
          </CareerParent>
          <TradeNowWrapper>
            <TradeNow>Trade Now</TradeNow>
          </TradeNowWrapper>
        </FrameParent>
      </TopnavChild>
    </TopNavRoot>
  );
};

export default Header;
