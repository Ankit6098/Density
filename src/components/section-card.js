import * as React from "react";
import styled from "styled-components";
import AccountRegistrationSection from "./account-registration-section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DerivatesMadeSimple = styled.p`
  margin: 0;
`;
const In1 = styled.span``;
const Easy = styled.span`
  color: var(--electric-green-primary);
`;
const Steps = styled.span`
  color: var(--white);
`;
const DerivatesMadeSimpleContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 80px;
  display: inline-block;
  width: 936px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1134px;
  height: 1px;
  opacity: 0.4;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const DerivatesMadeSimpleIn3EasParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px;
  gap: var(--gap-101xl);
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const SectionCard = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <DerivatesMadeSimpleIn3EasParentRoot>
      <DerivatesMadeSimpleContainer>
        <DerivatesMadeSimple>Derivates made simple</DerivatesMadeSimple>
        <DerivatesMadeSimple>
          <In1>{`in `}</In1>
          <Easy>3 Easy</Easy>
          <Steps> Steps</Steps>
        </DerivatesMadeSimple>
      </DerivatesMadeSimpleContainer>
      <FrameParent data-aos="fade-zoom-in">
        <AccountRegistrationSection
          group626793="/group-626793.svg"
          group1000003801="/group-1000003801.svg"
          createAnAccount="Create an Account"
          registerCompleteYourVerif={`Register & Complete your Verification in less than 2 minutes`}
          data-aos="fade-zoom-in"
        />
        <FrameChild alt="" src="/vector-5.svg" />
        <AccountRegistrationSection
          group626793="/group-626794.svg"
          group1000003801="/group-626789.svg"
          createAnAccount="Deposit Funds"
          registerCompleteYourVerif="Add funds quickly using a variety of payment methods"
          propWidth="1446px"
          propWidth1="107.1px"
          propHeight="100px"
          data-aos="fade-zoom-in"
        />
        <FrameChild alt="" src="/vector-6.svg" />
        <AccountRegistrationSection
          group626793="/group-6267941.svg"
          group1000003801="/group-1000003802.svg"
          createAnAccount="Become a Trader"
          registerCompleteYourVerif={`Choose Your Trading Pair & Trade Seamlessly`}
          propWidth="1442px"
          propWidth1="115.8px"
          propHeight="120px"
          data-aos="fade-zoom-in"
        />
      </FrameParent>
    </DerivatesMadeSimpleIn3EasParentRoot>
  );
};

export default SectionCard;