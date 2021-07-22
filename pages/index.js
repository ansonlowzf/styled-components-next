import styled from "styled-components";
import { Heading1, Heading2, Heading3 } from "../styles/typography";
import NextLink from "../components/NextLink";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <Heading1>This is a title</Heading1>
      <Heading2>This is a title</Heading2>
      <Heading3>This is a title</Heading3>
    </>
  );
}
