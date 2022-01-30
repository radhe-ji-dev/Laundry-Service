import React, { useState, createContext } from "react";
import Login from "./login/login";
import Register from "./register/register";
import Createorderhome from "./createorder/createorderhome";
import Ordercreation from "./createorder/ordercreation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getorder from "./getorder/Getorder";

export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      {/*<store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/createorder" element={<Createorderhome />} />
            <Route exact path="/ordercreate" element={<Ordercreation />} />
            <Route exact path="/getorder" element={<Getorder />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>*/}
      <Getorder />
    </div>
  );
}

export default App;
