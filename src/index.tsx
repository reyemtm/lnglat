import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import { theme } from "./theme";
import { App } from "./App";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import "./styles.css";

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// After
// root.render(<App tab="home" />);
