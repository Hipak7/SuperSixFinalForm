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
          padding={"10px 15px"}
          fontWeight={"bold"}
          fontSize={"2rem"}
        >
          super six final form
        </Box>
        <Box width="100%" marginTop={30}>
          <TableContainer width={"100%"}>
            <Table
              size="lg"
              width={"100%"}
              variant={"striped"}
              colorScheme={"white"}
            >
              <Thead fontWeight={"bold"}>
                <Tr>
                  <Th>क्र.म</Th>
                  <Th width="20rem">परेवाको नाम</Th>
                  <Th>लिङ्ग</Th>
                  <Th>अवतरण समय</Th>
                  <Th>घण्टा</Th>
                  <Th>मिनेट</Th>
                  <Th>सदर परेवा</Th>
                  <Th>बदर परेवा</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 10:00</Td>
                  <Td> 02</Td>
                  <Td> 16</Td>
                  <Td> </Td>
                  <Td> Yes</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 10:00</Td>
                  <Td> 02</Td>
                  <Td> 16</Td>
                  <Td> Yes</Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>कास्नी</Td>
                  <Td>M</Td>
                  <Td> 10:00</Td>
                  <Td> 02</Td>
                  <Td> 16</Td>
                  <Td> Yes</Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;
