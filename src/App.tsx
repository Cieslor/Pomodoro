import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header, Footer, Timers } from "src/components";

const App = () => {
  return (
    <Flex className="App" w="100%" h="100vh" flexDirection="column">
      <Header />
      <Timers />
      <Footer />
    </Flex>
  );
};

export default App;
