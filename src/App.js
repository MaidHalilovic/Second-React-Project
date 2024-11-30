import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
