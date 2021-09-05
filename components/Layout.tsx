import { Flex, Input, Stack, Text, Image, Link } from "@chakra-ui/react";
import { isAddress } from "ethers/lib/utils";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export const Layout = ({
  address,
  children,
}: {
  address: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [input, setInput] = useState(address);

  useEffect(() => {
    if (isAddress(input)) {
      router.push(`/adventurer/${input}`);
    } else if (Number.isNaN(input)) {
      const i = parseInt(input, 10);
      // TODO: Handle loot bag history
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      fontFamily="EB Garamond"
      bgColor="#1A1A1A"
      minH="100vh"
      spacing={6}
      w="full"
    >
      <Stack
        maxW={{ base: "full", lg: "4xl" }}
        minH={{ base: "", lg: "100vh" }}
        align="center"
        spacing={8}
        p={8}
      >
        <Text
          textAlign="center"
          fontSize="6xl"
          lineHeight="1"
        >{`Adventurer's Log`}</Text>
        <Flex direction="column" minW="sm" maxW="sm" textAlign="center">
          <Text>{`Adventurer's Address`}</Text>
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
      </Stack>
      <Flex
        flexGrow={1}
        minH={{ base: "", lg: "100vh" }}
        maxH={{ base: "", lg: "100vh" }}
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
