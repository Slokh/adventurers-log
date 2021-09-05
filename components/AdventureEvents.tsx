import { Flex, Text, Stack, Icon, Link } from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { formatRelative } from "date-fns";
import React from "react";
import { LogItem } from "../types";
import { formatEther } from "@ethersproject/units";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const LOOT = "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7";
const ADVENTURE_GOLD = "0x32353a6c91143bfd6c7d363b546e62a9a2489a20";
const ABILITY_SCORE = "0x42a87e04f87a038774fb39c0a61681e7e859937b";

const Adventurer = ({ address }: { address: string }) => (
  <Link href={`/adventurer/${address}`}>{address}</Link>
);

const NewIcon = <Icon color="#554E3D" as={AddIcon} boxSize={3} />;
const ToIcon = <Icon color="green.500" as={ArrowBackIcon} boxSize={3} />;
const FromIcon = <Icon color="red.500" as={ArrowForwardIcon} boxSize={3} />;

const GenericEvent = ({
  timestamp,
  icon,
  event,
}: {
  timestamp: number;
  icon: React.ReactNode;
  event: React.ReactNode;
}) => (
  <Flex align="center" fontSize="lg" p={2}>
    <Text minW={52} fontSize="md" color="#554E3D" fontWeight="semibold">
      {formatRelative(timestamp * 1000, new Date())}
    </Text>
    <Stack w="full" direction="row" align="center">
      {icon}
      {event}
    </Stack>
  </Flex>
);

const LootEvent = ({ logItem }: { logItem: LogItem }) => {
  if (logItem.interactedWith.id === NULL_ADDRESS) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={NewIcon}
        event={<Text>{`Spawned bag #${logItem.tokenId}`}</Text>}
      />
    );
  }

  if (logItem.action === 0) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={FromIcon}
        event={
          <Stack direction="row" align="center" spacing={1}>
            <Text>{`Sold bag #${logItem.tokenId} to `}</Text>
            <Adventurer address={logItem.interactedWith.id} />
          </Stack>
        }
      />
    );
  }
  return (
    <GenericEvent
      timestamp={logItem.timestamp}
      icon={ToIcon}
      event={
        <Stack direction="row" align="center" spacing={1}>
          <Text>{`Purchased bag #${logItem.tokenId} from `}</Text>
          <Adventurer address={logItem.interactedWith.id} />
        </Stack>
      }
    />
  );
};

const AdventureGoldEvent = ({ logItem }: { logItem: LogItem }) => {
  if (logItem.interactedWith.id === NULL_ADDRESS) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={NewIcon}
        event={
          <Text>{`Spawned ${parseFloat(formatEther(logItem.value)).toFixed(
            2
          )} adventure gold`}</Text>
        }
      />
    );
  }

  if (logItem.action === 0) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={FromIcon}
        event={
          <Stack direction="row" align="center" spacing={1}>
            <Text>{`Sent ${parseFloat(formatEther(logItem.value)).toFixed(
              2
            )} adventure gold to`}</Text>
            <Adventurer address={logItem.interactedWith.id} />
          </Stack>
        }
      />
    );
  }
  return (
    <GenericEvent
      timestamp={logItem.timestamp}
      icon={ToIcon}
      event={
        <Stack direction="row" align="center" spacing={1}>
          <Text>{`Received ${parseFloat(formatEther(logItem.value)).toFixed(
            2
          )} adventure gold from`}</Text>
          <Adventurer address={logItem.interactedWith.id} />
        </Stack>
      }
    />
  );
};

const AbilityScoreEvent = ({ logItem }: { logItem: LogItem }) => {
  if (logItem.interactedWith.id === NULL_ADDRESS) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={NewIcon}
        event={<Text>{`Spawned score #${logItem.tokenId}`}</Text>}
      />
    );
  }

  if (logItem.action === 0) {
    return (
      <GenericEvent
        timestamp={logItem.timestamp}
        icon={FromIcon}
        event={
          <Stack direction="row" align="center" spacing={1}>
            <Text>{`Sold score #${logItem.tokenId} to `}</Text>
            <Adventurer address={logItem.interactedWith.id} />
          </Stack>
        }
      />
    );
  }
  return (
    <GenericEvent
      timestamp={logItem.timestamp}
      icon={ToIcon}
      event={
        <Stack direction="row" align="center" spacing={1}>
          <Text>{`Purchased score #${logItem.tokenId} from `}</Text>
          <Adventurer address={logItem.interactedWith.id} />
        </Stack>
      }
    />
  );
};

export const AdventureEvent = ({ logItem }: { logItem: LogItem }) => {
  switch (logItem.tokenAddress) {
    case LOOT:
      return <LootEvent logItem={logItem} />;
    case ADVENTURE_GOLD:
      return <AdventureGoldEvent logItem={logItem} />;
    case ABILITY_SCORE:
      return <AbilityScoreEvent logItem={logItem} />;
    default:
      return <></>;
  }
};
