import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
