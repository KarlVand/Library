import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CardHover1 from "./CardHover-1/CardHover1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="cardhover1"
          element={<CardHover1 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
