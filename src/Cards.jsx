"use client";

import {
  Box,
  Card,
  Heading,
  Text,
  CardHeader,
  IconButton,
  Flex,
  CardBody,
  CardFooter,
  Button,
  Avatar,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { HiMiniMap } from "react-icons/hi2";

export const Cards = () => {
  return (
    <Card maxW="md" overflow="hidden">
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
      {/* <CardHeader></CardHeader> */}
      {/* <CardBody></CardBody> */}
      <CardFooter>
        <Button flex="1" leftIcon={<HiMiniMap />}>
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};
