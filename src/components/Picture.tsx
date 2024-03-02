import { Flex, Image } from "@chakra-ui/react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img0 from "../assets/img0.png";

export const Picture = () => {
  const ab = [img0];
  return (
    <>
      <Flex gap={20}>
        {ab.map((img, index) => (
          <Image
            aspectRatio={"1/1"}
            flexGrow={1}
            key={index}
            width={"400px"}
            height={"320px"}
            src={img}
            objectFit={"contain"}
            border={"1px solid white"}
            background={"none"}
            padding={20}
          ></Image>
        ))}
      </Flex>
    </>
  );
};
