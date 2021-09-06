import { isAddress } from "ethers/lib/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { LogItem } from "../../../types";

const fetchAdventurer = async (address: string): Promise<LogItem[]> => {
  if (!isAddress(address)) {
    return [];
  }

  const response = await fetch(
    "https://api.thegraph.com/subgraphs/name/slokh/adventurers-log",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
            adventurer(id: "${address.toLowerCase()}") {
              id
              loot
              abilityScore
              adventureGold
              log {
                id
                timestamp
                tokenAddress
                tokenId
                adventurer {
                    id
                }
                interactedWith {
                    id
                }
                action
                value
                transactionHash
              }
            }
          }`,
      }),
    }
  );

  if (response.status !== 200) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetchAdventurer(address);
  }

  const { data } = await response.json();

  return data?.adventurer;
};

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { address } = query;

  const adventurer = await fetchAdventurer(address as string);

  res.status(200).json(adventurer);
};

export default handler;
