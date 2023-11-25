import * as React from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
`;
const Bitcoin = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 20px;
  font-weight: 500;
`;
const Btcusdt = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-41);
`;
const BitcoinParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const VectorIcon = styled.img`
  position: relative;
  width: 74.3px;
  height: 28.3px;
  height: ${(p) => p.propHeight};
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 15px;
  font-weight: 500;
`;
const A = styled.a`
  position: relative;
  font-size: var(--mobile-title-3-medium-size);
  letter-spacing: 0.2px;
  line-height: 28px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
  text-decoration: none;
  text-decoration: ${(p) => p.propTextDecoration};
`;
const PriceParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const B = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
`;
const VolParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--sematics-green);
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  font-size: var(--mobile-caption-3-size);
  color: var(--neutrals-grey-41);
`;
const FrameParentRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--neutrals-grey-2);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-lgi);
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--neutrals-grey-91);
  font-family: var(--mobile-caption-1-medium);
`;

const ContainerCardForm = ({
  cryptoImageUrl,
  cryptoSymbolImageUrl,
  cryptoPairImageUrl,
  dimensionImageUrl,
  price,
  cryptoLogoImageUrl,
  componentImageUrl,
  financialValue,
  percentageText,
  propHeight,
  propTextDecoration,
}) => {
  return (
    <FrameParentRoot>
      <FrameGroup>
        <GroupParent>
          <FrameChild alt="" src={cryptoImageUrl} />
          <BitcoinParent>
            <Bitcoin>{cryptoSymbolImageUrl}</Bitcoin>
            <Btcusdt>{cryptoPairImageUrl}</Btcusdt>
          </BitcoinParent>
        </GroupParent>
        <VectorIcon alt="" src={dimensionImageUrl} propHeight={propHeight} />
      </FrameGroup>
      <FrameContainer>
        <PriceParent>
          <Price>Price</Price>
          <A
            href={cryptoLogoImageUrl}
            target={componentImageUrl}
            propTextDecoration={propTextDecoration}
          >
            {price}
          </A>
        </PriceParent>
        <FrameDiv>
          <VolParent>
            <Price>VOL</Price>
            <B>{financialValue}</B>
          </VolParent>
          <VolParent>
            <Price>CHG</Price>
            <Div>{percentageText}</Div>
          </VolParent>
        </FrameDiv>
      </FrameContainer>
    </FrameParentRoot>
  );
};

export default ContainerCardForm;
