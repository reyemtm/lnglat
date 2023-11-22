"use client";

import {
  useDisclosure,
  SimpleGrid,
  Container,
  Spacer,
  Flex,
  Box
} from "@chakra-ui/react";

import { Features } from "./Features";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useStateStore } from "./state.js";

export const App = () => {
  const { isOpen, onToggle } = useDisclosure();
  const array = new Array(12).fill(1);
  return (
    <Flex flexDir="column" id="app" height="100%">
      <Navbar />
      {/* <Spacer h={20} /> */}
      <Box as="main" flex="1">
        <Features flex={1} />
      </Box>
      {/* <Spacer h={40} /> */}
      {/* <Container maxW="1440px">
        <SimpleGrid columns={[2, 2, 3, 3, 3, 4]} spacing="40px" p={4}>
          {array.map((e, i) => (
            <Cards key={i.toString()} />
          ))}
        </SimpleGrid>
      </Container> */}
      {/* <Spacer h={60} /> */}
      <Footer />
    </Flex>
  );
};
