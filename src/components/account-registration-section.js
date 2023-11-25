import * as React from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  position: relative;
  width: 646px;
  height: 646px;
`;
const FrameItem = styled.img`position: relative;
  width: 119.6px;
  height: 120px;
  width: ${(p) => p.propWidth1}
  height: ${(p) => p.propHeight}
`;
const CreateAnAccount = styled.div`
  position: relative;
  font-weight: 500;
`;
const RegisterComplete = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32px;
  color: var(--color-darkgray-100);
  display: inline-block;
  width: 384px;
`;
const CreateAnAccountParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
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
  width: 216px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-29xl);
  box-sizing: border-box;
  font-size: var(--mobile-title-3-medium-size);
  color: var(--color-black);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-17xl);
`;
const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const GroupParentRoot = styled.div`
  width: 1442px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
  width: ${(p) => p.propWidth};
`;

const AccountRegistrationSection = ({
  group626793,
  group1000003801,
  createAnAccount,
  registerCompleteYourVerif,
  propWidth,
  propWidth1,
  propHeight,
}) => {
  return (
    <GroupParentRoot propWidth={propWidth}>
      <FrameChild alt="" src={group626793} />
      <GroupContainer>
        <FrameItem
          alt=""
          src={group1000003801}
          propWidth1={propWidth1}
          propHeight={propHeight}
        />
        <FrameParent>
          <CreateAnAccountParent>
            <CreateAnAccount>{createAnAccount}</CreateAnAccount>
            <RegisterComplete>{registerCompleteYourVerif}</RegisterComplete>
          </CreateAnAccountParent>
          <TradeNowWrapper>
            <TradeNow>Trade Now</TradeNow>
          </TradeNowWrapper>
        </FrameParent>
      </GroupContainer>
    </GroupParentRoot>
  );
};

export default AccountRegistrationSection;
