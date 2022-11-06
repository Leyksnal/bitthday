import React from 'react'
import Header from "./Component/Header/Header"
import Profile from './Component/Profile/Profile'
// import Foter from './Component/Foter/Foter'
import MyWishes from './Component/Wish/MyWishes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import GlobalState from './Global'
import Sent from './Component/Wish/SentWishes'

const App = () => {
  return (
    <>
      {/* <GlobalState/> */}
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Profile/>}/>
      <Route path='/my' element={<MyWishes/>}/>
      <Route path='/mys' element={<Sent/>}/>
    </Routes>
    {/* <Foter/> */}
    </BrowserRouter>
      {/* </GlobalState> */}
    </>
    

  )
}

export default App