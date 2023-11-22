"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import {
  IoShareSocialOutline,
  IoCameraSharp,
  IoEarthSharp
} from "react-icons/io5";
import { Slider } from "./Slider.jsx";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const Features = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"green.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Coming Soon
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={IoEarthSharp} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Search a City or Place"}
            />
            <Feature
              icon={<Icon as={IoCameraSharp} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Create Your QckMap"}
            />
            <Feature
              icon={
                <Icon
                  as={IoShareSocialOutline}
                  color={"purple.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Download & Share"}
            />
          </Stack>
        </Stack>

        <Flex borderRadius="md" overflow="hidden" h="400px">
          <Slider />
          {/* <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          /> */}
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
