import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import Marie from "../../../assets/Images/Marie.png"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header: FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
          align="center"
        >
          <Image src={Marie} width={80} height={80} alt="Logo Marie Gautron" />
          <Flex display={{ base: "none", md: "flex" }} ml={10} justify="center">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          ml={4}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Flex align={"center"} justify={"center"} gap={3}>
                <Text>Voir le mode nuit</Text>
                <MoonIcon />
              </Flex>
            ) : (
              <Flex align={"center"} justify={"center"} gap={3}>
                <Text>Voir le mode jour</Text>
                <SunIcon />
              </Flex>
            )}
          </Button>
          {/* <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"purple.400"}
            _hover={{
              bg: "purple.300",
            }}
          >
            Me contacter
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Header
