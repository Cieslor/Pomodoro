import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react";
import { Settings } from "src/components";

const App = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="App">
      <Button onClick={onOpen}>Open modal</Button>
      <Settings isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default App;
