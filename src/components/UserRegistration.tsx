import { Box, Flex, Image, Input, Select } from "@chakra-ui/react";
import RegistrationLine from "./RegistrationLine";
import { ChangeEvent, useState } from "react";
import pp from "../assets/pp.jpg";

const UserRegistration = () => {
  const [selectedProfileImage, setSelectedProfileImage] = useState<
    string | undefined
  >(undefined);
  const [selectedCitizenshipFrontImage, setSelectedCitizenshipFrontImage] =
    useState<string | undefined>(undefined);
  const [selectedCitizenshipBackImage, setSelectedCitizenshipBackImage] =
    useState<string | undefined>(undefined);

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
      <Box>
        <Box
          border={"1px solid white"}
          padding={10}
          fontSize={25}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          User Registration Form
        </Box>
        <Box border={"1px solid white"} padding={20}>
          <RegistrationLine
            _width="15rem"
            _gap2={10}
            _name1="First Name"
            _name2="Middle Name"
            _name3="Last Name"
          />
          <RegistrationLine
            _width="15rem"
            _gap2={10}
            _name1="Phone Number"
            _name2="Email"
            _name3="Address"
          />
          <Flex gap={30} marginBottom={20} justifyContent={"space-evenly"}>
            <Flex gap={10} alignItems={"center"}>
              <Box>Gender</Box>
              <Select
                placeholder="Select Gender"
                height={30}
                width={200}
                fontSize={15}
                iconSize="0rem"
                border={"1px solid white"}
                outline={"none"}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="young">Others</option>
              </Select>
            </Flex>
            <Flex gap={10} alignItems={"center"}>
              <Box>Educational Level</Box>
              <Select
                placeholder="Education Level"
                height={30}
                width={200}
                fontSize={15}
                iconSize="0rem"
                border={"1px solid white"}
                outline={"none"}
              >
                <option value="illiterate">Illiterate</option>
                <option value="primary">Primary</option>
                <option value="upperPrimary">Upper Primary</option>
                <option value="secondary">Secondary</option>
                <option value="higherSecondary">Higher Secondary</option>
                <option value="vocational">Vocational(Diploma)</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="doctorate">Doctorate</option>
                <option value="others">Others</option>
              </Select>
            </Flex>
            {/* Date of Birth */}
            <Flex gap={10} alignItems={"center"}>
              <Box>Date of Birth</Box>
              <Input
                placeholder="Select Date and Time"
                size="lg"
                type="date"
                height={25}
                width={150}
              />
            </Flex>
          </Flex>

          <Flex justifyContent={"space-between"} marginBottom={20}>
            <Flex flexDirection={"column"}>
              <label htmlFor="bodyImage">
                <Box fontSize={20} border={"1px solid white"} padding={10}>
                  Profile Picture
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  id="bodyImage"
                  onChange={(e) =>
                    handleImageChange(e, setSelectedProfileImage)
                  }
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
                  src={selectedProfileImage ? selectedProfileImage : pp}
                  objectFit={"contain"}
                />
              </label>
            </Flex>
            <Flex flexDirection={"column"}>
              <label htmlFor="eyeImage">
                <Box fontSize={20} border={"1px solid white"} padding={10}>
                  Citizenship Front
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  id="eyeImage"
                  onChange={(e) =>
                    handleImageChange(e, setSelectedCitizenshipFrontImage)
                  }
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
                  src={
                    selectedCitizenshipFrontImage
                      ? selectedCitizenshipFrontImage
                      : pp
                  }
                  objectFit={"contain"}
                />
              </label>
            </Flex>
            <Flex flexDirection={"column"}>
              <label htmlFor="wingImage">
                <Box fontSize={20} border={"1px solid white"} padding={10}>
                  Citizenship Back
                </Box>
                <Input
                  type="file"
                  accept="image/*"
                  id="wingImage"
                  onChange={(e) =>
                    handleImageChange(e, setSelectedCitizenshipBackImage)
                  }
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
                  objectFit={"contain"}
                  src={
                    selectedCitizenshipBackImage
                      ? selectedCitizenshipBackImage
                      : pp
                  }
                />
              </label>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default UserRegistration;
