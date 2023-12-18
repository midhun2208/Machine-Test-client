import { Route, Router, Routes } from "react-router-dom";
import Login from "./Coponents/Login";
import Registration from "./Coponents/Registration";
import Dashboard from "./Coponents/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
