import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import Navbar from "./navbar/navbar.tsx"
import Description from "./project/description.tsx"; 




function App() {

  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Description />} />

      </Routes>
    </Router>
  )
}

export default App
