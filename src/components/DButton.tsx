import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          colorScheme="teal"
          size="lg"
          width="50%"
          height="60px"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}

export default DButton
