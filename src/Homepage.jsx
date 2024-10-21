import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="w-screen h-screen flex bg-red-600 items-center">
      <nav className="relative w-screen h-screen bg-slate-900 justify-center items-center m-auto">
        <Link to="/cardhover1">
          <button>Card Hover 1</button>
        </Link>
      </nav>
    </div>
  );
}

export default Homepage;
