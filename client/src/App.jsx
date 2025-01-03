import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrivacyPolicy from './components/Privacypolicy/Privacypolicy'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
<PrivacyPolicy />
<Footer />
    </div>
  )
}

export default App
