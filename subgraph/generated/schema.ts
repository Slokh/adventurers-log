// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LogItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogItem", id.toString(), this);
  }

  static load(id: string): LogItem | null {
    return store.get("LogItem", id) as LogItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get tokenAddress(): string {
    let value = this.get("tokenAddress");
    return value.toString();
  }

  set tokenAddress(value: string) {
    this.set("tokenAddress", Value.fromString(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (value === null) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(value as BigInt));
    }
  }

  get adventurer(): string {
    let value = this.get("adventurer");
    return value.toString();
  }

  set adventurer(value: string) {
    this.set("adventurer", Value.fromString(value));
  }

  get interactedWith(): string {
    let value = this.get("interactedWith");
    return value.toString();
  }

  set interactedWith(value: string) {
    this.set("interactedWith", Value.fromString(value));
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }

  get action(): i32 {
    let value = this.get("action");
    return value.toI32();
  }

  set action(value: i32) {
    this.set("action", Value.fromI32(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }
}

export class Adventurer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Adventurer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Adventurer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Adventurer", id.toString(), this);
  }

  static load(id: string): Adventurer | null {
    return store.get("Adventurer", id) as Adventurer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get adventureGold(): BigInt {
    let value = this.get("adventureGold");
    return value.toBigInt();
  }

  set adventureGold(value: BigInt) {
    this.set("adventureGold", Value.fromBigInt(value));
  }

  get loot(): Array<BigInt> {
    let value = this.get("loot");
    return value.toBigIntArray();
  }

  set loot(value: Array<BigInt>) {
    this.set("loot", Value.fromBigIntArray(value));
  }

  get abilityScore(): Array<BigInt> {
    let value = this.get("abilityScore");
    return value.toBigIntArray();
  }

  set abilityScore(value: Array<BigInt>) {
    this.set("abilityScore", Value.fromBigIntArray(value));
  }

  get log(): Array<string> {
    let value = this.get("log");
    return value.toStringArray();
  }

  set log(value: Array<string>) {
    this.set("log", Value.fromStringArray(value));
  }
}
