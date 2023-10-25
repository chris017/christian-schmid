import {
  Box,
  Heading,
  Img,
  Text,
  Divider,
  HStack,
  Tag,
  Link,
  Button,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import Menubar from "../components/Menubar";
import Image from "next/image";
import skillshare from "../public/img/skillshare1.png";
import styles from "../styles/Home.module.css";
import pdfUploader from "../public/img/pdf_uploader.png";
import escrow from "../public/img/escrow.png";
import ecdsa from "../public/img/ecdsa.png";
import pyGui from "../public/img/pygui.png";
import portal from "../public/img/portal.png";
interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <>
    <Menubar />
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" className={styles.gradient}>
        Some of my Projects
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={skillshare}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Web3.0", "Solidity", "NextJs", "Dapp"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Skill-Share
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            Skill-Share utilizes a self-written smart contract on the Polygon
            chain to send messages between users in a secure and efficient
            manner, making it safer than any other technology through the use of
            blockchain. With Skill-Share, users can trust that their skills and
            knowledge will be exchanged securely and transparently.
          </Text>
          <Link target="_blank" href="https://skillshare-six.vercel.app">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Live Preview
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Python"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Salesforce PDF uploader
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            Upload PDF files to Salesforce with just a few clicks. Customisable
            parameters such as the path to the Excel list, access credentials,
            request URL and search path make it easy for users to tailor the
            tool to their specific needs.
          </Text>
          <Link target="_blank" href="https://github.com/chris017/salesforce-pdf-uploader">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Learn More
            </Button>
          </Link>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={pdfUploader}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={escrow}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Web3.0", "Hardhat", "Dapp"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Decentralized Escrow Application
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            My decentralised escrow app increases security using blockchain. It
            enables escrow payments for more secure transactions, ensuring funds
            are released when conditions are met. Trustworthy and efficient,
            it is a user-friendly choice.
          </Text>
          <Link target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%205%20-%20Sodality/Assignment%20-%20Decentralized%20Escrow%20Application">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Web3.0", "Cryptography", "keccak256", "Dapp"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              ECDSA Node
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            This project enhances security using client-server architecture and
            public key cryptography. Elliptic curve digital signatures ensure
            only authorised access, while keccak256 encryption protects
            sensitive data.
          </Text>
          <Link target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%201%20-%20Blockchain%20Cryptography/Assignment%20-%20keytesting">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Learn More
            </Button>
          </Link>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={ecdsa}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={pyGui}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Python", "Microchip"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              PyGUI for microchips
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            This GUI makes it easy to load the operating system onto the
            microchip, without the need for a command line. Select the OS file
            and adjust settings with ease.
          </Text>
          <Link target="_blank" href="https://github.com/chris017/py-gui-microchips">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Blender", "ThreeJs", "3D", "React"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Portal Scene
            </Text>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            My first Blender model, a portal, is now in React with React Three
            Fiber, enhancing digital environments with seamless web integration.
          </Text>
          <Link target="_blank" href="https://threejs-bootcamp-portal-r3f.vercel.app">
            <Button
              style={{
                backgroundColor: "#3c2460",
                color: "white",
              }}
              className={styles.projects}
              marginTop="2"
              size="md"
            >
              Live Preview
            </Button>
          </Link>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                style={{ borderRadius: "15px" }}
                src={portal}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(pink.600 1px, transparent 1px)",
                "radial(pink.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default ArticleList;
