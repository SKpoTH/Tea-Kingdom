import React from "react";
import { Image } from "semantic-ui-react";

const src = "./background.jpg";

const ImageExampleFluid = () => (
  <Image src={src} size="massive" centered fluid />
);

export default ImageExampleFluid;
