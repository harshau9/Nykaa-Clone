import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbar/MainNavbar';


import HomePage from "./components/Home/HomePage";
import Main from './Main';
import React, { useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
function App() {
  const params = useLocation()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (params.pathname == "/login" || params.pathname == "/register") {
      setVisible(false)
    } else setVisible(true)
  },[params])
  return (
    <div className="App">
      {visible && <MainNavbar/>}
      <Main />
      {visible && <HomePage />}

      {visible && <Footer/>}
    </div>
  )};
export default App;
