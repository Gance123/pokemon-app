import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton = memo((props: Props) => {
  const { onClick, children } = props;

  return (
    <>
      <Button colorScheme="teal" onClick={onClick}>
        {children}
      </Button>
    </>
  );
});
