import * as React from "react";
import styled from "styled-components";

const FooterChild = styled.img`
  position: relative;
  width: 127.3px;
  height: 29.3px;
`;
const Fees = styled.div`
  position: absolute;
  top: 0px;
  left: 83.4px;
`;
const Blog = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Leaderboard = styled.div`
  position: absolute;
  top: 0px;
  left: 168.2px;
`;
const ContactUs = styled.div`
  position: absolute;
  top: 0px;
  left: 413px;
`;
const Careers = styled.div`
  position: absolute;
  top: 0px;
  left: 307px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 0px;
  left: 539.2px;
`;
const FeesParent = styled.div`
  position: relative;
  width: 628.2px;
  height: 17px;
`;
const LremIpsumOd = styled.div`
  position: relative;
  line-height: 24px;
  color: var(--color-gainsboro-100);
  text-align: center;
  display: inline-block;
  width: 786.9px;
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const FooterItem = styled.img`
  position: relative;
  width: 189.5px;
  height: 32px;
`;
const FooterRoot = styled.div`
  align-self: stretch;
  background-color: var(--color-mediumseagreen-200);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-44xl) var(--padding-226xl);
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const FormContainer = () => {
  return (
    <FooterRoot>
      <FooterChild alt="" src="/group-626657.svg" />
      <GroupParent>
        <FeesParent>
          <Fees>Fees</Fees>
          <Blog>Blog</Blog>
          <Leaderboard>Leaderboard</Leaderboard>
          <ContactUs>Contact Us</ContactUs>
          <Careers>Careers</Careers>
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        </FeesParent>
        <LremIpsumOd>{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</LremIpsumOd>
      </GroupParent>
      <FooterItem alt="" src="/group-2007.svg" />
    </FooterRoot>
  );
};

export default FormContainer;
