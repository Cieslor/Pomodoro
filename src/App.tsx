import React from "react";
import { Heading, Text, Box, Button } from "@chakra-ui/react";

const App = () => {
  return (
    <div className="App">
      <Text color="pomodoro.primary" textStyle="h1">
        Hello
      </Text>
      <Heading as="h1" textStyle="h1">
        Test
      </Heading>
      <Box textStyle="h1">hello</Box>
      <Button variant="primary-light" size="md">
        Pomodoro
      </Button>
      <Button variant="primary-dark" size="sm">
        Test
      </Button>
    </div>
  );
};

export default App;
