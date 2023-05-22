import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout'
import Transactions from './Components/Transactions'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element= {<Checkout/>}/>
        <Route path='Transactions' element={<Transactions/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App