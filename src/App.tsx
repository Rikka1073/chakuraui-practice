import { Button, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./thema/thema";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </>
  );
}

export default App;
