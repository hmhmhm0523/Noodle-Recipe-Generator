import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Recipe from "./pages/Recipe"
import BuildRecipe from "./pages/BuildRecipe"
import './App.scss'


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light">
        <a class="navbar-brand" href="/Noodle-Recipe-Generator">
          <div className="Logo"></div>
          <span>
            Hunan Noodle Soup <br />
            <b>Recipe</b> Generator
          </span>
        </a>
      </nav>
      <Routes>
        <Route path="/Noodle-Recipe-Generator" element={<Home />} />
        <Route path="/Noodle-Recipe-Generator/recipe" element={<Recipe />} />
        <Route path="/Noodle-Recipe-Generator/buildRecipe" element={<BuildRecipe />} />
      </Routes>
      <footer class="bg-light text-center text-lg-start">

        <div class="text-center p-3">
          <span>© 2022 Copyright: </span>
          <a class="text-dark" href="https://mhuang6.com/">Meng Huang</a>
        </div>
      </footer>

    </div>
  )
}

export default App