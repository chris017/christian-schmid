import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Float } from "@react-three/drei";
import styles from "../styles/Home.module.css";
import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import Model from "../components/Model";
import Icons from "../components/Icons";
const Home: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false); // Use state to store isMobile value

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []); // Run the effect only once after initial render

  return (
    <div className={styles.rootContainer}>
      <Icons />
      <Center>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          size={"lg"}
          style={{paddingTop: isMobile ? 0 : "8vh"}}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Center h="100%">
              <Container>
                <Text
                  fontSize={{ base: "3xl", lg: "5xl" }}
                  fontWeight="bold"
                  mb="4"
                >
                  Hi, I am<br />Christian Schmid 👋🏼
                </Text>
                <Text fontSize={{ base: "lg", lg: "2xl" }}>
                  Your tech wizard who transforms ideas into reality. Feel free to
                  check out my projects and don't hesitate to get in touch. Let's
                  make something amazing!
                </Text>
                <ButtonGroup variant="outline" spacing="6" mt={4} size={"lg"}>
                  <Button colorScheme="gray.200" borderRadius="full">
                      Hire Me
                    </Button>
                    <Button colorScheme="gray.200" borderRadius="full">
                      Hello
                    </Button>
                </ButtonGroup>
              </Container>
            </Center>
          </Box>
          <Box width={{ base: "100%", lg: "50%" }}>
          <div
              style={{
                height: isMobile ? "75vh" : "100%",
                paddingTop: isMobile ? "5vh" : 0,
              }}
            >
              <Canvas style={{ height: "100%" }}>
                <PresentationControls global>
                  <Float rotationIntensity={1.4}>
                    <Model scale={isMobile ? [1, 1, 1] : [1, 1, 1]} />
                  </Float>
                </PresentationControls>
              </Canvas>
            </div>
          </Box>
        </Flex>
      </Center>
    </div>
  );
};

export default Home;
