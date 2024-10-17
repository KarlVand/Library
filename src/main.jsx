import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CardHover1 from "./CardHover-1/CardHover1.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardHover1 />
  </StrictMode>
);
