import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginRegisterCard from "./pages/LoginRegisterCard" 
function App() {
  return (
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element={<LoginRegisterCard />} />
      </Routes>
  )
}

export default App
