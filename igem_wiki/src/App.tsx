import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import Description from "./pages/description.tsx"; 




function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Description />} />

      </Routes>
    </Router>
  )
}

export default App
