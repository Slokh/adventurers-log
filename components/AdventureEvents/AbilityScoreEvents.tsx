import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Adventurer,
  FromIcon,
  GenericEvent,
  GenericPopover,
  NewIcon,
  NULL_ADDRESS,
  ToIcon,
} from ".";
import { LogItem } from "../../types";
import abilityScore from "../../data/abilityScore.json";

export const AbilityScores = ({ tokenId }: { tokenId: number }) => (
  <GenericPopover label={`ability score #${tokenId}`}>
    <Stack>
      {Object.entries(abilityScore[tokenId - 1][tokenId]).map(
        ([key, value], i) => (
          <Flex direction="column" key={i} color="#3C2A03">
            <Text textTransform="uppercase" fontSize="sm">
              {key}
            </Text>
            {/* @ts-ignore */}
            <Text fontWeight="semibold">{value}</Text>
          </Flex>
        )
      )}
    </Stack>
  </GenericPopover>
);

export const AbilityScoreEvent = ({ logItem }: { logItem: LogItem }) => {
  const isMinted = logItem.interactedWith.id === NULL_ADDRESS;
  const icon = isMinted ? NewIcon : logItem.action === 0 ? FromIcon : ToIcon;
  const prefix = isMinted ? "Minted" : logItem.action === 0 ? "Sold" : "Bought";
  const suffix = logItem.action === 0 ? "to" : "from";

  return (
    <GenericEvent
      logItem={logItem}
      icon={icon}
      event={
        <Stack direction="row" align="center" spacing={1}>
          <Text>{prefix}</Text>
          <AbilityScores tokenId={logItem.tokenId} />
          {!isMinted && (
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
