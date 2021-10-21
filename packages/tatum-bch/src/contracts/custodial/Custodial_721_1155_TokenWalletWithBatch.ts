export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'spender',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'approve',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address[]',
                'name': 'tokenAddress',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'contractType',
                'type': 'uint256[]'
            },
            {
                'internalType': 'address[]',
                'name': 'recipient',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'amount',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'tokenId',
                'type': 'uint256[]'
            }
        ],
        'name': 'transferBatch',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
]
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b610e0a8061007d6000396000f3fe60806040526004361061008a5760003560e01c8063bc197c8111610059578063bc197c8114610118578063f23a6e6114610138578063f2881e2114610158578063f2fde38b1461016b578063f7e290a41461018b57610091565b8063150b7a0214610096578063715018a6146100cc5780638da5cb5b146100e3578063966f197c1461010557610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100b66100b13660046109fa565b6101ab565b6040516100c39190610c82565b60405180910390f35b3480156100d857600080fd5b506100e16101bb565b005b3480156100ef57600080fd5b506100f861024d565b6040516100c39190610bcf565b6100e1610113366004610b10565b61025c565b34801561012457600080fd5b506100b6610133366004610954565b610599565b34801561014457600080fd5b506100b6610153366004610a60565b6105aa565b6100e1610166366004610ac3565b6105bb565b34801561017757600080fd5b506100e1610186366004610933565b6106ac565b34801561019757600080fd5b506100e16101a6366004610ac3565b61076c565b630a85bd0160e11b949350505050565b6101c36107db565b6001600160a01b03166101d461024d565b6001600160a01b0316146102035760405162461bcd60e51b81526004016101fa90610d14565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b835185511461026a57600080fd5b835183511461027857600080fd5b815183511461028657600080fd5b805182511461029457600080fd5b60005b8551811015610591578481815181106102c057634e487b7160e01b600052603260045260246000fd5b6020026020010151600114156103ac578581815181106102f057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663b88d4fde3086848151811061032757634e487b7160e01b600052603260045260246000fd5b602002602001015185858151811061034f57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b815260040161037593929190610be3565b600060405180830381600087803b15801561038f57600080fd5b505af11580156103a3573d6000803e3d6000fd5b5050505061057f565b8481815181106103cc57634e487b7160e01b600052603260045260246000fd5b6020026020010151600214156104aa578581815181106103fc57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663f242432a3086848151811061043357634e487b7160e01b600052603260045260246000fd5b602002602001015185858151811061045b57634e487b7160e01b600052603260045260246000fd5b602002602001015187868151811061048357634e487b7160e01b600052603260045260246000fd5b60200260200101516040518563ffffffff1660e01b81526004016103759493929190610c16565b8481815181106104ca57634e487b7160e01b600052603260045260246000fd5b602002602001015160031415610567578381815181106104fa57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166108fc84838151811061052e57634e487b7160e01b600052603260045260246000fd5b60200260200101519081150290604051600060405180830381858888f19350505050158015610561573d6000803e3d6000fd5b5061057f565b60405162461bcd60e51b81526004016101fa90610c97565b8061058981610d97565b915050610297565b505050505050565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b836001141561062b57604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde906105f490309087908690600401610be3565b600060405180830381600087803b15801561060e57600080fd5b505af1158015610622573d6000803e3d6000fd5b505050506106a5565b836002141561066657604051637921219560e11b81526001600160a01b0386169063f242432a906105f4903090879086908890600401610c16565b8360031415610567576040516001600160a01b0384169083156108fc029084906000818181858888f19350505050158015610591573d6000803e3d6000fd5b5050505050565b6106b46107db565b6001600160a01b03166106c561024d565b6001600160a01b0316146106eb5760405162461bcd60e51b81526004016101fa90610d14565b6001600160a01b0381166107115760405162461bcd60e51b81526004016101fa90610cce565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b83600114156107a35760405163095ea7b360e01b81526001600160a01b0386169063095ea7b3906105f49086908590600401610c69565b83600214156105675760405163a22cb46560e01b81526001600160a01b0386169063a22cb465906105f4908690600190600401610c4e565b3390565b80356001600160a01b03811681146107f657600080fd5b919050565b600082601f83011261080b578081fd5b8135602061082061081b83610d73565b610d49565b828152818101908583018385028701840188101561083c578586fd5b855b858110156108615761084f826107df565b8452928401929084019060010161083e565b5090979650505050505050565b600082601f83011261087e578081fd5b8135602061088e61081b83610d73565b82815281810190858301838502870184018810156108aa578586fd5b855b85811015610861578135845292840192908401906001016108ac565b600082601f8301126108d8578081fd5b813567ffffffffffffffff8111156108f2576108f2610dbe565b610905601f8201601f1916602001610d49565b818152846020838601011115610919578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610944578081fd5b61094d826107df565b9392505050565b600080600080600060a0868803121561096b578081fd5b610974866107df565b9450610982602087016107df565b9350604086013567ffffffffffffffff8082111561099e578283fd5b6109aa89838a0161086e565b945060608801359150808211156109bf578283fd5b6109cb89838a0161086e565b935060808801359150808211156109e0578283fd5b506109ed888289016108c8565b9150509295509295909350565b60008060008060808587031215610a0f578384fd5b610a18856107df565b9350610a26602086016107df565b925060408501359150606085013567ffffffffffffffff811115610a48578182fd5b610a54878288016108c8565b91505092959194509250565b600080600080600060a08688031215610a77578081fd5b610a80866107df565b9450610a8e602087016107df565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ab7578182fd5b6109ed888289016108c8565b600080600080600060a08688031215610ada578081fd5b610ae3866107df565b945060208601359350610af8604087016107df565b94979396509394606081013594506080013592915050565b600080600080600060a08688031215610b27578081fd5b853567ffffffffffffffff80821115610b3e578283fd5b610b4a89838a016107fb565b96506020880135915080821115610b5f578283fd5b610b6b89838a0161086e565b95506040880135915080821115610b80578283fd5b610b8c89838a016107fb565b94506060880135915080821115610ba1578283fd5b610bad89838a0161086e565b93506080880135915080821115610bc2578283fd5b506109ed8882890161086e565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260806060820181905260009082015260a00190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff81118282101715610d6b57610d6b610dbe565b604052919050565b600067ffffffffffffffff821115610d8d57610d8d610dbe565b5060209081020190565b6000600019821415610db757634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212207a3e356c77139c553713fb1afd06faaccb2a1c62b0f23ae51b5ab4d2abf34ab364736f6c63430008000033';
