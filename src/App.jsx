import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginRegisterCard from "./components/auth/LoginRegisterCard"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/loginregister" element={<LoginRegisterCard />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  )
}

export default App
