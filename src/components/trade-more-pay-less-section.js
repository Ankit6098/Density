import * as React from "react";
import styled from "styled-components";

const TradeMore = styled.span``;
const PayLess = styled.span`
  color: var(--electric-green-primary);
`;
const TradeMorePayContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const OurLowFees = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.1px;
`;
const TradeMorePayLessParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameIcon = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.11%;
  top: 0%;
  right: 22.89%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.1;
`;
const B = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const TakerFees = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 42.35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Parent2 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 45.85px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image92Icon = styled.img`
  position: absolute;
  top: 55px;
  left: calc(50% - 73.35px);
  width: 146px;
  height: 30px;
  object-fit: cover;
  opacity: 0.5;
`;
const FrameContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--neutrals-grey-9);
  height: 438px;
  overflow: hidden;
`;
const FrameIcon1 = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.11%;
  top: 0%;
  right: 22.89%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.02;
  mix-blend-mode: multiply;
`;
const TakerFees1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent3 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 52.35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const Parent4 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 56.35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameIcon2 = styled.img`
  position: relative;
  width: 183.2px;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: calc(50% - 100.35px);
  box-shadow: 0px 0px 30px #e2ff6f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 125.11%;
  width: 114.78%;
  top: 0%;
  right: -14.78%;
  bottom: -25.11%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameDiv = styled.div`
  flex: 1;
  position: relative;
  background: linear-gradient(
    179.64deg,
    #daf760 17.19%,
    rgba(50, 216, 117, 0.96)
  );
  box-shadow: 0px 0px 40px rgba(226, 255, 111, 0.8);
  height: 438px;
  overflow: hidden;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
`;
const Image93Icon = styled.img`
  position: absolute;
  top: 45px;
  left: calc(50% - 95.65px);
  width: 192px;
  height: 61px;
  object-fit: cover;
  opacity: 0.7;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-131xl);
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-13xl);
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
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const TradeMorePayLessSection = () => {
  return (
    <FrameParentRoot>
      <TradeMorePayLessParent>
        <TradeMorePayContainer>
          <TradeMore>{`Trade More. `}</TradeMore>
          <PayLess>Pay Less.</PayLess>
        </TradeMorePayContainer>
        <OurLowFees>Our low Fees Supercharge Your Profits</OurLowFees>
      </TradeMorePayLessParent>
      <FrameGroup>
        <FrameContainer>
          <FrameIcon alt="" src="/frame1.svg" />
          <Parent1>
            <B>0.07</B>
            <TakerFees>Taker Fees</TakerFees>
          </Parent1>
          <Parent2>
            <B>0.025</B>
            <TakerFees>Maker Fees</TakerFees>
          </Parent2>
          <Image92Icon alt="" src="/image-92@2x.png" />
        </FrameContainer>
        <FrameDiv>
          <FrameIcon1 alt="" src="/frame2.svg" />
          <Parent3>
            <B>0.04</B>
            <TakerFees1>Taker Fees</TakerFees1>
          </Parent3>
          <Parent4>
            <B>0.02</B>
            <TakerFees1>Maker Fees</TakerFees1>
          </Parent4>
          <FrameWrapper>
            <FrameIcon2 alt="" src="/frame3.svg" />
          </FrameWrapper>
          <TextureIcon alt="" src="/texture@2x.png" />
        </FrameDiv>
        <FrameContainer>
          <FrameIcon alt="" src="/frame1.svg" />
          <Parent1>
            <B>0.05</B>
            <TakerFees>Taker Fees</TakerFees>
          </Parent1>
          <Parent2>
            <B>0.02</B>
            <TakerFees>Maker Fees</TakerFees>
          </Parent2>
          <Image93Icon alt="" src="/image-93@2x.png" />
        </FrameContainer>
      </FrameGroup>
    </FrameParentRoot>
  );
};

export default TradeMorePayLessSection;
