import { Box, Center } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box minHeight="100vh" backgroundColor="#9413dc">
        <Center>{children}</Center>
      </Box>
      <Footer />
    </>
  );
};
