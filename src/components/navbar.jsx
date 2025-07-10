// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar flex justify-between px-2 py-3 items-center border-b-1 border-gray-400 md:flex-row md:text-xl capitalize  md:justify-between  md:py-3 md:px-10   ">
      <div className="logo">
        <h1 className="uppercase lg:text-4xl text-signup-btn font-mono font-bold">
          <Link to="/">kindcycle</Link>
        </h1>
      </div>
      {/* <input type="text" className="border border-gray-400 rounded py-2" /> */}
      <ul className="flex gap-2 text-sm items-center md:gap-20 ">
        <li className=" text-white bg-signup-btn border border-signup-btn  rounded p-1 md:py-1 md:px-8  ">
          <Link to="/">login</Link>
        </li>
        <li className=" border p-1 rounded text-signup-btn md:px-8 md:py-1 ">
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
