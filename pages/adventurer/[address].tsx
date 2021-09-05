import { Flex } from "@chakra-ui/react";
import { isAddress } from "ethers/lib/utils";
import type { GetServerSideProps } from "next";
import { AdventureEvent } from "../../components/AdventureEvents";
import Layout from "../../components/Layout";
import { LogItem } from "../../types";

const AdventurersLog = ({
  address,
  logs,
}: {
  address: string;
  logs: LogItem[];
}) => (
  <Layout address={address}>
    <Flex
      direction="column"
      w="full"
      color="#1A1A1A"
      overflowX="auto"
      whiteSpace="nowrap"
      p={2}
    >
      {logs.map((logItem, i) => (
        <AdventureEvent key={i} logItem={logItem} />
      ))}
    </Flex>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const address = params?.address as string;

  if (!isAddress(address)) {
    return {
      notFound: true,
    };
  }

  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://adventurers-log.slokh.gg";

  const { logs } = await (
    await fetch(`${host}/api/adventurers/${address}`)
  ).json();

  if (!logs?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      address,
      logs,
    },
  };
};
export default AdventurersLog;
