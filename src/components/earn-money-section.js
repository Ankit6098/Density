import * as React from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  position: relative;
  width: 247.7px;
  height: 228.8px;
`;
const EarnMoney = styled.span``;
const TheEasyWay = styled.span`
  color: var(--electric-green-primary);
`;
const EarnMoneyTheContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const NoComplexityOf = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
`;
const EarnMoneyTheEasyWayParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: center;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 280px;
  height: 239px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: multiply;
`;
const ShareYourYour = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 33px;
  left: 30px;
  width: 103.7px;
  height: 90.4px;
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 101.24%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: -1.24%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameContainer = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-9);
  width: 323px;
  height: 323px;
  overflow: hidden;
  flex-shrink: 0;
`;
const InviteFriendsTo = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 264px;
`;
const FrameInner = styled.img`
  position: absolute;
  height: 29.78%;
  width: 33.62%;
  top: 11.15%;
  right: 56.66%;
  bottom: 59.07%;
  left: 9.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Trade = styled.p`
  margin: 0;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 32.35%;
  width: 30.03%;
  top: 9.6%;
  right: 61.92%;
  bottom: 58.05%;
  left: 8.05%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-13xl);
`;
const StartEarningNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const StartEarningNowWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
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
const FrameParentRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  text-align: left;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const EarnMoneySection = () => {
  return (
    <FrameParentRoot>
      <GroupParent>
        <FrameChild alt="" src="/group-1000003819.svg" />
        <EarnMoneyTheEasyWayParent>
          <EarnMoneyTheContainer>
            <EarnMoney>{`Earn Money. `}</EarnMoney>
            <TheEasyWay>The Easy Way.</TheEasyWay>
          </EarnMoneyTheContainer>
          <NoComplexityOf>
            No Complexity of Trading Fee, generate volume and win
          </NoComplexityOf>
        </EarnMoneyTheEasyWayParent>
      </GroupParent>
      <FrameGroup>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <ShareYourYour>Share your your referral link</ShareYourYour>
          <FrameItem alt="" src="/group-626834.svg" />
          <TextureIcon alt="" src="/texture6@2x.png" />
        </FrameContainer>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <InviteFriendsTo>Invite Friends to Trade on Density</InviteFriendsTo>
          <FrameInner alt="" src="/group-1000003822.svg" />
          <TextureIcon alt="" src="/texture6@2x.png" />
        </FrameContainer>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <ShareYourYour>
            <Trade>{`Trade `}</Trade>
            <Trade>and Earn</Trade>
          </ShareYourYour>
          <GroupIcon alt="" src="/group-181459681.svg" />
          <TextureIcon alt="" src="/texture6@2x.png" />
        </FrameContainer>
      </FrameGroup>
      <StartEarningNowWrapper>
        <StartEarningNow>start earning now</StartEarningNow>
      </StartEarningNowWrapper>
    </FrameParentRoot>
  );
};

export default EarnMoneySection;
