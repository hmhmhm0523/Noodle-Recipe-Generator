import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import BuildRecipe from "./pages/BuildRecipe"
import './App.scss'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="buildRecipe" element={<BuildRecipe />} />
      </Routes>
    </div>
  )
}

export default App