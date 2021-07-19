import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 4.235rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.167;
  letter-spacing: -0.01562em;
  color: ${(props) => props.theme.colors.primary};
`;

export const Heading2 = styled.h2`
  font-size: 2.618rem;
  text-align: center;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833;
  color: ${(props) => props.theme.colors.primary};
`;

export const Heading3 = styled.h3`
  font-size: 1.618rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0;
  color: ${(props) => props.theme.colors.primary};
`;
