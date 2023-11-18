import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import About from './pages/About'
import Transfer from './pages/Transfer'
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/transactions" element={<Transactions/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/transfer" element={<Transfer/>}/>

  </Routes>
  </BrowserRouter>
    
  
}

export default App
