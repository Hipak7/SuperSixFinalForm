import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

interface DivRegistrationLineProps {
  _width: string;
  _gap2: number;
  _name1: string;
  _name2?: string;
  _name3?: string;
}

const RegistrationLine: React.FC<DivRegistrationLineProps> = ({
  _width,
  _gap2,
  _name1,
  _name2,
  _name3,
}) => {
  return (
    <Box fontSize={15} marginBottom={20}>
      <Flex justifyContent={"space-between"} gap={20}>
        {[{ name: _name1 }, { name: _name2 }, { name: _name3 }]
          .filter(({ name }) => name)
          .map(({ name }, index) => (
            <Flex key={index} gap={_gap2} alignItems="center">
              <Box>{name}</Box>
              <FormControl>
                <Input
                  width={_width}
                  height={20}
                  fontSize={15}
                  padding={10}
                  border="1px solid white"
                  outline="none"
                />
              </FormControl>
            </Flex>
          ))}
      </Flex>
    </Box>
  );
};

export default RegistrationLine;
