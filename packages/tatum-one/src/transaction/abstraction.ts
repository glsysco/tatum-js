import { CreateRecord, validateBody, TransferErc20 } from '@tatumio/tatum-core'
import { sendOneStoreDataTransaction, sendOneTransaction, sendOneTransfer20SignedTransaction } from '../'

/**
 * Store any arbitrary data on the blockchain.
 * @param body Body of the transaction.
 * @param provider Optional provider to use for broadcasting signed tx to the blockchain.
 */
export const storeData = async (body: CreateRecord, provider?: string) => {
  await validateBody(body, CreateRecord)
  return await sendOneStoreDataTransaction(body, provider)
}

/**
 * Perform any native asset transaction.
 * @param body Body of the transaction.
 * @param provider Optional provider to use for broadcasting signed tx to the blockchain.
 */
export const sendTransaction = async (body: TransferErc20, provider?: string) => {
  const b = body as TransferErc20
  return b.contractAddress ? sendOneTransfer20SignedTransaction(b, provider) : sendOneTransaction(b, provider)
}
