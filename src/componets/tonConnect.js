import { TonConnect } from '@tonconnect/sdk'

const tonConnect = new TonConnect({
  manifestUrl: 'https://walletApp.com/tonconnect-manifest.json', // Замените на реальный URL с вашим manifest.json
})

export const connectWallet = async () => {
  try {
    const walletConnection = await tonConnect.connect()
    return walletConnection
  } catch (error) {
    console.error('Ошибка при подключении кошелька:', error)
  }
}

export const getBalance = async (address) => {
  try {
    const balance = await tonConnect.provider.getBalance(address)
    return balance
  } catch (error) {
    console.error('Ошибка при получении баланса:', error)
  }
}

export const simulateTransaction = async (recipient, amount) => {
  try {
    console.log(`Транзакция на сумму ${amount} TON на адрес ${recipient}`)
    alert('Транзакция успешно обработана!')
  } catch (error) {
    console.error('Ошибка обработки транзакции:', error)
  }
}
