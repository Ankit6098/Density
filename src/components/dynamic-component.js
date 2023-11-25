import * as React from "react";
import styled from "styled-components";

const B = styled.b`
  position: relative;
`;
const ConversionFee = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  font-weight: 500;
  color: var(--color-darkgray-100);
`;
const MnParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1.5px;
  height: 172px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-200);
  box-shadow: 0px 0px 10px rgba(235, 255, 37, 0.2);
  backdrop-filter: blur(52.5px);
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LandingPageInnerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-197xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--electric-green-primary);
  font-family: var(--mobile-caption-1-medium);
  background: black;
`;

const DynamicComponent = () => {
  return (
    <LandingPageInnerRoot>
      <FrameParent>
        <MnParent>
          <B>00%</B>
          <ConversionFee>{`Conversion Fee `}</ConversionFee>
        </MnParent>
        <FrameChild alt="" src="/vector-1.svg" />
        <MnParent>
          <B>500 Mn+</B>
          <ConversionFee>Lifetime Volume Traded</ConversionFee>
        </MnParent>
        <FrameChild alt="" src="/vector-2.svg" />
        <MnParent>
          <B>250+</B>
          <ConversionFee>Total Tradable Pairs</ConversionFee>
        </MnParent>
        <FrameChild alt="" src="/vector-1.svg" />
        <MnParent>
          <B>15,000+</B>
          <ConversionFee>Traders</ConversionFee>
        </MnParent>
      </FrameParent>
    </LandingPageInnerRoot>
  );
};

export default DynamicComponent;
