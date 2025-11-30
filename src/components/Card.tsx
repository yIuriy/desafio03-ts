import { Box, Center } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      width="700px"
      shadow={"dark-lg"}
    >
      {children}
    </Box>
  );
};
