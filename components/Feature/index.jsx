import { FeatureContainer, FeatureImage } from "./FeatureElement";

const Feature = ({ imgSrc, imgAlt }) => {
  return (
    <FeatureContainer>
      <FeatureImage src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <h1>Pizza of the day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
    </FeatureContainer>
  );
};

export default Feature;
