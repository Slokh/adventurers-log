import { Transfer as LootTransfer } from "../generated/Loot/Loot";
import { Transfer as AbilityScoreTransfer } from "../generated/AbilityScore/AbilityScore";
import { Transfer as AdventureGoldTransfer } from "../generated/AdventureGold/AdventureGold";
import { Adventurer, LogItem } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

enum Action {
  Buy = 0,
  Sell = 1,
}

function loadAventurer(address: string): Adventurer {
  let adventurer = Adventurer.load(address);
  if (adventurer == null) {
    adventurer = new Adventurer(address);
    adventurer.adventureGold = BigInt.fromI32(0);
    adventurer.abilityScore = new Array<BigInt>();
    adventurer.loot = new Array<BigInt>();
  }
  return adventurer as Adventurer;
}

function createLootLogItem(event: LootTransfer, action: Action): LogItem {
  let id = event.transaction.hash.toHexString();
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let logItemId = id + "-" + action.toString();
  let logItem = LogItem.load(logItemId);
  if (logItem == null) {
    logItem = new LogItem(logItemId);
    logItem.timestamp = event.block.timestamp.toI32();
    logItem.tokenAddress = event.address.toHexString();
    logItem.tokenId = event.params.tokenId;
    logItem.transactionHash = id;
  }

  if (action == Action.Sell) {
    logItem.adventurer = from;
    logItem.interactedWith = to;
    logItem.action = 0;
  } else if (action == Action.Buy) {
    logItem.adventurer = to;
    logItem.interactedWith = from;
    logItem.action = 1;
  }

  return logItem as LogItem;
}

function createAbilityScoreLogItem(
  event: AbilityScoreTransfer,
  action: Action
): LogItem {
  let id = event.transaction.hash.toHexString();
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let logItemId = id + "-" + action.toString();
  let logItem = LogItem.load(logItemId);
  if (logItem == null) {
    logItem = new LogItem(logItemId);
    logItem.timestamp = event.block.timestamp.toI32();
    logItem.tokenAddress = event.address.toHexString();
    logItem.tokenId = event.params.tokenId;
    logItem.transactionHash = id;
  }

  if (action == Action.Sell) {
    logItem.adventurer = from;
    logItem.interactedWith = to;
    logItem.action = 0;
  } else if (action == Action.Buy) {
    logItem.adventurer = to;
    logItem.interactedWith = from;
    logItem.action = 1;
  }

  return logItem as LogItem;
}

function createAdventureGoldLogItem(
  event: AdventureGoldTransfer,
  action: Action
): LogItem {
  let id = event.transaction.hash.toHexString();
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let logItemId = id + "-" + action.toString();
  let logItem = LogItem.load(logItemId);
  if (logItem == null) {
    logItem = new LogItem(logItemId);
    logItem.timestamp = event.block.timestamp.toI32();
    logItem.tokenAddress = event.address.toHexString();
    logItem.value = event.params.value;
    logItem.transactionHash = id;
  }

  if (action == Action.Sell) {
    logItem.adventurer = from;
    logItem.interactedWith = to;
    logItem.action = 0;
  } else if (action == Action.Buy) {
    logItem.adventurer = to;
    logItem.interactedWith = from;
    logItem.action = 1;
  }

  return logItem as LogItem;
}

export function handleLootTransfer(event: LootTransfer): void {
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let fromAdventurer = loadAventurer(from);
  let toAdventurer = loadAventurer(to);
  let fromLogItem = createLootLogItem(event, Action.Sell);
  let toLogItem = createLootLogItem(event, Action.Buy);

  let fromLoot = fromAdventurer.loot;
  let newFromLoot = new Array<BigInt>();
  for (let i = 0; i < fromLoot.length; i++) {
    if (!fromLoot[i].equals(event.params.tokenId)) {
      newFromLoot.push(fromLoot[i]);
    }
  }
  fromAdventurer.loot = newFromLoot;

  let toLoot = toAdventurer.loot;
  toLoot.push(event.params.tokenId);
  toAdventurer.loot = toLoot;

  fromAdventurer.save();
  toAdventurer.save();
  fromLogItem.save();
  toLogItem.save();
}

export function handleAbilityScoreTransfer(event: AbilityScoreTransfer): void {
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let fromAdventurer = loadAventurer(from);
  let toAdventurer = loadAventurer(to);
  let fromLogItem = createAbilityScoreLogItem(event, Action.Sell);
  let toLogItem = createAbilityScoreLogItem(event, Action.Buy);

  let fromAbilityScore = fromAdventurer.abilityScore;
  let newFromAbilityScore = new Array<BigInt>();
  for (let i = 0; i < fromAbilityScore.length; i++) {
    if (!fromAbilityScore[i].equals(event.params.tokenId)) {
      newFromAbilityScore.push(fromAbilityScore[i]);
    }
  }
  fromAdventurer.abilityScore = newFromAbilityScore;

  let toAbilityScore = toAdventurer.abilityScore;
  toAbilityScore.push(event.params.tokenId);
  toAdventurer.abilityScore = toAbilityScore;

  fromAdventurer.save();
  toAdventurer.save();
  fromLogItem.save();
  toLogItem.save();
}

export function handleAdventureGoldTransfer(
  event: AdventureGoldTransfer
): void {
  let from = event.params.from.toHexString();
  let to = event.params.to.toHexString();

  let fromAdventurer = loadAventurer(from);
  let toAdventurer = loadAventurer(to);
  let fromLogItem = createAdventureGoldLogItem(event, Action.Sell);
  let toLogItem = createAdventureGoldLogItem(event, Action.Buy);

  fromAdventurer.adventureGold = fromAdventurer.adventureGold.minus(
    event.params.value
  );
  toAdventurer.adventureGold = toAdventurer.adventureGold.plus(
    event.params.value
  );

  fromAdventurer.save();
  toAdventurer.save();
  fromLogItem.save();
  toLogItem.save();
}
