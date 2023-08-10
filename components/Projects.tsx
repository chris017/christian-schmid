import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  useDisclosure,
  CardFooter,
  SimpleGrid,
  Button,
  Flex,
  Card,
  Img,
  CardHeader,
  Divider,
  ButtonGroup,
  Stack,
  Box,
  CardBody,
  Link,
  Heading,
  Text,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCode, FaGithub } from "react-icons/fa";
import React from "react";
import styles from "../styles/Home.module.css";
import skillshare from "../public/img/skillshare1.png";
import pdfUploader from "../public/img/pdf_uploader.png";
import escrow from "../public/img/escrow.png";
import ecdsa from "../public/img/ecdsa.png";
import pyGui from "../public/img/pygui.png";
import portal from "../public/img/portal.png";
function Projects() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button
        onClick={() => handleClick(size)}
        style={{ backgroundColor: "#3c2460", color: "white" }}
        className={styles.projects}
        leftIcon={<FaCode />}
      >
        Projects
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            mt="1.5"
            className={styles.projects}
            style={{ backgroundColor: "#3c2460", color: "white" }}
          />
          <DrawerHeader className={styles.gradient}>
            Some of my Projects
          </DrawerHeader>
          <DrawerBody>
            <Center>
              {/* <Card 1> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  borderWidth="2px"
                  borderColor={"#3c2460"}
                  bgColor={"#E9EAF7"}
                >
                  <Image
                    objectFit="cover"
                    height={500}
                    width={500}
                    src={skillshare}
                    alt="Skill-Share"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading className={styles.gradient} size="md">
                          Skill-Share
                        </Heading>
                        <Text py="2">
                          Skill-Share is a decentralized application that allows
                          users to exchange skills with each other in a
                          peer-to-peer manner. The dApp can be used to connect
                          users with complementary skills and facilitate
                          skill-sharing and learning. In addition, Skill-Share
                          utilizes a self-written smart contract on the Polygon
                          chain to send messages between users in a secure and
                          efficient manner, making it safer than any other
                          technology through the use of blockchain. With
                          Skill-Share, users can trust that their skills and
                          knowledge will be exchanged securely and
                          transparently.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://skillshare-six.vercel.app"
                        >
                          <Button
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                            size="md"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>

            <Center>
              {/* </Card 2> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  bgColor={"#E9EAF7"}
                  borderWidth="2px"
                  borderColor={"#3c2460"}
                >
                  <Image
                    objectFit="cover"
                    width={500}
                    src={pdfUploader}
                    alt="Salesforce PDF uploader"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading size="md" className={styles.gradient}>
                          Salesforce PDF uploader
                        </Heading>
                        <Text py="2">
                          A user-friendly tool that allows users to easily
                          upload their PDF files to Salesforce with just a few
                          clicks. Customizable parameters such as the path to
                          the Excel list, access data, request URL, and search
                          path make it easy for users to tailor the tool to
                          their specific needs. Additionally, an Excel file
                          example is included to demonstrate how to format data
                          for upload. Streamline your workflow and save time
                          with my Pdf Uploader for Salesforce Attachments.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://github.com/chris017/salesforce-pdf-uploader"
                        >
                          <Button
                            size="md"
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>

            <Center>
              {/* </Card 4> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  bgColor={"#E9EAF7"}
                  borderWidth="2px"
                  borderColor={"#3c2460"}
                >
                  <Image
                    objectFit="cover"
                    width={500}
                    height={500}
                    src={escrow}
                    alt="Escrow"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading size="md" className={styles.gradient}>
                          Decentralized Escrow Application
                        </Heading>
                        <Text py="2">
                          My decentralized escrow application is an innovative
                          solution to make transactions safer and more
                          transparent. With my system, buyers and sellers can
                          agree to use an escrow payment, where the payment is
                          only released once the agreed-upon conditions are met.
                          The use of blockchain technology ensures the security
                          and integrity of transactions, as information is
                          stored in a decentralized and tamper-proof manner. My
                          decentralized escrow application provides a
                          user-friendly and trustworthy solution for anyone
                          looking to carry out transactions more securely and
                          efficiently.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%205%20-%20Sodality/Assignment%20-%20Decentralized%20Escrow%20Application"
                        >
                          <Button
                            size="md"
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>
            <Center>
              {/* </Card 5> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  borderWidth="2px"
                  bgColor={"#E9EAF7"}
                  borderColor={"#3c2460"}
                >
                  <Image
                    objectFit="cover"
                    height={500}
                    width={500}
                    src={ecdsa}
                    alt="ECDSA Node"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading size="md" className={styles.gradient}>
                          ECDSA Node
                        </Heading>
                        <Text py="2">
                          This project exemplifies the use of a client-server
                          architecture to facilitate secure transfers between
                          different addresses, with the added layer of
                          protection provided by Public Key Cryptography. By
                          utilizing Elliptic Curve Digital Signatures, I ensure
                          that only the rightful owner of the associated address
                          can authorize transfers, making unauthorized access
                          nearly impossible. To further strengthen security, the
                          address is sliced with -20 and encrypted using the
                          keccak256 algorithm, ensuring that all sensitive
                          information remains confidential.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%201%20-%20Blockchain%20Cryptography/Assignment%20-%20keytesting"
                        >
                          <Button
                            size="md"
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>

            <Center>
              {/* </Card 3> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  borderWidth="2px"
                  bgColor={"#E9EAF7"}
                  borderColor={"#3c2460"}
                >
                  <Image
                    objectFit="cover"
                    height={500}
                    width={500}
                    src={pyGui}
                    alt="PyGUI"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading size="md" className={styles.gradient}>
                          PyGUI for microchips
                        </Heading>
                        <Text py="2">
                          With this GUI, you can easily load operating systems
                          onto microchips without having to use complicated
                          command-line interfaces. The user-friendly interface
                          allows you to select the operating system file you
                          want to load onto the microchip, as well as configure
                          any necessary settings for the operation.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://github.com/chris017/py-gui-microchips"
                        >
                          <Button
                            size="md"
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>

            <Center>
              {/* </Card 6> */}
              <Box width={{ base: "100%", lg: "80%" }} m="5">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="none"
                  bgColor={"#E9EAF7"}
                  borderWidth="2px"
                  borderColor={"#3c2460"}
                >
                  <Image
                    objectFit="cover"
                    height={500}
                    width={500}
                    src={portal}
                    alt="Portal"
                  />

                  <Stack>
                    <Center h="100%">
                      <CardBody>
                        <Heading size="md" className={styles.gradient}>
                          Portal Scene
                        </Heading>
                        <Text py="2">
                          My first Blender model is a portal that has been
                          successfully imported into React with React Three
                          Fiber. The portal serves as a visually engaging
                          addition to any digital environment. Through the
                          integration of React Three Fiber, the portal can be
                          seamlessly integrated into web-based projects,
                          providing an immersive experience for users.
                        </Text>
                        <Link
                          target="_blank"
                          href="https://threejs-bootcamp-portal-r3f.vercel.app"
                        >
                          <Button
                            style={{
                              backgroundColor: "#3c2460",
                              color: "white",
                            }}
                            className={styles.projects}
                            size="md"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              </Box>
            </Center>

            <Center>
              <Link target="_blank" href="https://github.com/chris017">
                <Button
                  m="5"
                  style={{ backgroundColor: "#3c2460", color: "white" }}
                  className={styles.projects}
                  leftIcon={<FaGithub />}
                >
                  More on my GitHub
                </Button>
              </Link>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Projects;
