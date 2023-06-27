import { BrowserRouter } from "react-router-dom";
import {Navbar, About, Contact, Travel} from "./components";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <About />
    <Travel />
    <Contact />
    </BrowserRouter>

  )
}

export default App
