import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex backgroundColor="#490768ff" padding="5px" shadow={"dark-lg"}>
      <Box>
        <Center padding="10px">
          <Heading fontSize="5xl" color="white">
            Dio Bank
          </Heading>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Center paddingRight="10px">
          <Button backgroundColor={"Menu"} shadow={"dark-lg"} onClick={() => logout()}>Sair</Button>
          </Center>
        </>
      )}
    </Flex>
  );
};
