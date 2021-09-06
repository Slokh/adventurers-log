import { Link, Stack, Text } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import { isAddress } from "ethers/lib/utils";
import type { GetServerSideProps } from "next";
import { AdventureEvent } from "../../components/AdventureEvents";
import { AbilityScores } from "../../components/AdventureEvents/AbilityScoreEvents";
import { LootBag } from "../../components/AdventureEvents/LootEvents";
import Layout from "../../components/Layout";
import { Adventurer, LogItem } from "../../types";

const AdventurersLog = ({ adventurer }: { adventurer: Adventurer }) => (
  <Layout
    address={adventurer.id}
    sidebar={
      <Stack w="full">
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "", md: "center" }}
          spacing={1}
        >
          <Text>Adventurer</Text>
          <Link
            href={`/adventurer/${adventurer.id}`}
            isExternal
            fontWeight="semibold"
            color="#55431C"
            _hover={{ color: "#88764F" }}
          >
            {adventurer.id}
          </Link>
        </Stack>
        <Text>{`Adventure Gold: ${parseFloat(
          formatEther(adventurer.adventureGold)
        ).toFixed(2)}`}</Text>
        <Text>{`Loot (${adventurer.loot.length})`}</Text>
        {adventurer.loot?.map((tokenId) => (
          <Stack key={tokenId} direction="row" align="center">
            <Text>-</Text>
            <LootBag tokenId={parseInt(tokenId)} />
          </Stack>
        ))}
        <Text>{`Ability Scores (${adventurer.abilityScore.length})`}</Text>
        {adventurer.abilityScore?.map((tokenId) => (
          <Stack key={tokenId} direction="row" align="center">
            <Text>-</Text>
            <AbilityScores tokenId={parseInt(tokenId)} />
          </Stack>
        ))}
      </Stack>
    }
  >
    {adventurer.log
      .sort((a: LogItem, b: LogItem) => b.timestamp - a.timestamp)
      .map((logItem, i) => (
        <AdventureEvent key={i} logItem={logItem} />
      ))}
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

  const adventurer = await (
    await fetch(`${host}/api/adventurers/${address}`)
  ).json();

  if (!adventurer) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      adventurer,
    },
  };
};
export default AdventurersLog;
