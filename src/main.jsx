import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppines','Roboto', sans-serif`,
  },
  colors: {
    brand: {
      primary: "#4B75BE",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
