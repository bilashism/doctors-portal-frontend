import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import registrationImg from "../../images/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, setAuthLoading } =
    useContext(AuthContext);

  useTitle("Register");
  const nameRef = useRef();
  const emailRef = useRef();
  const photoUrlRef = useRef();
  const passwordRef = useRef();

  // handle User Login form
  const handleUserRegistration = ev => {
    ev.preventDefault();
    const form = ev.target;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const photoUrl = photoUrlRef.current.value;

    if (!email || !password) return;

    createUser(email, password)
      .then(user => {
        toast.success("Account created successfully!");

        // handle user profile
        const profile = { displayName: name, photoURL: photoUrl };
        updateUserProfile(profile)
          .then(data => {
            toast.success("Account updated successfully!");
          })
          .catch(err => {
            err?.code && toast.error(err.code);
            console.error(err);
          });

        form.reset();
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

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 py-8 text-center">
          Register
        </h2>

        <div className="grid lg:grid-cols-2 lg:items-center gap-16">
          {/* image section  */}
          <figure className="">
            <picture className="">
              <source srcSet={registrationImg} />
              <img
                src={registrationImg}
                alt="Login"
                className="lg:rotate-6 h-80 drop-shadow-lg object-contain lg:h-auto lg:object-cover mx-auto"
                loading="lazy"
                width="690"
                height="864"
                decoding="async"
                fetchpriority="low"
              />
            </picture>
          </figure>

          <div className="flex flex-col gap-8 ">
            <form onSubmit={handleUserRegistration}>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  autoComplete="username"
                  ref={nameRef}
                  minLength="2"
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  autoComplete="username"
                  ref={emailRef}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="url"
                  name="photoUrl"
                  id="photoUrl"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  ref={photoUrlRef}
                />
                <label
                  htmlFor="photoUrl"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Photo URL
                </label>
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
                  ref={passwordRef}
                  minLength="6"
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your password
                </label>
              </div>

              <div className="pb-4 text-center text-slate-600">
                <p className="">Your privacy is always protected.</p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center">
              <hr className="mb-8 w-1/2 mx-auto border-purple-600" />
              <p className="">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-600 font-bold hover:underline">
                  Login Now
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
