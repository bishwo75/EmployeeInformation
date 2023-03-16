import React from 'react';
import './App.css';
import './index.css';
import Home from './components/home';
import Adduser from './components/adduser.js';
import Deleteuser from './components/deleteuser.js'
import Edituser from './components/edituser.js'
import Topnav from './components/topnav';
import Viewuser from './components/viewuser.js'
import Login from './components/login.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Topnav/>
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
       <Route path="/adduser" element={<Adduser />} /> 
       <Route path="/edituser/:id" element={<Edituser />} /> 
       <Route path="/viewuser/:id" element={<Viewuser />} />       
       <Route path="/deleteuser/:id" element={<Deleteuser />} />      
      
      </Routes>
              
    </div>
 );
}
export default App;
////npx json-server --watch db.json --port 4000 to run backend