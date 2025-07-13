import { Link } from "react-router-dom";
import bgImage2 from "../../public/assets/signin.jpg";
import Navbar from "../components/navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    window.alert(`welcome, ${data.name}`);
    navigate("/product-page");
  };
  return (
    <section className="container">
      <Navbar />
      <main className="grid justify-items-center  content-center">
        <div className="hidden">
          <img
            src={bgImage2}
            className="max-h-screen w-auto object-contain"
            alt="girls smiling"
          />
        </div>
        <div className="flex justify-center ">
          <form
            className=" flex flex-col gap-1"
            onSubmit={handleSubmit(formSubmit)}
          >
            <h1 className="capitalize text-center font-semibold py-4">
              login page
            </h1>
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
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs font-bold">
                {errors.name.message}
              </p>
            )}
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
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "Passsword must have at least 8 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs font-bold">
                {errors.password.message}
              </p>
            )}
            <button
              className=" sign-in-btn border  border-signup-btn text-left self-baseline py-1 px-3 my-4 rounded  capitalize text-white bg-signup-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in" : "Login"}
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
