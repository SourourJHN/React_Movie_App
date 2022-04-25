import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Description from './component/Description';
import Home from './component/Home';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/:title/description' exact element={<Description/>} />
    </Routes>
  )
}

export default App;