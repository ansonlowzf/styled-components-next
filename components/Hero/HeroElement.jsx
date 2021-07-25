import styled from "styled-components";
import { Heading1, Heading2 } from "../Typography";
import Image from "next/image";

export const HeroContainer = styled.section`
  height: calc(100vh - 64px);
  width: 100vw;
  overflow: hidden;
`;

export const HeroImage = styled(Image)`
  z-index: -99;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const HeroContent = styled.div`
  width: min(70%, ${(props) => props.theme.breakpoints.lg});
  z-index: 10;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export const HeroTitle = styled(Heading1)`
  margin-bottom: 2rem;
  font-weight: bolder;
  box-shadow: 3px 5px #e9ba23;

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

export const HeroButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 2.75rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
