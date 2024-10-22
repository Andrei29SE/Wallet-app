import React, { useState } from 'react'
import { simulateTransaction } from './tonConnect'
import { Link } from 'react-router-dom'

function Transaction() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [balance, setBalance] = useState(100) // Заглушка для баланса, реальный баланс может быть получен из TON Connect.

  const handleTransaction = () => {
    if (amount && recipient) {
      simulateTransaction(recipient, amount)
    } else {
      alert('Пожалуйста, введите данные для транзакции')
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link to='/'>
          <button style={styles.button}>Назад</button>
        </Link>
        <p>Баланс: {balance} TON</p>
      </header>
      <main style={styles.body}>
        <input
          style={styles.input}
          type='text'
          placeholder='Введите количество TON'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          style={styles.input}
          type='text'
          placeholder='Адрес получателя'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <button style={styles.button} onClick={handleTransaction}>
          Отправить
        </button>
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
  input: {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
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

export default Transaction
