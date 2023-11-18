import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CustomerPage from './pages/CustomerPage'
import About from './pages/About'
import Transfer from './pages/Transfer'
import Transaction from './pages/Transaction'
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/customer" element={<CustomerPage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/transfer" element={<Transfer/>}/>
    <Route path="/transaction" element={<Transaction/>}/>
  </Routes>
  </BrowserRouter>
    
  
}

export default App
