import { Route , Routes } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { About , Contact , Home , Services , } from "./assets/components/pages";



function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
         <Route path="/services" element={ <Services/>} />
      </Routes>
    </div>
   );
}

export default App;