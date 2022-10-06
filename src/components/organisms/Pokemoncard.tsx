// import { Box, Stack } from "@chakra-ui/react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
  imageURL: string;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  abilities: [{ ability: { name: string } }, { ability: { name: string } }?];
  //2つのオブジェクトを持つ配列が廻ってきて、[1]はないものもある
};

export const PokemonCard = (props: Props) => {
  const { name, imageURL, types, weight, height, abilities } = props;
  return (
    <>
      <Box
        as="div"
        w="260px"
        h="520px"
        bg="white"
        borderRadius="10px"
        boxShadow="0px 0px 14px -2px"
        p={4}
        m="5px"
        transition="all .2s"
        _hover={{
          opacity: 0.8,
          cursor: "pointer",
          transform: "translateY(-10px)",
        }}
      >
        <Stack textAlign="center">
          <Image boxSize="170px" src={imageURL} m="auto" />
          <Box>
            <Text as="p" fontSize="24px" fontWeight="bold">
              {name}
            </Text>
          </Box>
          <Box textAlign="center" pt={3}>
            <Text>タイプ</Text>
            {types.map((type) => {
              return <Text key={type.type.name}>{type.type.name}</Text>;
            })}
          </Box>
          <Box>
            <Box pt="10px">
              <Text>重さ:{weight}kg</Text>
            </Box>
            <Box pt="10px">
              <Text>高さ:{height}m</Text>
            </Box>
            <Box pt="10px">
              <Text>特性:{abilities[0].ability.name}</Text>
              {abilities[1] && <Text>特性2:{abilities[1]?.ability.name}</Text>}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
