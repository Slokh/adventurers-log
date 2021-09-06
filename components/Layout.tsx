import {
  Button,
  Flex,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { isAddress } from "ethers/lib/utils";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export const Layout = ({
  address,
  sidebar,
  children,
}: {
  address: string;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [input, setInput] = useState(address);

  const handleClick = () => {
    if (isAddress(input)) {
      router.push(`/adventurer/${input}`);
    }
  };

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      fontFamily="EB Garamond"
      bgColor="#1A1A1A"
      minH={{ base: "", lg: "100vh" }}
      maxH={{ base: "", lg: "100vh" }}
      spacing={6}
      w="full"
    >
      <Stack
        overflowX="auto"
        overflowY="auto"
        maxW={{ base: "full", lg: "4xl" }}
        align="center"
        spacing={6}
        p={8}
      >
        <Text
          textAlign="center"
          fontSize="6xl"
          lineHeight="1"
        >{`Adventurer's Log`}</Text>
        <Flex direction="column" minW={{ base: "", md: "sm" }} maxW="sm">
          <Text>{`Adventurer's Address`}</Text>
          <Stack direction="row" align="center">
            <Input
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              textAlign="center"
              color="#1A1A1A"
              fontWeight="semibold"
              borderWidth={4}
              borderColor="#554E3D"
              boxShadow="inset 0 0 3px #554E3D"
              bgColor="#D4C29B"
            />
            <Button size="sm" onClick={handleClick}>
              View
            </Button>
          </Stack>
        </Flex>
        <Stack
          fontSize="sm"
          fontWeight="normal"
          direction="row"
          align="center"
          spacing={1}
        >
          <Text color="#C0C3C6">made by</Text>
          <Flex align="center" fontWeight="semibold">
            <Image w={4} h={4} mr={0.5} src="/twitter.svg" alt="" />
            <Link
              href="https://twitter.com/Slokh"
              _hover={{ color: "#C0C3C6" }}
            >
              Kartik
            </Link>
          </Flex>
        </Stack>
        {sidebar}
      </Stack>
      <Flex
        flexGrow={1}
        direction="column"
        overflowX="auto"
        overflowY="auto"
        whiteSpace="nowrap"
        bgColor="#D4C29B"
        borderWidth={6}
        borderColor="#554E3D"
        boxShadow="inset 0 0 10px #554E3D"
      >
        {children}
      </Flex>
    </Stack>
  );
};

export default Layout;
