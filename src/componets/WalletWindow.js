import React, { useState } from 'react'
import { connectWallet, getBalance } from './tonConnect' // Импорт функций из tonConnect.js

function Wallet() {
  const [address, setAddress] = useState('') // Состояние для адреса кошелька
  const [balance, setBalance] = useState(0) // Состояние для баланса
  const [loading, setLoading] = useState(false) // Состояние для индикатора загрузки

  const handleConnect = async () => {
    try {
      setLoading(true) // Начало загрузки
      const wallet = await connectWallet() // Привязка кошелька
      if (wallet && wallet.wallet && wallet.wallet.account && wallet.wallet.account.address) {
        const address = wallet.wallet.account.address // Получение адреса
        setAddress(address) // Установка адреса в состояние

        const balance = await getBalance(address) // Получение баланса
        setBalance(balance) // Установка баланса в состояние
      } else {
        console.error('Ошибка получения адреса кошелька')
      }
    } catch (error) {
      console.error('Ошибка привязки кошелька:', error)
    } finally {
      setLoading(false) // Окончание загрузки
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.button} onClick={handleConnect} disabled={loading}>
          {loading ? 'Загрузка...' : 'Привязать кошелек'}
        </button>
        <p>Баланс: {balance} TON</p>
      </header>
      <main style={styles.body}>
        <p>Адрес кошелька: {address || 'Кошелек не привязан'}</p>
      </main>
    </div>
  )
}

const styles = {
  container: {
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    marginTop: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

export default Wallet
