import * as React from "react";
import styled from "styled-components";

const MeetThe = styled.span``;
const Visionaries = styled.span`
  color: var(--electric-green-primary);
`;
const MeetTheVisionariesContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 775px;
`;
const NoComplexityOf = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
  display: none;
`;
const MeetTheVisionariesBehindDeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const AakashNeerajMittal = styled.b`
  position: absolute;
  top: 39.2px;
  left: 30px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const CeoDensity = styled.div`
  position: absolute;
  top: 123.2px;
  left: 30px;
  font-size: var(--font-size-xl);
  letter-spacing: -1px;
  line-height: 40px;
  color: var(--neutrals-grey-6);
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 101.25%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: -1.25%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 93.2px;
  left: 61px;
  width: 363px;
  height: 327px;
  object-fit: cover;
`;
const UillinkedinIcon = styled.img`
  position: absolute;
  top: 304.2px;
  left: 29px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const FrameContainer = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-8);
  width: 323px;
  height: 360px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Bhupendra = styled.p`
  margin: 0;
`;
const Image94Icon = styled.img`
  position: absolute;
  top: 109.2px;
  left: 108px;
  width: 315px;
  height: 315px;
  object-fit: cover;
`;
const Image96Icon = styled.img`
  position: absolute;
  top: 117.2px;
  left: 91px;
  width: 292px;
  height: 266px;
  object-fit: cover;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  background-color: var(--neutrals-grey-9);
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

const VisionariesSection = () => {
  return (
    <FrameParentRoot>
      <FrameWrapper>
        <MeetTheVisionariesBehindDeParent>
          <MeetTheVisionariesContainer>
            <MeetThe>{`Meet the `}</MeetThe>
            <Visionaries>Visionaries</Visionaries>
            <MeetThe> behind Density.</MeetThe>
          </MeetTheVisionariesContainer>
          <NoComplexityOf>
            No Complexity of Trading Fee, generate volume and win
          </NoComplexityOf>
        </MeetTheVisionariesBehindDeParent>
      </FrameWrapper>
      <FrameGroup>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <AakashNeerajMittal>Aakash Neeraj Mittal</AakashNeerajMittal>
          <CeoDensity>CEO, Density</CeoDensity>
          <TextureIcon alt="" src="/texture7@2x.png" />
          <Image95Icon alt="" src="/image-95@2x.png" />
          <UillinkedinIcon alt="" src="/uillinkedin.svg" />
        </FrameContainer>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <AakashNeerajMittal>
            <Bhupendra>{`Bhupendra `}</Bhupendra>
            <Bhupendra>Bule</Bhupendra>
          </AakashNeerajMittal>
          <CeoDensity>CTO, Density</CeoDensity>
          <TextureIcon alt="" src="/texture7@2x.png" />
          <Image94Icon alt="" src="/image-94@2x.png" />
          <UillinkedinIcon alt="" src="/uillinkedin.svg" />
        </FrameContainer>
        <FrameContainer>
          <FrameIcon alt="" src="/frame5.svg" />
          <AakashNeerajMittal>
            <Bhupendra>Deepak</Bhupendra>
            <Bhupendra>Vasman</Bhupendra>
          </AakashNeerajMittal>
          <CeoDensity>CBO, Density</CeoDensity>
          <TextureIcon alt="" src="/texture7@2x.png" />
          <Image96Icon alt="" src="/image-96@2x.png" />
          <UillinkedinIcon alt="" src="/uillinkedin.svg" />
        </FrameContainer>
      </FrameGroup>
    </FrameParentRoot>
  );
};

export default VisionariesSection;
