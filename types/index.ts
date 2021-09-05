export type LogItem = {
  id: string;
  timestamp: number;
  tokenAddress: string;
  tokenId: string;
  adventurer: Adventurer;
  interactedWith: Adventurer;
  action: number;
  value: string;
};

export type Adventurer = {
  id: string;
};
