// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import bgImage1 from "../assets/signup.jpg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const checkError = () => {
    if (!user.name || !user.email || !user.role || !user.password) {
      return setError(true);
    } else {
      console.log("complete details");
      navigate("/");
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkError();
  };
  return (
    <section className="mx-auto">
      <Navbar />

      <main className="h-screen grid justify-items-center  content-center md:grid-cols-2 py-2 px-12">
        <div className="hidden md:flex md:justify-between">
          <img
            src={bgImage1}
            className="max-h-screen w-auto object-contain"
            alt="girls smiling"
          />
        </div>
        <div className="md:flex md:py-4 md:px-32 md:flex-col ">
          <form
            className=" flex flex-col gap-1"
            action="#"
            onSubmit={handleSubmit}
          >
            <h1 className="capitalize text-lg text-center pb-2 font-semibold">
              sign up{" "}
            </h1>
            <button className="border border-gray-800 py-2 w-full rounded text-signup-btn  capitalize">
              <a href="#">
                <span>
                  <i className="fa-brands fa-google pr-2"></i>
                </span>
                continue with google
              </a>
            </button>
            <button className="border border-gray-800 py-2 w-full rounded text-signup-btn  capitalize">
              <a href="#">
                <span>
                  <i className="fa-brands fa-facebook-f pr-2"></i>
                </span>
                continue with facebook
              </a>
            </button>
            {error && (
              <p className="text-red-700 font-bold">
                ! Please input all fields
              </p>
            )}
            <div className="name">
              <label
                htmlFor="name"
                className="capitalize text-gray-600 pb-1 block"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-400 p-1.5 w-full rounded outline-gray-500"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label
                htmlFor="email"
                className="capitalize text-gray-600 pb-1 block"
              >
                email address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-400 p-1.5 w-full rounded outline-gray-500"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="role">
              <label
                htmlFor="role"
                className="capitalize text-gray-600  pb-1 block"
              >
                Option
              </label>
              <select
                id="role"
                className="border border-gray-400 p-1.5 px-3  w-full rounded text-gray-600 outline-gray-400"
                value={user.role}
                onChange={handleChange}
                name="role"
              >
                <option>Select an option</option>
                <option value="CON">Contributor</option>
                <option value="ADP-INV">Seeker</option>
                <option value="ADP-ORG">Seeker-Organization</option>
              </select>
            </div>
            <div className="password">
              <label
                htmlFor="password"
                className=" flex  justify-between capitalize text-gray-600  pb-1"
              >
                password <span className="text-right">hide</span>
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-400 p-1.5 w-full rounded outline-gray-400"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
              <p className="text-gray-600 text-xs">
                Password must have 8 characters
              </p>
            </div>
            <div className="text-xs">
              <input type="checkbox" />
              <span className="pl-2">
                Agree to our
                <a href="#" className="underline text-signup-btn px-1">
                  Terms of use
                </a>
                and
                <a href="#" className="underline text-signup-btn pl-1">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button className="sign-up-btn border  border-signup-btn text-left self-baseline my-2 p-1.5  rounded capitalize text-white bg-signup-btn">
              sign up
            </button>
          </form>
          <p>
            Already have an account?
            <button
              to="/"
              className="capitalize pl-2 underline text-signup-btn"
            >
              login
            </button>
          </p>
        </div>
      </main>
    </section>
  );
}
export default Signup;
