import React, { FC, memo, ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Flex
        height="80px"
        bg="teal"
        color="white"
        fontSize="25px"
        fontWeight="bold"
        alignItems="center"
        justify="center"
      >
        <Text>ポケモン図鑑</Text>
      </Flex>

      {children}
    </>
  );
});
