export type LogItem = {
  id: string;
  timestamp: number;
  tokenAddress: string;
  tokenId: number;
  adventurer: Adventurer;
  interactedWith: Adventurer;
  action: number;
  value: string;
  transactionHash: string;
};

export type Adventurer = {
  id: string;
  adventureGold: string;
  loot: string[];
  abilityScore: string[];
  log: LogItem[];
};
