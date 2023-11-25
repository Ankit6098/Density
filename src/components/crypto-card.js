import * as React from "react";
import styled from "styled-components";

const GroupChild = styled.img`
  position: absolute;
  top: 7.9px;
  left: 0px;
  width: 684.5px;
  height: 413.5px;
`;
const FrameChild = styled.img`
  position: relative;
  width: 19px;
  height: 19px;
`;
const Sell = styled.div`
  position: relative;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 207px;
  left: 101px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 32px;
  left: 264px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameInner = styled.img`
  position: relative;
  width: 19px;
  height: 18.5px;
`;
const GroupParent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 506px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent2 = styled.div`
  position: absolute;
  top: 384px;
  left: 152px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const GroupParent3 = styled.div`
  position: absolute;
  top: 194px;
  left: 425px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const VectorParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 684.5px;
  height: 421.5px;
`;
const Btcusdt = styled.div`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: var(--font-size-5xl);
  color: var(--white);
`;
const GroupParent = styled.div`
  flex: 1;
  position: relative;
  height: 420px;
  overflow: hidden;
`;
const VectorIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-height: 100%;
  width: 1px;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 5.1px;
  right: -262.5px;
  width: 662.5px;
  height: 306px;
`;
const GroupParent5 = styled.div`
  position: absolute;
  top: 65px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild3 = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
`;
const GroupParent6 = styled.div`
  position: absolute;
  top: 104px;
  right: 529px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent7 = styled.div`
  position: absolute;
  top: 0px;
  right: 85px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent8 = styled.div`
  position: absolute;
  top: 282px;
  right: 621px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent9 = styled.div`
  position: absolute;
  top: 291px;
  right: 297px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const VectorGroup = styled.div`
  position: absolute;
  top: 64px;
  right: 0px;
  width: 687px;
  height: 311px;
`;
const Nifty = styled.div`
  position: absolute;
  top: 355px;
  left: 302px;
  font-size: var(--font-size-5xl);
  text-transform: uppercase;
  color: var(--white);
  text-align: right;
`;
const GroupParent4 = styled.div`
  position: relative;
  width: 400px;
  height: 420px;
  overflow: hidden;
  flex-shrink: 0;
  color: var(--color-mediumspringgreen-100);
`;
const FrameParentRoot = styled.div`
  position: absolute;
  top: 34px;
  left: 54px;
  width: 966px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--color-tomato);
  font-family: var(--mobile-caption-1-medium);
`;

const CryptoCard = () => {
  return (
    <FrameParentRoot>
      <GroupParent>
        <VectorParent>
          <GroupChild alt="" src="/vector-1176.svg" />
          <GroupContainer>
            <FrameChild alt="" src="/group-1000003828.svg" />
            <Sell>Sell</Sell>
          </GroupContainer>
          <FrameDiv>
            <FrameChild alt="" src="/group-1000003828.svg" />
            <Sell>Sell</Sell>
          </FrameDiv>
          <GroupParent1>
            <FrameInner alt="" src="/group-1000003828.svg" />
            <Sell>Sell</Sell>
          </GroupParent1>
          <GroupParent2>
            <FrameChild alt="" src="/group-1000003829.svg" />
            <Sell>Buy</Sell>
          </GroupParent2>
          <GroupParent3>
            <FrameChild alt="" src="/group-1000003829.svg" />
            <Sell>Buy</Sell>
          </GroupParent3>
        </VectorParent>
        <Btcusdt>BTCUSDT</Btcusdt>
      </GroupParent>
      <VectorIcon alt="" src="/vector-1178.svg" />
      <GroupParent4>
        <VectorGroup>
          <GroupItem alt="" src="/vector-1177.svg" />
          <GroupParent5>
            <FrameChild alt="" src="/group-1000003829.svg" />
            <Sell>Buy</Sell>
          </GroupParent5>
          <GroupParent6>
            <FrameChild3 alt="" src="/group-1000003828.svg" />
            <Sell>Sell</Sell>
          </GroupParent6>
          <GroupParent7>
            <FrameChild alt="" src="/group-1000003828.svg" />
            <Sell>Sell</Sell>
          </GroupParent7>
          <GroupParent8>
            <FrameChild3 alt="" src="/group-1000003829.svg" />
            <Sell>Buy</Sell>
          </GroupParent8>
          <GroupParent9>
            <FrameChild alt="" src="/group-1000003829.svg" />
            <Sell>Buy</Sell>
          </GroupParent9>
        </VectorGroup>
        <Nifty>nifty</Nifty>
      </GroupParent4>
    </FrameParentRoot>
  );
};

export default CryptoCard;
