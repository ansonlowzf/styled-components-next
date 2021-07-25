import styled from "styled-components";
import Image from "next/image";

export const FeatureContainer = styled.section`
  position: relative;
  height: 60vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 100%);
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    z-index: 10;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    z-index: 10;
  }
`;

export const FeatureImage = styled(Image)`
  z-index: -9;
`;
