import "./CardHover1.css";
import { useNavigate } from "react-router-dom";
import Image1 from "./images/landscape1.jpg";
import Image2 from "./images/landscape2.jpg";
import Image3 from "./images/landscape3.jpg";
import Image4 from "./images/landscape4.jpg";
import Image5 from "./images/landscape5.jpg";

function CardHover1() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        <div className="card">
          <img
            src={Image1}
            alt=""
          />
        </div>
        <div className="card">
          <img
            src={Image2}
            alt=""
          />
        </div>
        <div className="card">
          <img
            src={Image3}
            alt=""
          />
        </div>
        <div className="card">
          <img
            src={Image4}
            alt=""
          />
        </div>
        <div className="card">
          <img
            src={Image5}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="backbutton">
        Back
      </button>
    </main>
  );
}

export default CardHover1;
