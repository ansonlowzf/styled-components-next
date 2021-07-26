import Hero from "../components/Hero";
import { Heading1, Heading2, Heading3 } from "../components/Typography";
import Accordion from "../components/Accordion";
import { Data } from "../const/data";

export default function Home() {
  return (
    <>
      <Hero imgSrc="/pizza.jpg" imgAlt="pizza" />
      <Heading1 primary>This is a title</Heading1>
      <Heading2 primary>This is a title</Heading2>
      <Heading3>This is a title</Heading3>
      <Accordion Data={Data} />
    </>
  );
}
