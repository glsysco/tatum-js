import { post, SignatureId, TransferOffchainKMS } from "@tatumio/tatum-core";

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/BscOrBepTransfer" target="_blank">Tatum API documentation</a>
 */
export const offchainTransferBscKMS = async (body: TransferOffchainKMS): Promise<SignatureId> =>
    post(`/v3/offchain/bsc/transfer`, body, TransferOffchainKMS);