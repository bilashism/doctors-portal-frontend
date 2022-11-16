import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import registrationImg from "../../images/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useForm, useFieldArray, Controller } from "react-hook-form";

const Register = () => {
  const {
    register,
    formState,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();
  const { createUser, updateUserProfile, setAuthLoading } =
    useContext(AuthContext);

  useTitle("Register");

  // reset the form after successful submission
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  // handle User Login form
  const handleUserRegistration = data => {
    console.log(data);
    const { email, password, name, photoUrl } = data;

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
        // form.reset();
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
            <form onSubmit={handleSubmit(handleUserRegistration)}>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  autoComplete="username"
                  {...register("name", {
                    required: "Name is a must",
                    minLength: { value: 2, message: "Must be 2 chars long" }
                  })}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your name
                </label>
                {errors.name && <p role="alert">{errors.name?.message}</p>}
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
                  {...register("email", {
                    required: "Please give your email address"
                  })}
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
                  type="url"
                  name="photoUrl"
                  id="photoUrl"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("photoUrl", {
                    required: "Please provide a profile photo URL"
                  })}
                />
                <label
                  htmlFor="photoUrl"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Photo URL
                </label>
                {errors.photoUrl && (
                  <p role="alert">{errors.photoUrl?.message}</p>
                )}
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
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8}$/,
                      message: "Must be strong 💪"
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
