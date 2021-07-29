import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: clamp(2rem, (1rem + 5vw), 6.8522rem);
  text-align: ${(props) => (props.textCenter ? "center" : "")};
  font-weight: 300;
  line-height: 1.167;
  letter-spacing: -0.01562em;
  color: ${(props) => (props.primary ? props.theme.colors.primary : "white")};
`;

export const Heading2 = styled.h2`
  font-size: clamp(1.75rem, (1rem + 4vw), 4.235rem);
  text-align: ${(props) => (props.textCenter ? "center" : "")};
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833;
  color: ${(props) => (props.primary ? props.theme.colors.primary : "white")};
`;

export const Heading3 = styled.h3`
  font-size: clamp(1.5rem, (1rem + 3vw), 2.618rem);
  text-align: center;
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0;
  color: ${(props) => (props.primary ? props.theme.colors.primary : "white")};
`;

//  1.618rem
