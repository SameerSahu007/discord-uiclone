import { Routes, Route } from "react-router-dom";
import Loginpage from "./components/Login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
