import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrivacyPolicy from './components/Privacypolicy/Privacypolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<PrivacyPolicy />
    </div>
  )
}

export default App
