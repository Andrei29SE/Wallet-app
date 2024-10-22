import { TonConnectUIProvider } from '@tonconnect/ui-react'
import './App.css'

function App() {
  return (
    <TonConnectUIProvider manifestUrl='https:////walletApp.com/tonconnect-manifest.json'>
      <div className='App'></div>
    </TonConnectUIProvider>
  )
}

export default App
