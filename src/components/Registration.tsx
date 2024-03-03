import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import DivPigeon from "./DivPigeon";
import flightImage from "../assets/flightImages.jpg";

export const Registration = () => {
  return (
    <>
      <Box
        fontSize={30}
        border={"1px solid white"}
        padding={10}
        fontWeight={"bold"}
      >
        Pigeon Identification Form
      </Box>
      <Box border={"1px solid white"} padding={10}>
        <DivPigeon
          _width={"20rem"}
          _gap1={20}
          _gap2={10}
          _name1="Ring Number"
          _name2="Second Ring Number"
        />
        <Flex justifyContent={"space-around"} marginTop={20} marginBottom={20}>
          <Flex gap={10}>
            <Box fontSize={20}>Gender</Box>
            <Select
              placeholder="Select Gender"
              height={30}
              fontSize={20}
              variant={"outline"}
              size={"lg"}
              iconSize="0rem"
              marginBottom={"1.5rem"}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="young">Young</option>
            </Select>
          </Flex>
          <Flex gap={10}>
            <Box fontSize={20}>Status</Box>
            <Select
              placeholder="Select Status"
              height={30}
              fontSize={20}
              variant={"outline"}
              size={"lg"}
              iconSize="0rem"
              marginBottom={"1.5rem"}
            >
              <option value="male">Training</option>
              <option value="female">Breeding</option>
              <option value="young">Young Bird</option>
              <option value="young">Old Bird</option>
              <option value="young">Dead</option>
              <option value="young">Sold</option>
              <option value="young">On Loan</option>
              <option value="young">Diseased</option>
            </Select>
          </Flex>
        </Flex>
        <Flex gap={10} alignItems={"center"} fontSize={20} marginBottom={20}>
          <Box>Color</Box>
          <Input width={"20rem"} height={30} fontSize={20} padding={10}></Input>
        </Flex>
        <Flex justifyContent={"space-evenly"} marginBottom={20}>
          <Box>
            <Box fontSize={20} border={"1px solid white"} padding={10}>
              Body
            </Box>
            <Image
              border={"1px solid white"}
              padding={10}
              height={"26rem"}
              width={"20rem"}
              src={flightImage}
              objectFit={"contain"}
            />
          </Box>
          <Box>
            <Box fontSize={20} border={"1px solid white"} padding={10}>
              Eye
            </Box>
            <Image
              border={"1px solid white"}
              padding={10}
              height={"26rem"}
              width={"20rem"}
              src={flightImage}
              objectFit={"contain"}
            />
          </Box>
          <Box>
            <Box fontSize={20} border={"1px solid white"} padding={10}>
              Wing
            </Box>
            <Image
              border={"1px solid white"}
              padding={10}
              height={"26rem"}
              width={"20rem"}
              src={flightImage}
              objectFit={"contain"}
            />
          </Box>
        </Flex>
        <Flex
          flexDirection={"column"}
          border={"1px solid white"}
          marginBottom={20}
        >
          <Box fontSize={20} borderBottom={"1px solid white"} padding={10}>
            Sire/Father
          </Box>
          <DivPigeon
            _width="20rem"
            _gap1={60}
            _gap2={10}
            _name1="Ring Number"
            _name2="Name or Alias"
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          border={"1px solid white"}
          marginBottom={20}
        >
          <Box fontSize={20} borderBottom={"1px solid white"} padding={10}>
            Dam/Mother
          </Box>
          <DivPigeon
            _width="20rem"
            _gap1={60}
            _gap2={10}
            _name1="Ring Number"
            _name2="Name or Alias"
          />
        </Flex>
        <Flex gap={10} fontSize={20} marginBottom={20} alignItems={"center"}>
          <Box>Name or Alias</Box>
          <Input width={"40rem"} height={30} padding={10} fontSize={20}></Input>
        </Flex>
        <Flex flexDirection={"column"}>
          <Box
            fontSize={20}
            border={"1px solid white"}
            padding={10}
            textAlign={"start"}
          >
            Remarks
          </Box>
          <Textarea
            height={"10rem"}
            fontSize={20}
            fontFamily={"inherit"}
            padding={10}
          />
        </Flex>

        <Button padding={20} fontSize={20} bgColor={"#808080"} marginTop={20}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
