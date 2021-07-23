import Image from "next/image";
import { ImageContainer } from "./ImageSectionElement";

const ImageSection = ({ imgSrc, imgAlt }) => {
  return (
    <ImageContainer>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
        objectFit="cover"
        // width={720}
        // height={540}
      />
    </ImageContainer>
  );
};

export default ImageSection;
