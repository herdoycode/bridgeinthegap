import ThemeSwitch from "@/components/ThemeSwitch";
import { Box, Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import DropdownNav from "./DropdownNav";

const Navbar = () => {
  return (
    <Flex align="center" className="h-[70px] bg-secondary">
      <Container p={{ initial: "2", md: "0" }}>
        <Flex align="center" justify="between">
          <Flex align="center" gap={{ initial: "4", md: "6" }}>
            <Image src="/logo.png" height="40" width="40" alt="Logo" />
            <Box display={{ initial: "block", md: "none" }}>
              <DropdownNav />
            </Box>

            <Flex
              align="center"
              gap={{ initial: "4", md: "6" }}
              display={{ initial: "none", md: "flex" }}
            >
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Gallery</Link>
              <Link href="/">Contact</Link>
            </Flex>
          </Flex>
          <Flex align="center" gap={{ initial: "4", md: "6" }}>
            <Link href="/">Login</Link>
            <ThemeSwitch />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
