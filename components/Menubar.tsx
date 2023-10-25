import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const connectButtonHover = {
    transform: "translate(0, -3px)",
    boxShadow: "0 20px 80px -10px #3c2460",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };
  return (
    <>
      <Box background={"#E9EAF7"} px={4} pb={{ base: "10", md: "0" }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            background={"#E9EAF7"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box m="5">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/"
                >
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="md"
                    variant="ghost"
                    _hover={{
                      opacity: "0.6",
                      transition: "opacity 0.3s ease",
                      color: "#3c2460",
                    }}
                    mr="2"
                  />
                </Link>
                <Link target="_blank" href="https://github.com/chris017">
                  <IconButton
                    aria-label="Github"
                    icon={<FaGithub />}
                    size="md"
                    variant="ghost"
                    _hover={{
                      opacity: "0.6",
                      transition: "opacity 0.3s ease",
                      color: "#3c2460",
                    }}
                    mr="2"
                  />
                </Link>
                <Link target="_blank" href="https://twitter.com/Chris120321">
                  <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    size="md"
                    variant="ghost"
                    _hover={{
                      opacity: "0.6",
                      transition: "opacity 0.3s ease",
                      color: "#3c2460",
                    }}
                  />
                </Link>
              </Box>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/Projects" className={styles.navLink}>
                Projects
              </Link>
              <Link href="/Nft" className={styles.navLink}>
                Nft
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <ConnectButton
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
              />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/Projects" className={styles.navLink}>
                Projects
              </Link>
              <Link href="/Nft" className={styles.navLink}>
                Nft
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/"
              >
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  size="sm"
                  variant="ghost"
                  _hover={{
                    opacity: "0.6",
                    transition: "opacity 0.3s ease",
                    color: "#3c2460",
                  }}
                  mr="2"
                />
              </Link>
              <Link target="_blank" href="https://github.com/chris017">
                <IconButton
                  aria-label="Github"
                  icon={<FaGithub />}
                  size="sm"
                  variant="ghost"
                  _hover={{
                    opacity: "0.6",
                    transition: "opacity 0.3s ease",
                    color: "#3c2460",
                  }}
                  mr="2"
                />
              </Link>
              <Link target="_blank" href="https://twitter.com/Chris120321">
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  size="sm"
                  variant="ghost"
                  _hover={{
                    opacity: "0.6",
                    transition: "opacity 0.3s ease",
                    color: "#3c2460",
                  }}
                />
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
