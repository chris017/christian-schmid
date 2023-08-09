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

const ToggleColorMode: React.FC = () => {
  // You can remove the color mode related code since you want to remove color modes
  // const { colorMode, toggleColorMode } = useColorMode();
  // const lightColor = "#6a11cb";
  // const darkColor = "#16d9e3";
  // const iconHoverColor = colorMode === "light" ? lightColor : darkColor;

  return (
    <>
      <Flex pb={{ base: "10", md: "0" }}>
        <Box m="5">
          <Link href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="md"
              variant="ghost"
              // _hover={{ color: iconHoverColor }} // Remove color mode related styling
              mr="2"
            />
          </Link>
          <Link href="https://github.com/chris017">
            <IconButton
              aria-label="Github"
              icon={<FaGithub />}
              size="md"
              variant="ghost"
              // _hover={{ color: iconHoverColor }} // Remove color mode related styling
              mr="2"
            />
          </Link>
          <Link href="https://twitter.com/Chris120321">
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="md"
              variant="ghost"
              // _hover={{ color: iconHoverColor }} // Remove color mode related styling
            />
          </Link>
        </Box>
        <Spacer />
        <Box m="5">
          <ConnectButton />
        </Box>
      </Flex>
    </>
  );
};

export default ToggleColorMode;
