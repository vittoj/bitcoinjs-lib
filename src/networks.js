// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    scriptHash2: 0x05, // old '3' prefix. available for backward compatibility.
    wif: 0xb0
  },
  dash: {
    messagePrefix: '\x19Dash Signed Message:\n',
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 5,
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc
  },
  qtum: {
    messagePrefix: '\x19Qtum Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    bip44: 2301,
    pubKeyHash: 0x3A,
    scriptHash: 0x32,
    wif: 0x80
  },
  zcash: {
    messagePrefix: '\x19Zcash Signed Message:\n',
    verLen: 2,
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 133,
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80
  }
}
