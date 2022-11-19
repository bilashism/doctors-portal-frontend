import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import loginImg from "../../images/logo.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { APP_SERVER } from "../../utilities/utilities";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm();
  const { userLogin, setAuthLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [token] = useToken(userLoginEmail);
  // console.log(location);
  const googleProvider = new GoogleAuthProvider();
  useTitle("Login");
  if (token) {
    navigate(from, { replace: true });
  }
  // reset the form after successful submission
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  // const getToken = data => {
  //   fetch(`${APP_SERVER}/jwt`, {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       localStorage.setItem("Token", data.token);
  //     })
  //     .catch(err => console.error(err));
  // };

  // handle User Login form
  const handleUserLogin = data => {
    console.log(data);
    const { email, password } = data;
    userLogin(email, password)
      .then(user => {
        toast.success("Login successful!");
        // form.reset();
        setUserLoginEmail(email);

        console.log(user);
      })
      .catch(err => {
        err?.code && toast.error(err.code);
        console.error(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  const handleProviderLogIn = provider => {
    providerLogin(provider)
      .then(data => {
        toast.success("Logged in successfully!");
        const curUser = { email: data.user.email };
        // getToken(curUser);
        navigate(from, { replace: true });
      })
      .catch(err => {
        err?.code && toast.error(err.code);
        console.error(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 py-8 text-center">
          Login
        </h2>

        <div className="grid lg:grid-cols-2 lg:items-center gap-16">
          <div className="flex flex-col gap-8 ">
            <form onSubmit={handleSubmit(handleUserLogin)}>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  autoComplete="username"
                  {...register("email", { required: "Email is mandatory" })}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
                {errors.email && <p role="alert">{errors.email?.message}</p>}
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is must",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 chars long"
                    }
                  })}
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your password
                </label>
                {errors.password && (
                  <p role="alert">{errors.password?.message}</p>
                )}
              </div>

              <div className="pb-4 text-center text-slate-600">
                <p className="">Your privacy is always protected.</p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <hr className="mb-8 w-1/2 mx-auto border-purple-600" />
              <div className="">
                <button
                  onClick={() => handleProviderLogIn(googleProvider)}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative inline-flex items-center gap-4 px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <FaGoogle className="text-blue-600 group-hover:text-white transition" />{" "}
                    <span className="">Log in with Google</span>
                  </span>
                </button>
              </div>
              <p className="">or</p>
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-purple-600 font-bold hover:underline">
                  Register Now
                </Link>{" "}
              </p>
            </div>
          </div>

          {/* image section  */}
          <figure className="order-first lg:order-none">
            <picture className="">
              <source srcSet={loginImg} />
              <img
                src={loginImg}
                alt="Login"
                className="lg:-rotate-12 h-80 drop-shadow-lg object-contain lg:h-auto lg:object-cover mx-auto"
                loading="lazy"
                width="320"
                height="758"
                decoding="async"
                fetchpriority="low"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Login;
