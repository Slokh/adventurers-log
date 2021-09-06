import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatRelative } from "date-fns";
import React from "react";
import { LogItem } from "../../types";
import { AbilityScoreEvent } from "./AbilityScoreEvents";
import { AdventureGoldEvent } from "./AdventureGoldEvents";
import { LootEvent } from "./LootEvents";

export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
export const LOOT = "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7";
export const ADVENTURE_GOLD = "0x32353a6c91143bfd6c7d363b546e62a9a2489a20";
export const ABILITY_SCORE = "0x42a87e04f87a038774fb39c0a61681e7e859937b";
export const UNISWAP_ADVENTURE_GOLD =
  "0x5d752f322befb038991579972e912b02f61a3dda";

export const NewIcon = <Icon color="#554E3D" as={AddIcon} boxSize={3} />;
export const ToIcon = <Icon color="green.500" as={ArrowBackIcon} boxSize={4} />;
export const FromIcon = (
  <Icon color="red.500" as={ArrowForwardIcon} boxSize={4} />
);

export const Adventurer = ({
  address,
  label,
}: {
  address: string;
  label?: string;
}) => (
  <Link
    href={`/adventurer/${address}`}
    fontWeight="semibold"
    color="#55431C"
    _hover={{ color: "#88764F" }}
  >
    {label || `${address.slice(0, 6)}...${address.slice(address.length - 6)}`}
  </Link>
);

export const GenericPopover = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Popover trigger="hover" placement="top">
    <PopoverTrigger>
      <Text
        cursor="pointer"
        fontWeight="semibold"
        color="#55431C"
        textDecoration="underline"
        textUnderlineOffset="2px"
        textDecorationStyle="dotted"
      >
        {label}
      </Text>
    </PopoverTrigger>
    <Portal>
      <PopoverContent>
        <PopoverBody
          bgColor="#D4C29B"
          borderWidth={4}
          borderColor="#554E3D"
          boxShadow="0 0 10px #554E3D"
          fontFamily="EB Garamond"
        >
          {children}
        </PopoverBody>
      </PopoverContent>
    </Portal>
  </Popover>
);

export const GenericEvent = ({
  logItem,
  icon,
  event,
}: {
  logItem: LogItem;
  icon: React.ReactNode;
  event: React.ReactNode;
}) => (
  <Flex align="center" fontSize="lg" p={2} color="#3C2A03">
    <Link
      minW={52}
      fontSize="md"
      href={`https://etherscan.io/tx/${logItem.transactionHash}`}
      isExternal
      _hover={{ color: "#88764F" }}
    >
      {formatRelative(logItem.timestamp * 1000, new Date())}
    </Link>
    <Stack w="full" direction="row" align="center">
      <Flex w={6} justify="center">
        {icon}
      </Flex>
      {event}
    </Stack>
  </Flex>
);

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
