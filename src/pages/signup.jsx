// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import bgImage1 from "../../public/assets/signup.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const navigate= useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const formSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    window.alert(`welcome, ${data.name}`);
    navigate('/')
  };

  return (
    <section className="mx-auto">
      <Navbar />

      <main className=" grid justify-items-center  content-center md:grid-cols-2 ">
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
            onSubmit={handleSubmit(formSubmit)}
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
            {/*             
              <p className="text-red-700 font-bold">
                ! Please input all fields
              </p> */}

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
                placeholder="Chukwuma Adekunle"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs font-bold">
                {errors.name.message}
              </p>
            )}
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
                {...register("email", {
                  required: "email is required",
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs font-bold">
                {errors.email.message}
              </p>
            )}
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
                {...register("role", { required: "role is required" })}
              >
                <option></option>
                <option value="CON">Contributor</option>
                <option value="ADP-INV">Seeker</option>
                <option value="ADP-ORG">Seeker-Organization</option>
              </select>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs font-bold">
                {errors.role.message}
              </p>
            )}
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
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "Passsword must have at least 8 characters",
                  },
                })}
              />
              <p className="text-gray-600 text-xs">
                Password must have 8 characters
              </p>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs font-bold">
                {errors.password.message}
              </p>
            )}
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

            <button
              className="sign-up-btn border  border-signup-btn text-left self-baseline my-2 p-1.5  rounded capitalize text-white bg-signup-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "sign up"}
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
