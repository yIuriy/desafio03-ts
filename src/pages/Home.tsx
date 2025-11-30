import {
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";
import { Alert } from "@chakra-ui/react";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const [status, setStatus] = useState(0);

  const validateUser = async (email: string, password: string) => {
    const { statusCode, isLoggedIn } = await login(email, password);

    if (statusCode === 420) {
      setStatus(420);
      return;
    }

    if (statusCode === 430) {
      setStatus(430);
      return;
    }

    if (isLoggedIn) {
      setIsLoggedIn(true);
      setStatus(200);
      changeLocalStorage({ login: true });
      navigate("/conta/1");
    }
  };

  setTimeout(() => setStatus(0), 7000);

  return (
    <Box padding="25px">
      {status === 420 && (
        <Center>
          <Alert
            status="error"
            position="fixed"
            top="0"
            margin="auto"
            borderRadius="0px 0px 20px 20px"
          >
            <AlertIcon />
            <AlertTitle>Email Inválido!</AlertTitle>
          </Alert>
        </Center>
      )}
      {status === 430 && (
        <Center>
          <Alert
            status="error"
            position="fixed"
            top="0"
            margin="auto"
            borderRadius="0px 0px 20px 20px"
          >
            <AlertIcon />
            <AlertTitle>Senha Inválida!</AlertTitle>
          </Alert>
        </Center>
      )}
      <Card>
        <Center paddingBottom="20px">
          <Heading size={"2xl"}>Faça o login</Heading>
        </Center>
        <Center paddingBottom="20px">
          <Input
            width="90%"
            height="60px"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Center>
        <Center paddingBottom="20px">
          <Input
            width="90%"
            height="60px"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Center>
        <Center>
          <DButton onClick={() => validateUser(email, password)} />
        </Center>
      </Card>
    </Box>
  );
};

export default Home;
