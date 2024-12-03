import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import Weddings from "./pages/Weddings/Weddings";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Weddings' element={<Weddings />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
