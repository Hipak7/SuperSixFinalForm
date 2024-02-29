import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import flightImages from "../assets/flightImages.jpg";

const MainHeader = () => {
  return (
    <>
      <Box>
        <Flex alignContent={"start"} gap={40} justifyContent={"start"}>
          <Image
            width={"7.5rem"}
            border={"none"}
            src={logo}
            objectFit={"contain"}
          />
          <Box letterSpacing={-1} lineHeight={"50%"}>
            <Text fontSize="3rem" fontWeight={"bold"}>
              नेपाल परेवा उडान खेल संघ
            </Text>
            <Text fontSize="2rem">NEPAL PIGEON FLYING SPORTS ASSOCIATION</Text>
            <Text fontSize="1.5rem" letterSpacing={1}>
              २४ औ राष्ट्रिय परेवा उडान प्रतियोगिता २०८०
            </Text>
          </Box>
        </Flex>
        <Box
          textTransform={"uppercase"}
          backgroundColor={"gray"}
          color={"white"}
          padding={"10px 1rem"}
          fontWeight={"bold"}
          fontSize={"2rem"}
        >
          super six final form
        </Box>
        <Box marginTop={10}>
          <Flex justifyContent={"space-between"} border={"1px solid white"}>
            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Date & Day:</Box>
              <Box
                padding={"5px 10px"}
                width={"11rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
                textAlign={"start"}
              >
                02/28/2024, Wednesday
              </Box>
            </Box>

            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Weather Report:</Box>
              <Box
                padding={"5px 10px"}
                width={"16rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
              >
                Sunny, 20°C , Kathmandu
              </Box>
            </Box>

            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Time of Release:</Box>
              <Box
                padding={"5px 10px"}
                width={"5rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
              >
                09:00 AM
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box width="100%" marginTop={10} fontSize={"1rem"}>
          <TableContainer width={"100%"}>
            <Table
              size="lg"
              width={"100%"}
              colorScheme={"orange"}
              variant={"simple"}
              border={"1px solid white"}
            >
              <Thead fontWeight={"bold"}>
                <Tr>
                  <Th>क्र.म.</Th>
                  <Th width="20rem">परेवाको नाम</Th>
                  <Th>लिङ्ग</Th>
                  <Th>अवतरण समय</Th>
                  <Th>घण्टा</Th>
                  <Th>मिनेट</Th>
                  <Th>सदर परेवा</Th>
                  <Th width="20rem">टिप्पणी</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>१</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> -</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> होइन</Td>
                  <Td> बाजले लग्यो</Td>
                </Tr>
                <Tr>
                  <Td>२</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
                <Tr>
                  <Td>३</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
                <Tr>
                  <Td>४</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td></Td>
                  <Td>Final Score</Td>
                  <Td></Td>
                  <Td> </Td>
                  <Td> 27</Td>
                  <Td> 00</Td>
                  <Td> 3</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Box border={"1px solid white"} padding={10} marginTop={20}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
            >
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>प्रतियोगिको नाम</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  प्रदिप कार्कि
                </Box>
              </Box>
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>ठेगाना</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  थानकोट
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
            >
              <Box padding={"5px 10px"} display={"flex"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  textAlign={"start"}
                >
                  <Box padding={"5px 10px"}>परेवा अवतरण गर्ने अन्य दुई घर</Box>
                  <Box
                    padding={"5px 10px"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Box display={"flex"}>
                      <Box padding={"5px 10px"}>१.</Box>
                      <Box
                        padding={"5px 10px"}
                        width={"16rem"}
                        height={"1rem"}
                        borderBottom={"2px dashed white"}
                        fontSize={14}
                        fontWeight={"bold"}
                      >
                        पूर्व पट्टिको स्कूल
                      </Box>
                    </Box>
                    <Box display={"flex"}>
                      <Box padding={"5px 10px"}>२.</Box>
                      <Box
                        padding={"5px 10px"}
                        width={"16rem"}
                        height={"1rem"}
                        borderBottom={"2px dashed white"}
                        fontSize={14}
                        fontWeight={"bold"}
                      >
                        पूर्व पट्टिको स्कूल
                      </Box>
                    </Box>
                  </Box>

                  <Box padding={"5px 10px"} display={"flex"}>
                    <Box padding={"5px 10px"}>परेवामा लगाएको रङ्ग</Box>
                    <Box
                      padding={"5px 10px"}
                      width={"150px"}
                      height={"1rem"}
                      borderBottom={"2px dashed white"}
                      fontSize={14}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      गुलाबी
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>ड्रपर परेवा छोडेको समय: </Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  ०५:३० PM
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={20}
            border={"1px solid white"}
            padding={10}
          >
            <Box>
              <Box padding={"5px 10px"}>निर्णायकको नाम र दस्तखत</Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>१.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  रत्न काजी महर्जन
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>२.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  सन्जिब कपुर श्रेष्ठ
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>१.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  मंगल तामाङ्ग
                </Box>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <Box padding={"5px 10px"}>प्रतियोगीको दस्तखत</Box>
                <Box
                  padding={"5px 10px"}
                  width={"10rem"}
                  height={"1.5rem"}
                  border={"1px solid white"}
                ></Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box padding={"5px 10px"}>कैफियत</Box>
              <Box
                padding={"5px 10px"}
                width={"14rem"}
                height={"10rem"}
                border={"1px solid white"}
              ></Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={20}
            alignContent={"middle"}
            alignItems={"center"}
          ></Box>

          <Image
            width={"100%"}
            height={"500px"}
            src={flightImages}
            objectFit={"cover"}
          />
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;

import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import flightImages from "../assets/flightImages.jpg";

const MainHeader = () => {
  return (
    <>
      <Box>
        <Flex alignContent={"start"} gap={40} justifyContent={"start"}>
          <Image
            width={"7.5rem"}
            border={"none"}
            src={logo}
            objectFit={"contain"}
          />
          <Box letterSpacing={-1} lineHeight={"50%"}>
            <Text fontSize="3rem" fontWeight={"bold"}>
              नेपाल परेवा उडान खेल संघ
            </Text>
            <Text fontSize="2rem">NEPAL PIGEON FLYING SPORTS ASSOCIATION</Text>
            <Text fontSize="1.5rem" letterSpacing={1}>
              २४ औ राष्ट्रिय परेवा उडान प्रतियोगिता २०८०
            </Text>
          </Box>
        </Flex>
        <Box
          textTransform={"uppercase"}
          backgroundColor={"gray"}
          color={"white"}
          padding={"10px 1rem"}
          fontWeight={"bold"}
          fontSize={"2rem"}
        >
          super six final form
        </Box>
        <Box marginTop={10}>
          <Flex justifyContent={"space-between"} border={"1px solid white"}>
            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Date & Day:</Box>
              <Box
                padding={"5px 10px"}
                width={"11rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
                textAlign={"start"}
              >
                02/28/2024, Wednesday
              </Box>
            </Box>

            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Weather Report:</Box>
              <Box
                padding={"5px 10px"}
                width={"16rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
              >
                Sunny, 20°C , Kathmandu
              </Box>
            </Box>

            <Box padding={"5px 10px"} display={"flex"}>
              <Box padding={"5px 10px"}>Time of Release:</Box>
              <Box
                padding={"5px 10px"}
                width={"5rem"}
                height={"1rem"}
                borderBottom={"2px dashed white"}
                fontSize={14}
              >
                09:00 AM
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box width="100%" marginTop={10} fontSize={"1rem"}>
          <TableContainer width={"100%"}>
            <Table
              size="lg"
              width={"100%"}
              colorScheme={"orange"}
              variant={"simple"}
              border={"1px solid white"}
            >
              <Thead fontWeight={"bold"}>
                <Tr>
                  <Th>क्र.म.</Th>
                  <Th width="20rem">परेवाको नाम</Th>
                  <Th>लिङ्ग</Th>
                  <Th>अवतरण समय</Th>
                  <Th>घण्टा</Th>
                  <Th>मिनेट</Th>
                  <Th>सदर परेवा</Th>
                  <Th width="20rem">टिप्पणी</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>१</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> -</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> होइन</Td>
                  <Td> बाजले लग्यो</Td>
                </Tr>
                <Tr>
                  <Td>२</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
                <Tr>
                  <Td>३</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
                <Tr>
                  <Td>४</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 06:00</Td>
                  <Td> 09</Td>
                  <Td> 00</Td>
                  <Td> हो</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td></Td>
                  <Td>Final Score</Td>
                  <Td></Td>
                  <Td> </Td>
                  <Td> 27</Td>
                  <Td> 00</Td>
                  <Td> 3</Td>
                  <Td> मज्जाले उड्यो</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Box border={"1px solid white"} padding={10} marginTop={20}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
            >
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>प्रतियोगिको नाम</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  प्रदिप कार्कि
                </Box>
              </Box>
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>ठेगाना</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  थानकोट
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
            >
              <Box padding={"5px 10px"} display={"flex"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  textAlign={"start"}
                >
                  <Box padding={"5px 10px"}>परेवा अवतरण गर्ने अन्य दुई घर</Box>
                  <Box
                    padding={"5px 10px"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Box display={"flex"}>
                      <Box padding={"5px 10px"}>१.</Box>
                      <Box
                        padding={"5px 10px"}
                        width={"16rem"}
                        height={"1rem"}
                        borderBottom={"2px dashed white"}
                        fontSize={14}
                        fontWeight={"bold"}
                      >
                        पूर्व पट्टिको स्कूल
                      </Box>
                    </Box>
                    <Box display={"flex"}>
                      <Box padding={"5px 10px"}>२.</Box>
                      <Box
                        padding={"5px 10px"}
                        width={"16rem"}
                        height={"1rem"}
                        borderBottom={"2px dashed white"}
                        fontSize={14}
                        fontWeight={"bold"}
                      >
                        पूर्व पट्टिको स्कूल
                      </Box>
                    </Box>
                  </Box>

                  <Box padding={"5px 10px"} display={"flex"}>
                    <Box padding={"5px 10px"}>परेवामा लगाएको रङ्ग</Box>
                    <Box
                      padding={"5px 10px"}
                      width={"150px"}
                      height={"1rem"}
                      borderBottom={"2px dashed white"}
                      fontSize={14}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      गुलाबी
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>ड्रपर परेवा छोडेको समय: </Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  ०५:३० PM
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={20}
            border={"1px solid white"}
            padding={10}
          >
            <Box>
              <Box padding={"5px 10px"}>निर्णायकको नाम र दस्तखत</Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>१.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  रत्न काजी महर्जन
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>२.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  सन्जिब कपुर श्रेष्ठ
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box padding={"5px 10px"}>१.</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  fontWeight={"bold"}
                >
                  मंगल तामाङ्ग
                </Box>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <Box padding={"5px 10px"}>प्रतियोगीको दस्तखत</Box>
                <Box
                  padding={"5px 10px"}
                  width={"10rem"}
                  height={"1.5rem"}
                  border={"1px solid white"}
                ></Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box padding={"5px 10px"}>कैफियत</Box>
              <Box
                padding={"5px 10px"}
                width={"14rem"}
                height={"10rem"}
                border={"1px solid white"}
              ></Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={20}
            alignContent={"middle"}
            alignItems={"center"}
          ></Box>

          <Image
            width={"100%"}
            height={"500px"}
            src={flightImages}
            objectFit={"cover"}
          />
        </Box>
      </Box>
    </>
  );import {
    Box,
    Flex,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import logo from "../assets/logo.svg";
  import flightImages from "../assets/flightImages.jpg";
  
  const MainHeader = () => {
    return (
      <>
        <Box>
          <Flex alignContent={"start"} gap={40} justifyContent={"start"}>
            <Image
              width={"7.5rem"}
              border={"none"}
              src={logo}
              objectFit={"contain"}
            />
            <Box letterSpacing={-1} lineHeight={"50%"}>
              <Text fontSize="3rem" fontWeight={"bold"}>
                नेपाल परेवा उडान खेल संघ
              </Text>
              <Text fontSize="2rem">NEPAL PIGEON FLYING SPORTS ASSOCIATION</Text>
              <Text fontSize="1.5rem" letterSpacing={1}>
                २४ औ राष्ट्रिय परेवा उडान प्रतियोगिता २०८०
              </Text>
            </Box>
          </Flex>
          <Box
            textTransform={"uppercase"}
            backgroundColor={"gray"}
            color={"white"}
            padding={"10px 1rem"}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            super six final form
          </Box>
          <Box marginTop={10}>
            <Flex justifyContent={"space-between"} border={"1px solid white"}>
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>Date & Day:</Box>
                <Box
                  padding={"5px 10px"}
                  width={"11rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                  textAlign={"start"}
                >
                  02/28/2024, Wednesday
                </Box>
              </Box>
  
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>Weather Report:</Box>
                <Box
                  padding={"5px 10px"}
                  width={"16rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                >
                  Sunny, 20°C , Kathmandu
                </Box>
              </Box>
  
              <Box padding={"5px 10px"} display={"flex"}>
                <Box padding={"5px 10px"}>Time of Release:</Box>
                <Box
                  padding={"5px 10px"}
                  width={"5rem"}
                  height={"1rem"}
                  borderBottom={"2px dashed white"}
                  fontSize={14}
                >
                  09:00 AM
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box width="100%" marginTop={10} fontSize={"1rem"}>
            <TableContainer width={"100%"}>
              <Table
                size="lg"
                width={"100%"}
                colorScheme={"orange"}
                variant={"simple"}
                border={"1px solid white"}
              >
                <Thead fontWeight={"bold"}>
                  <Tr>
                    <Th>क्र.म.</Th>
                    <Th width="20rem">परेवाको नाम</Th>
                    <Th>लिङ्ग</Th>
                    <Th>अवतरण समय</Th>
                    <Th>घण्टा</Th>
                    <Th>मिनेट</Th>
                    <Th>सदर परेवा</Th>
                    <Th width="20rem">टिप्पणी</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>१</Td>
                    <Td>कास्नी</Td>
                    <Td>M</Td>
                    <Td> -</Td>
                    <Td> 09</Td>
                    <Td> 00</Td>
                    <Td> होइन</Td>
                    <Td> बाजले लग्यो</Td>
                  </Tr>
                  <Tr>
                    <Td>२</Td>
                    <Td>कास्नी</Td>
                    <Td>M</Td>
                    <Td> 06:00</Td>
                    <Td> 09</Td>
                    <Td> 00</Td>
                    <Td> हो</Td>
                    <Td> मज्जाले उड्यो</Td>
                  </Tr>
                  <Tr>
                    <Td>३</Td>
                    <Td>कास्नी</Td>
                    <Td>M</Td>
                    <Td> 06:00</Td>
                    <Td> 09</Td>
                    <Td> 00</Td>
                    <Td> हो</Td>
                    <Td> मज्जाले उड्यो</Td>
                  </Tr>
                  <Tr>
                    <Td>४</Td>
                    <Td>कास्नी</Td>
                    <Td>M</Td>
                    <Td> 06:00</Td>
                    <Td> 09</Td>
                    <Td> 00</Td>
                    <Td> हो</Td>
                    <Td> मज्जाले उड्यो</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td></Td>
                    <Td>Final Score</Td>
                    <Td></Td>
                    <Td> </Td>
                    <Td> 27</Td>
                    <Td> 00</Td>
                    <Td> 3</Td>
                    <Td> मज्जाले उड्यो</Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Box border={"1px solid white"} padding={10} marginTop={20}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                marginTop={20}
              >
                <Box padding={"5px 10px"} display={"flex"}>
                  <Box padding={"5px 10px"}>प्रतियोगिको नाम</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    प्रदिप कार्कि
                  </Box>
                </Box>
                <Box padding={"5px 10px"} display={"flex"}>
                  <Box padding={"5px 10px"}>ठेगाना</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    थानकोट
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                marginTop={20}
              >
                <Box padding={"5px 10px"} display={"flex"}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    textAlign={"start"}
                  >
                    <Box padding={"5px 10px"}>परेवा अवतरण गर्ने अन्य दुई घर</Box>
                    <Box
                      padding={"5px 10px"}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Box display={"flex"}>
                        <Box padding={"5px 10px"}>१.</Box>
                        <Box
                          padding={"5px 10px"}
                          width={"16rem"}
                          height={"1rem"}
                          borderBottom={"2px dashed white"}
                          fontSize={14}
                          fontWeight={"bold"}
                        >
                          पूर्व पट्टिको स्कूल
                        </Box>
                      </Box>
                      <Box display={"flex"}>
                        <Box padding={"5px 10px"}>२.</Box>
                        <Box
                          padding={"5px 10px"}
                          width={"16rem"}
                          height={"1rem"}
                          borderBottom={"2px dashed white"}
                          fontSize={14}
                          fontWeight={"bold"}
                        >
                          पूर्व पट्टिको स्कूल
                        </Box>
                      </Box>
                    </Box>
  
                    <Box padding={"5px 10px"} display={"flex"}>
                      <Box padding={"5px 10px"}>परेवामा लगाएको रङ्ग</Box>
                      <Box
                        padding={"5px 10px"}
                        width={"150px"}
                        height={"1rem"}
                        borderBottom={"2px dashed white"}
                        fontSize={14}
                        fontWeight={"bold"}
                        textAlign={"center"}
                      >
                        गुलाबी
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box padding={"5px 10px"} display={"flex"}>
                  <Box padding={"5px 10px"}>ड्रपर परेवा छोडेको समय: </Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    ०५:३० PM
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
              border={"1px solid white"}
              padding={10}
            >
              <Box>
                <Box padding={"5px 10px"}>निर्णायकको नाम र दस्तखत</Box>
                <Box display={"flex"}>
                  <Box padding={"5px 10px"}>१.</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    रत्न काजी महर्जन
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box padding={"5px 10px"}>२.</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    सन्जिब कपुर श्रेष्ठ
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box padding={"5px 10px"}>१.</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"16rem"}
                    height={"1rem"}
                    borderBottom={"2px dashed white"}
                    fontSize={14}
                    fontWeight={"bold"}
                  >
                    मंगल तामाङ्ग
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"start"}
                >
                  <Box padding={"5px 10px"}>प्रतियोगीको दस्तखत</Box>
                  <Box
                    padding={"5px 10px"}
                    width={"10rem"}
                    height={"1.5rem"}
                    border={"1px solid white"}
                  ></Box>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <Box padding={"5px 10px"}>कैफियत</Box>
                <Box
                  padding={"5px 10px"}
                  width={"14rem"}
                  height={"10rem"}
                  border={"1px solid white"}
                ></Box>
              </Box>
            </Box>
  
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              marginTop={20}
              alignContent={"middle"}
              alignItems={"center"}
            ></Box>
  
            <Image
              width={"100%"}
              height={"500px"}
              src={flightImages}
              objectFit={"cover"}
            />
          </Box>
        </Box>
      </>
    );
  };
  
  export default MainHeader;
  
};

export default MainHeader;
