require('dotenv').config()
const { Hop,Chain } = require('@hop-protocol/sdk')
const { Wallet, providers } = require('ethers')

const privateKey = process.env.PRIVATE_KEY
console.log(privateKey)
const provider = new providers.getDefaultProvider('mainnet')
const signer = new Wallet(privateKey, provider)

const hop = new Hop('mainnet', signer)
console.log(hop.version)

const bridge = hop.connect(signer).bridge('USDC')

async function execute () {

    const tx = await bridge.pay(10000)
    console.log(tx)
  }
  
  execute().then(() => {
  }).catch(err => {
    console.log('err', err)
  }).finally(_ => {
    process.exit(0)
  })