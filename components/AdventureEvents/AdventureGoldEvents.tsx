import { Stack, Text } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import React from "react";
import {
  Adventurer,
  FromIcon,
  GenericEvent,
  NewIcon,
  NULL_ADDRESS,
  ToIcon,
  UNISWAP_ADVENTURE_GOLD,
} from ".";
import { LogItem } from "../../types";

export const AdventureGoldEvent = ({ logItem }: { logItem: LogItem }) => {
  const isMinted = logItem.interactedWith.id === NULL_ADDRESS;
  const icon = isMinted ? NewIcon : logItem.action === 0 ? FromIcon : ToIcon;
  const prefix = isMinted ? "Minted" : logItem.action === 0 ? "Sold" : "Bought";
  const suffix = logItem.action === 0 ? "to" : "from";
  const amount = parseFloat(formatEther(logItem.value)).toFixed(2);

  return (
    <GenericEvent
      logItem={logItem}
      icon={icon}
      event={
        <Stack direction="row" align="center" spacing={1}>
          <Text>{prefix}</Text>
          <Text>{amount}</Text>
          <Text>adventure gold</Text>
          {!isMinted && logItem.interactedWith.id === UNISWAP_ADVENTURE_GOLD && (
            <>
              <Text>on</Text>
              <Adventurer address={logItem.interactedWith.id} label="Uniswap" />
            </>
          )}
          {!isMinted && logItem.interactedWith.id !== UNISWAP_ADVENTURE_GOLD && (
            <>
              <Text>{suffix}</Text>
              <Adventurer address={logItem.interactedWith.id} />
            </>
          )}
        </Stack>
      }
    />
  );
};
