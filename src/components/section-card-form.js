import * as React from "react";
import styled from "styled-components";

const StartSmallEarn = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const DeposityAMinimum = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-8);
  display: inline-block;
  width: 659.1px;
`;
const StartSmallEarnBigParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Icon = styled.img`
  position: absolute;
  top: 52px;
  left: 43px;
  width: 190.9px;
  height: 119.2px;
`;
const Deposit = styled.p`
  margin: 0;
`;
const DepositBonus = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
  display: inline-block;
  width: 175.5px;
`;
const OurAssetsLiquidity = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 15.75px;
  line-height: 23.63px;
  color: var(--neutrals-grey-61);
`;
const DepositBonusParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 424px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 144.89%;
  top: 0%;
  bottom: -44.89%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 751px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 0.5px;
  right: 0px;
  width: 304.2px;
  height: 273px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: soft-light;
`;
const FrameContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--color-whitesmoke);
  height: 450px;
  overflow: hidden;
`;
const DedicatedRelationshipManagerContainer = styled.b`
  align-self: stretch;
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const DedicatedRelationshipManagerParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 446px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const Manager1Icon = styled.img`
  position: absolute;
  top: 54px;
  left: 48.8px;
  width: 158.2px;
  height: 104.8px;
`;
const TextureIcon1 = styled.img`
  position: absolute;
  height: 154.22%;
  top: 0%;
  bottom: -54.22%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 668px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-98xl) var(--padding-141xl);
  gap: var(--gap-72xl);
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white1);
  font-family: var(--mobile-caption-1-medium);
`;

const SectionCardForm = () => {
  return (
    <FrameParentRoot>
      <StartSmallEarnBigParent>
        <StartSmallEarn>Start Small. Earn Big.</StartSmallEarn>
        <DeposityAMinimum>
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </DeposityAMinimum>
      </StartSmallEarnBigParent>
      <FrameGroup>
        <FrameContainer>
          <Icon alt="" src="/25-2.svg" />
          <DepositBonusParent>
            <DepositBonus>
              <Deposit>Deposit</Deposit>
              <Deposit>Bonus.</Deposit>
            </DepositBonus>
            <OurAssetsLiquidity>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </OurAssetsLiquidity>
          </DepositBonusParent>
          <TextureIcon alt="" src="/texture3@2x.png" />
          <FrameIcon alt="" src="/frame4.svg" />
        </FrameContainer>
        <FrameContainer>
          <DedicatedRelationshipManagerParent>
            <DedicatedRelationshipManagerContainer>
              <Deposit>Dedicated</Deposit>
              <Deposit>Relationship Manager.</Deposit>
            </DedicatedRelationshipManagerContainer>
            <OurAssetsLiquidity>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </OurAssetsLiquidity>
          </DedicatedRelationshipManagerParent>
          <Manager1Icon alt="" src="/manager-1.svg" />
          <TextureIcon1 alt="" src="/texture4@2x.png" />
          <FrameIcon alt="" src="/frame4.svg" />
        </FrameContainer>
      </FrameGroup>
    </FrameParentRoot>
  );
};

export default SectionCardForm;
