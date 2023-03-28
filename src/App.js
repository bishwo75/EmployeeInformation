import React,  { useState } from "react";
import "./App.css";
import "./index.css";
import Home from "./components/home";
import Adduser from "./components/adduser.js";
import Deleteuser from "./components/deleteuser.js";
import Edituser from "./components/edituser.js";
import Topnav from "./components/topnav";
import Viewuser from "./components/viewuser.js";
import Login from "./components/login.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target; //we can do other way too, don't put name on input and have
    // onChange=e.target.value but how do we st the state here?
    setData({ ...data, [name]: value });
  };
  return (
    <div className="App">
      <Topnav status={status} data={data}   />
      <Routes>
        <Route path="/" element={<Login handleChange={handleChange} setStatus={setStatus} data={data}  />} />
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
