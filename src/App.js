import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wallet from './componets/WalletWindow'
import Transaction from './componets/TransactionWindow'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Wallet />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
