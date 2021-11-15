import BigNumber from 'bignumber.js'
import { validateBody } from '../connector/tatum'
import { ApproveErc20 } from '../model'

/**
 * Prepare approve ERC20 signed transaction.
 * @param testnet if we are on testnet or not
 * @param body body of the approve operation
 * @param provider optional Web3 provider
 */
export const prepareApproveErc20Abstraction = async (
  getErc20ContractDecimalsFn: (contractAddress: string, provider?: string, tesnet?: boolean) => Promise<any>,
  testnet: boolean,
  body: ApproveErc20,
  provider?: string
) => {
  await validateBody(body, ApproveErc20)
  const amount = new BigNumber(body.amount)
    .multipliedBy(new BigNumber(10).pow(await getErc20ContractDecimalsFn(body.contractAddress, provider, testnet)))
    .toString(16)
  const params = [body.spender.trim(), `0x${amount}`]
  body.amount = '0'
  return { body, params }
}