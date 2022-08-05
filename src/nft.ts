import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFT,
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

import { TransferNFT } from "../generated/schema";

export function handleApproval(event: Approval): void {
  
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetClaimWhitelistEvent(
  event: SetClaimWhitelistEvent
): void {}

export function handleSetCostEvent(event: SetCostEvent): void {}

export function handleSetPausedEvent(event: SetPausedEvent): void {}

export function handleSetUriMerklerootEvent(
  event: SetUriMerklerootEvent
): void {}

export function handleSetUriPrefixEvent(event: SetUriPrefixEvent): void {}

export function handleTransfer(event: Transfer): void {
  let transferNFT = TransferNFT.load(event.params.from.toHex())
  if (transferNFT == null) {
      transferNFT = new TransferNFT(event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toHex())
      transferNFT.from = event.params.from
      transferNFT.to = event.params.to
      transferNFT.contract = event.transaction.to
      transferNFT.timestamp = event.block.timestamp
      transferNFT.tokenId = event.params.tokenId
      transferNFT.save()
  }
}
