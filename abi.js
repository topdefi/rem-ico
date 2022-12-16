var abi = {
    Token: [
        { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
                { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "account", "type": "address" },
                { "indexed": false, "internalType": "bool", "name": "isExcluded", "type": "bool" }
            ],
            "name": "ExcludedFromTradeLimit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "pair", "type": "address" },
                { "indexed": true, "internalType": "bool", "name": "value", "type": "bool" }
            ],
            "name": "SetAutomatedMarketMakerPair",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
                { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
            ],
            "name": "Transfer",
            "type": "event"
        },
        { "inputs": [], "name": "MaxTradeLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_isBot", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_isExcludedWallet", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_markerPairs", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "_owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "_pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "_router", "outputs": [{ "internalType": "contract IDEXRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "addBotToList", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "owner", "type": "address" },
                { "internalType": "address", "name": "spender", "type": "address" }
            ],
            "name": "allowance",
            "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
            "stateMutability": "view",
            "type": "function"
        },
        { "inputs": [], "name": "antiBotBuyCoolDown", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "antiBotSellCoolDown", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "spender", "type": "address" },
                { "internalType": "uint256", "name": "amount", "type": "uint256" }
            ],
            "name": "approve",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automatedMarketMakerPairs", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "spender", "type": "address" },
                { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }
            ],
            "name": "decreaseAllowance",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [], "name": "enableTrading", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "account", "type": "address" },
                { "internalType": "bool", "name": "excluded", "type": "bool" }
            ],
            "name": "excludedFromTradeLimit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
            "name": "getIsExcludedFromTradeLimit",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "spender", "type": "address" },
                { "internalType": "uint256", "name": "addedValue", "type": "uint256" }
            ],
            "name": "increaseAllowance",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [], "name": "maxWalletBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "removeBotFromList", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "_antiBotBuyCoolDown", "type": "uint256" }], "name": "setAntiBotBuyCoolDown", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "_antiBotSellCoolDown", "type": "uint256" }], "name": "setAntiBotSellCoolDown", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "pair", "type": "address" },
                { "internalType": "bool", "name": "value", "type": "bool" }
            ],
            "name": "setAutomatedMarketMakerPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [{ "internalType": "uint256", "name": "_maxTradeLimit", "type": "uint256" }], "name": "setMaxTradeLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "newMaxWalletBalance", "type": "uint256" }], "name": "setMaxWalletBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "tradingIsEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "to", "type": "address" },
                { "internalType": "uint256", "name": "amount", "type": "uint256" }
            ],
            "name": "transfer",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "from", "type": "address" },
                { "internalType": "address", "name": "to", "type": "address" },
                { "internalType": "uint256", "name": "amount", "type": "uint256" }
            ],
            "name": "transferFrom",
            "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawStuckBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "withdrawStuckTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
    ],
    PreSale: [
        { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
        { "anonymous": false, "inputs": [], "name": "Finalized", "type": "event" },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true, "internalType": "address", "name": "purchaser", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address" },
                { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" },
                { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
            ],
            "name": "TokenPurchase",
            "type": "event"
        },
        { "inputs": [], "name": "TokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "_owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "beneficiary", "type": "address" }], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" },
        { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "contactInformation", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "finalize", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "hasEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "isFinalized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "maxInvestment", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "minInvestment", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "string", "name": "info", "type": "string" }], "name": "setContactInformation", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address payable", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "uint256", "name": "_rate", "type": "uint256" },
                { "internalType": "uint256", "name": "_minInvestment", "type": "uint256" },
                { "internalType": "uint256", "name": "_maxInvestment", "type": "uint256" },
                { "internalType": "uint256", "name": "_cap", "type": "uint256" }
            ],
            "name": "updateTokenContribution",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        { "inputs": [], "name": "wallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "weiRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address payable", "name": "beneficiary", "type": "address" }], "name": "withdrawCrypto", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "beneficiary", "type": "address" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "stateMutability": "payable", "type": "receive" }
    ]       
}