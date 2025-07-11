import { Link } from "react-router-dom";
import bgImage2 from "../assets/signin.jpg";
import Navbar from "../components/navbar";

function SignIn() {
  return (
    <section className="container">
      <Navbar />
      <main className="h-screen grid justify-items-center  content-center">
        <div className="hidden">
          <img
            src={bgImage2}
            className="max-h-screen w-auto object-contain"
            alt="girls smiling"
          />
        </div>
        <div className="flex justify-center ">
          <form className=" flex flex-col gap-1" action="#">
            <h1 className="capitalize text-center font-semibold py-4">login page</h1>
            <button className="border border-gray-800 py-2   w-full rounded text-signup-btn capitalize">
              <a href="#">
                <span className="pr-2">
                  <i className="fa-brands fa-google"></i>
                </span>
                continue with google
              </a>
            </button>
            <button className="border border-gray-800 py-2 w-full rounded text-signup-btn capitalize">
              <a href="#">
                <span>
                  <i className="fa-brands fa-facebook-f pr-2"></i>
                </span>
                continue with facebook
              </a>
            </button>
            <div>
              <label
                htmlFor="username"
                className="capitalize text-gray-600  py-2 block"
              >
                username or email address
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-400 py-2 w-full rounded"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className=" flex  justify-between capitalize text-gray-600 pb-1.5"
              >
                password <span className="text-right">hide</span>
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-400 py-2 w-full rounded"
              />
            </div>
            <button className=" sign-in-btn border  border-signup-btn text-left self-baseline py-1 px-3 my-4 rounded  capitalize text-white bg-signup-btn">
              <Link to="/product-page">sign in</Link>
            </button>
            <p>
              Don't have an account yet?
              <Link
                to="/signup"
                className="capitalize pl-2 underline text-signup-btn"
              >
                signup
              </Link>
            </p>
          </form>
        </div>
      </main>
    </section>
  );
}
export default SignIn;
