import * as React from "react";
import styled from "styled-components";

const Same = styled.p`
  margin: 0;
`;
const SameStrategies = styled.b`
  position: relative;
`;
const SameStrategiesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FrameChild = styled.img`
  position: relative;
  width: 1px;
  height: 88px;
`;
const FrameParentRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-400);
  backdrop-filter: blur(52.5px);
  border: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 1140px;
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const Container = () => {
  return (
    <FrameParentRoot>
      <SameStrategiesWrapper>
        <SameStrategies>
          <Same>Same</Same>
          <Same>Strategies</Same>
        </SameStrategies>
      </SameStrategiesWrapper>
      <FrameChild alt="" src="/vector-11.svg" />
      <SameStrategiesWrapper>
        <SameStrategies>
          <Same>Same</Same>
          <Same>Indicators</Same>
        </SameStrategies>
      </SameStrategiesWrapper>
      <FrameChild alt="" src="/vector-11.svg" />
      <SameStrategiesWrapper>
        <SameStrategies>
          <Same>Better</Same>
          <Same>Leverage</Same>
        </SameStrategies>
      </SameStrategiesWrapper>
      <FrameChild alt="" src="/vector-11.svg" />
      <SameStrategiesWrapper>
        <SameStrategies>
          <Same>24x7</Same>
          <Same>Trading</Same>
        </SameStrategies>
      </SameStrategiesWrapper>
    </FrameParentRoot>
  );
};

export default Container;
