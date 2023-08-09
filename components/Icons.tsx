import React from "react";
import {
  Button,
  Flex,
  Box,
  Spacer,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Icons: React.FC = () => {
  const connectButtonHover = {
    transform: "translate(0, -3px)",
    boxShadow: "0 20px 80px -10px #3c2460",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }
  return (
    <>
      <Flex pb={{ base: "10", md: "0" }}>
        <Box m="5">
          <Link target="_blank" href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="md"
              variant="ghost"
              _hover={{ opacity: "0.6", transition: "opacity 0.3s ease" }}
              mr="2"
            />
          </Link>
          <Link target="_blank" href="https://github.com/chris017">
            <IconButton
              aria-label="Github"
              icon={<FaGithub />}
              size="md"
              variant="ghost"
              _hover={{ opacity: "0.6", transition: "opacity 0.3s ease" }}
              mr="2"
            />
          </Link>
          <Link target="_blank" href="https://twitter.com/Chris120321">
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="md"
              variant="ghost"
              _hover={{ opacity: "0.6", transition: "opacity 0.3s ease" }}
            />
          </Link>
        </Box>
        <Spacer />
        <Box m="5">
        <ConnectButton
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
        </Box>
      </Flex>
    </>
  );
};

export default Icons;
