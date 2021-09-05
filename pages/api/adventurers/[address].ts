import { isAddress } from "ethers/lib/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { LogItem } from "../../../types";

const fetchAdventurersLog = async (address: string): Promise<LogItem[]> => {
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
              }
            }
          }`,
      }),
    }
  );

  if (response.status !== 200) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetchAdventurersLog(address);
  }

  const { data } = await response.json();

  return (
    data?.adventurer?.log?.sort(
      (a: LogItem, b: LogItem) => b.timestamp - a.timestamp
    ) || []
  );
};

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { address } = query;

  const logs = await fetchAdventurersLog(address as string);

  res.status(200).json({ logs });
};

export default handler;
