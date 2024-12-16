import React from 'react'
import Timesheet from './Components/timesheet'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Invoice from './Components/Invoice'

import './App.css'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Timesheet/>}></Route>
      <Route path='/invoice' element={<Invoice/>}></Route>
     </Routes>
     </BrowserRouter>


      
    </div>
  )
}

export default App
