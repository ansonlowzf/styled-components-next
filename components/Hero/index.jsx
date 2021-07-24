import {
  HeroContainer,
  HeroOverlay,
  HeroTitle,
  HeroSubtitle,
  HeroContent,
  HeroButton,
} from "./HeroElement";
import Image from "next/image";

const Hero = ({ imgSrc, imgAlt }) => {
  return (
    <HeroContainer>
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <HeroOverlay>
        <HeroContent>
          <HeroTitle>This is Heading1</HeroTitle>
          <HeroSubtitle as="p">This is Subtitle</HeroSubtitle>
          <HeroButton>Check Out</HeroButton>
        </HeroContent>
      </HeroOverlay>
    </HeroContainer>
  );
};

export default Hero;
