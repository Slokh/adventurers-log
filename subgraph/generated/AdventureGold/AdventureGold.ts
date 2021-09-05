// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AdventureGold extends ethereum.SmartContract {
  static bind(address: Address): AdventureGold {
    return new AdventureGold("AdventureGold", address);
  }

  adventureGoldPerTokenId(): BigInt {
    let result = super.call(
      "adventureGoldPerTokenId",
      "adventureGoldPerTokenId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_adventureGoldPerTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "adventureGoldPerTokenId",
      "adventureGoldPerTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lootContract(): Address {
    let result = super.call("lootContract", "lootContract():(address)", []);

    return result[0].toAddress();
  }

  try_lootContract(): ethereum.CallResult<Address> {
    let result = super.tryCall("lootContract", "lootContract():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lootContractAddress(): Address {
    let result = super.call(
      "lootContractAddress",
      "lootContractAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_lootContractAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lootContractAddress",
      "lootContractAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  season(): BigInt {
    let result = super.call("season", "season():(uint256)", []);

    return result[0].toBigInt();
  }

  try_season(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("season", "season():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  seasonClaimedByTokenId(param0: BigInt, param1: BigInt): boolean {
    let result = super.call(
      "seasonClaimedByTokenId",
      "seasonClaimedByTokenId(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_seasonClaimedByTokenId(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "seasonClaimedByTokenId",
      "seasonClaimedByTokenId(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenIdEnd(): BigInt {
    let result = super.call("tokenIdEnd", "tokenIdEnd():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenIdEnd(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenIdEnd", "tokenIdEnd():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenIdStart(): BigInt {
    let result = super.call("tokenIdStart", "tokenIdStart():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenIdStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenIdStart", "tokenIdStart():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimAllForOwnerCall extends ethereum.Call {
  get inputs(): ClaimAllForOwnerCall__Inputs {
    return new ClaimAllForOwnerCall__Inputs(this);
  }

  get outputs(): ClaimAllForOwnerCall__Outputs {
    return new ClaimAllForOwnerCall__Outputs(this);
  }
}

export class ClaimAllForOwnerCall__Inputs {
  _call: ClaimAllForOwnerCall;

  constructor(call: ClaimAllForOwnerCall) {
    this._call = call;
  }
}

export class ClaimAllForOwnerCall__Outputs {
  _call: ClaimAllForOwnerCall;

  constructor(call: ClaimAllForOwnerCall) {
    this._call = call;
  }
}

export class ClaimByIdCall extends ethereum.Call {
  get inputs(): ClaimByIdCall__Inputs {
    return new ClaimByIdCall__Inputs(this);
  }

  get outputs(): ClaimByIdCall__Outputs {
    return new ClaimByIdCall__Outputs(this);
  }
}

export class ClaimByIdCall__Inputs {
  _call: ClaimByIdCall;

  constructor(call: ClaimByIdCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimByIdCall__Outputs {
  _call: ClaimByIdCall;

  constructor(call: ClaimByIdCall) {
    this._call = call;
  }
}

export class ClaimRangeForOwnerCall extends ethereum.Call {
  get inputs(): ClaimRangeForOwnerCall__Inputs {
    return new ClaimRangeForOwnerCall__Inputs(this);
  }

  get outputs(): ClaimRangeForOwnerCall__Outputs {
    return new ClaimRangeForOwnerCall__Outputs(this);
  }
}

export class ClaimRangeForOwnerCall__Inputs {
  _call: ClaimRangeForOwnerCall;

  constructor(call: ClaimRangeForOwnerCall) {
    this._call = call;
  }

  get ownerIndexStart(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ownerIndexEnd(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimRangeForOwnerCall__Outputs {
  _call: ClaimRangeForOwnerCall;

  constructor(call: ClaimRangeForOwnerCall) {
    this._call = call;
  }
}

export class DaoMintCall extends ethereum.Call {
  get inputs(): DaoMintCall__Inputs {
    return new DaoMintCall__Inputs(this);
  }

  get outputs(): DaoMintCall__Outputs {
    return new DaoMintCall__Outputs(this);
  }
}

export class DaoMintCall__Inputs {
  _call: DaoMintCall;

  constructor(call: DaoMintCall) {
    this._call = call;
  }

  get amountDisplayValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DaoMintCall__Outputs {
  _call: DaoMintCall;

  constructor(call: DaoMintCall) {
    this._call = call;
  }
}

export class DaoSetAdventureGoldPerTokenIdCall extends ethereum.Call {
  get inputs(): DaoSetAdventureGoldPerTokenIdCall__Inputs {
    return new DaoSetAdventureGoldPerTokenIdCall__Inputs(this);
  }

  get outputs(): DaoSetAdventureGoldPerTokenIdCall__Outputs {
    return new DaoSetAdventureGoldPerTokenIdCall__Outputs(this);
  }
}

export class DaoSetAdventureGoldPerTokenIdCall__Inputs {
  _call: DaoSetAdventureGoldPerTokenIdCall;

  constructor(call: DaoSetAdventureGoldPerTokenIdCall) {
    this._call = call;
  }

  get adventureGoldDisplayValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DaoSetAdventureGoldPerTokenIdCall__Outputs {
  _call: DaoSetAdventureGoldPerTokenIdCall;

  constructor(call: DaoSetAdventureGoldPerTokenIdCall) {
    this._call = call;
  }
}

export class DaoSetLootContractAddressCall extends ethereum.Call {
  get inputs(): DaoSetLootContractAddressCall__Inputs {
    return new DaoSetLootContractAddressCall__Inputs(this);
  }

  get outputs(): DaoSetLootContractAddressCall__Outputs {
    return new DaoSetLootContractAddressCall__Outputs(this);
  }
}

export class DaoSetLootContractAddressCall__Inputs {
  _call: DaoSetLootContractAddressCall;

  constructor(call: DaoSetLootContractAddressCall) {
    this._call = call;
  }

  get lootContractAddress_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DaoSetLootContractAddressCall__Outputs {
  _call: DaoSetLootContractAddressCall;

  constructor(call: DaoSetLootContractAddressCall) {
    this._call = call;
  }
}

export class DaoSetSeasonCall extends ethereum.Call {
  get inputs(): DaoSetSeasonCall__Inputs {
    return new DaoSetSeasonCall__Inputs(this);
  }

  get outputs(): DaoSetSeasonCall__Outputs {
    return new DaoSetSeasonCall__Outputs(this);
  }
}

export class DaoSetSeasonCall__Inputs {
  _call: DaoSetSeasonCall;

  constructor(call: DaoSetSeasonCall) {
    this._call = call;
  }

  get season_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DaoSetSeasonCall__Outputs {
  _call: DaoSetSeasonCall;

  constructor(call: DaoSetSeasonCall) {
    this._call = call;
  }
}

export class DaoSetSeasonAndAdventureGoldPerTokenIDCall extends ethereum.Call {
  get inputs(): DaoSetSeasonAndAdventureGoldPerTokenIDCall__Inputs {
    return new DaoSetSeasonAndAdventureGoldPerTokenIDCall__Inputs(this);
  }

  get outputs(): DaoSetSeasonAndAdventureGoldPerTokenIDCall__Outputs {
    return new DaoSetSeasonAndAdventureGoldPerTokenIDCall__Outputs(this);
  }
}

export class DaoSetSeasonAndAdventureGoldPerTokenIDCall__Inputs {
  _call: DaoSetSeasonAndAdventureGoldPerTokenIDCall;

  constructor(call: DaoSetSeasonAndAdventureGoldPerTokenIDCall) {
    this._call = call;
  }

  get season_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get adventureGoldDisplayValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DaoSetSeasonAndAdventureGoldPerTokenIDCall__Outputs {
  _call: DaoSetSeasonAndAdventureGoldPerTokenIDCall;

  constructor(call: DaoSetSeasonAndAdventureGoldPerTokenIDCall) {
    this._call = call;
  }
}

export class DaoSetTokenIdRangeCall extends ethereum.Call {
  get inputs(): DaoSetTokenIdRangeCall__Inputs {
    return new DaoSetTokenIdRangeCall__Inputs(this);
  }

  get outputs(): DaoSetTokenIdRangeCall__Outputs {
    return new DaoSetTokenIdRangeCall__Outputs(this);
  }
}

export class DaoSetTokenIdRangeCall__Inputs {
  _call: DaoSetTokenIdRangeCall;

  constructor(call: DaoSetTokenIdRangeCall) {
    this._call = call;
  }

  get tokenIdStart_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenIdEnd_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DaoSetTokenIdRangeCall__Outputs {
  _call: DaoSetTokenIdRangeCall;

  constructor(call: DaoSetTokenIdRangeCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}