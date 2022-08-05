import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  SetClaimWhitelistEvent,
  SetCostEvent,
  SetPausedEvent,
  SetUriMerklerootEvent,
  SetUriPrefixEvent,
  Transfer
} from "../generated/NFT/NFT"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetClaimWhitelistEventEvent(
  _addr: Address,
  _amount: BigInt
): SetClaimWhitelistEvent {
  let setClaimWhitelistEventEvent = changetype<SetClaimWhitelistEvent>(
    newMockEvent()
  )

  setClaimWhitelistEventEvent.parameters = new Array()

  setClaimWhitelistEventEvent.parameters.push(
    new ethereum.EventParam("_addr", ethereum.Value.fromAddress(_addr))
  )
  setClaimWhitelistEventEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return setClaimWhitelistEventEvent
}

export function createSetCostEventEvent(_newCost: BigInt): SetCostEvent {
  let setCostEventEvent = changetype<SetCostEvent>(newMockEvent())

  setCostEventEvent.parameters = new Array()

  setCostEventEvent.parameters.push(
    new ethereum.EventParam(
      "_newCost",
      ethereum.Value.fromUnsignedBigInt(_newCost)
    )
  )

  return setCostEventEvent
}

export function createSetPausedEventEvent(_state: boolean): SetPausedEvent {
  let setPausedEventEvent = changetype<SetPausedEvent>(newMockEvent())

  setPausedEventEvent.parameters = new Array()

  setPausedEventEvent.parameters.push(
    new ethereum.EventParam("_state", ethereum.Value.fromBoolean(_state))
  )

  return setPausedEventEvent
}

export function createSetUriMerklerootEventEvent(
  _merkleroot: Bytes
): SetUriMerklerootEvent {
  let setUriMerklerootEventEvent = changetype<SetUriMerklerootEvent>(
    newMockEvent()
  )

  setUriMerklerootEventEvent.parameters = new Array()

  setUriMerklerootEventEvent.parameters.push(
    new ethereum.EventParam(
      "_merkleroot",
      ethereum.Value.fromFixedBytes(_merkleroot)
    )
  )

  return setUriMerklerootEventEvent
}

export function createSetUriPrefixEventEvent(
  _uriPrefix: string
): SetUriPrefixEvent {
  let setUriPrefixEventEvent = changetype<SetUriPrefixEvent>(newMockEvent())

  setUriPrefixEventEvent.parameters = new Array()

  setUriPrefixEventEvent.parameters.push(
    new ethereum.EventParam("_uriPrefix", ethereum.Value.fromString(_uriPrefix))
  )

  return setUriPrefixEventEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
