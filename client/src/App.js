import React, { useState } from 'react'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const [alert, setAlert] = useState("")
  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (




    <NoteState>

      <Router>
        <Navbar brand="Crud Notify" />
        <Alert alert={alert} />
        <div className='container'>

          <Routes>

            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />

          </Routes>
        </div>
      </Router>

    </NoteState>

  );
}

export default App;
