import { Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";

const AdventurersLog = ({ address }: { address: string }) => (
  <Layout address={address}>
    <Flex
      direction="column"
      w="full"
      color="#1A1A1A"
      overflowX="auto"
      whiteSpace="nowrap"
      p={2}
    >
      {`Enter an adventurer's address to view their log...`}
    </Flex>
  </Layout>
);

export default AdventurersLog;
