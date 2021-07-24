import styled from "styled-components";
import { Heading1, Heading2 } from "../Typography";
import { ButtonT1 } from "../../styles/globals";

export const HeroContainer = styled.section`
  position: relative;
  height: calc(100vh - 64px);
  width: 100vw;
  overflow: hidden;
  z-index: -99;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  width: min(70%, ${(props) => props.theme.breakpoints.lg});

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export const HeroTitle = styled(Heading1)`
  margin-bottom: 2rem;
  font-weight: bolder;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export const HeroSubtitle = styled(Heading2)`
  margin-bottom: 2rem;
  font-weight: bold;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export const HeroButton = styled(ButtonT1)`
  font-size: 2rem;
`;
