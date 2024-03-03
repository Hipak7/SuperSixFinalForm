import { Box, Flex, Input } from "@chakra-ui/react";

interface DivPigeonProps {
  _width: string;
  _gap1: number;
  _gap2: number;
  _name1: string;
  _name2?: string;
}

const DivPigeon: React.FC<DivPigeonProps> = ({
  _width,
  _gap1,
  _gap2,
  _name1,
  _name2,
}) => {
  return (
    <>
      <Flex padding={10} fontSize={20}>
        <Flex gap={_gap1}>
          <Flex gap={_gap2} alignItems={"center"}>
            <Box>{_name1}</Box>
            <Input
              width={_width}
              height={30}
              fontSize={20}
              padding={10}
              border={"1px solid white"}
              outline={"none"}
            ></Input>
          </Flex>
          <Flex gap={_gap2} alignItems={"center"}>
            <Box>{_name2}</Box>
            <Input
              width={_width}
              height={30}
              fontSize={20}
              padding={10}
              border={"1px solid white"}
              outline={"none"}
            ></Input>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DivPigeon;
