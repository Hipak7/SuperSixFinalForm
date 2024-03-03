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
import { ChangeEvent, useState } from "react";
import bodyTemplate from "../assets/bodyTemplate.jpg";
import eyeTemplate from "../assets/eyeTemplate.jpg";
import wingTemplate from "../assets/wingTemplate.jpeg";

export const PigeonRegistration = () => {
  const [selectedEyeImage, setSelectedEyeImage] = useState<string | undefined>(
    undefined
  );
  const [selectedBodyImage, setSelectedBodyImage] = useState<
    string | undefined
  >(undefined);
  const [selectedWingImage, setSelectedWingImage] = useState<
    string | undefined
  >(undefined);

  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        <Flex justifyContent={"space-between"} marginTop={20}>
          <Flex gap={10}>
            <Box fontSize={20}>Gender:</Box>
            <Select
              placeholder="Select Gender"
              height={50}
              width={200}
              fontSize={20}
              variant={"outline"}
              size={"lg"}
              iconSize="0rem"
              marginBottom={"1.5rem"}
              border={"1px solid white"}
              outline={"none"}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="young">Young</option>
            </Select>
          </Flex>

          <Flex gap={10}>
            <Box fontSize={20}>Status:</Box>
            <Select
              placeholder="Select Status"
              height={50}
              width={200}
              fontSize={20}
              variant={"outline"}
              size={"lg"}
              iconSize="0rem"
              marginBottom={"1.5rem"}
              border={"1px solid white"}
              outline={"none"}
            >
              <option value="training">Training</option>
              <option value="breeding">Breeding</option>
              <option value="youngBird">Young Bird</option>
              <option value="oldBird">Old Bird</option>
              <option value="dead">Dead</option>
              <option value="sold">Sold</option>
              <option value="onLoan">On Loan</option>
              <option value="diseased">Diseased</option>
            </Select>
          </Flex>

          <Flex gap={20} fontSize={20} marginBottom={20}>
            <Box>Color:</Box>
            <Input
              width={"20rem"}
              height={30}
              fontSize={20}
              padding={10}
              border={"1px solid white"}
              outline={"none"}
            ></Input>
          </Flex>
        </Flex>

        <Flex justifyContent={"space-evenly"} marginBottom={20}>
          <Flex flexDirection={"column"}>
            <label htmlFor="bodyImage">
              <Box fontSize={20} border={"1px solid white"} padding={10}>
                Body
              </Box>
              <Input
                type="file"
                accept="image/*"
                id="bodyImage"
                onChange={(e) => handleImageChange(e, setSelectedBodyImage)}
                fontSize={20}
                border={"1px solid white"}
                outline={"none"}
                display={"none"}
              />
              <Image
                border={"1px solid white"}
                padding={10}
                height={"26rem"}
                width={"20rem"}
                src={selectedBodyImage ? selectedBodyImage : bodyTemplate}
                objectFit={"contain"}
              />
            </label>
          </Flex>
          <Flex flexDirection={"column"}>
            <label htmlFor="eyeImage">
              <Box fontSize={20} border={"1px solid white"} padding={10}>
                Eye
              </Box>
              <Input
                type="file"
                accept="image/*"
                id="eyeImage"
                onChange={(e) => handleImageChange(e, setSelectedEyeImage)}
                fontSize={20}
                border={"1px solid white"}
                outline={"none"}
                display={"none"}
              />
              <Image
                border={"1px solid white"}
                padding={10}
                height={"26rem"}
                width={"20rem"}
                src={selectedEyeImage ? selectedEyeImage : eyeTemplate}
                objectFit={"contain"}
              />
            </label>
          </Flex>
          <Flex flexDirection={"column"}>
            <label htmlFor="wingImage">
              <Box fontSize={20} border={"1px solid white"} padding={10}>
                Wing
              </Box>
              <Input
                type="file"
                accept="image/*"
                id="wingImage"
                onChange={(e) => handleImageChange(e, setSelectedWingImage)}
                fontSize={20}
                border={"1px solid white"}
                outline={"none"}
                display={"none"}
              />
              <Image
                border={"1px solid white"}
                padding={10}
                height={"26rem"}
                width={"20rem"}
                src={selectedWingImage ? selectedWingImage : wingTemplate}
                objectFit={"cover"}
              />
            </label>
          </Flex>
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
          <Input
            width={"40rem"}
            height={30}
            padding={10}
            fontSize={20}
            border={"1px solid white"}
            outline={"none"}
          ></Input>
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
            outline={"none"}
            height={"scroll"}
            minHeight={"10rem"}
            fontSize={20}
            fontFamily={"inherit"}
            padding={"1rem"}
            border={"1px solid white"}
          />
        </Flex>

        <Button
          padding={"0.8rem 2rem"}
          fontSize={20}
          bgColor={"#808080"}
          marginTop={20}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
