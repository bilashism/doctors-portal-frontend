import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { APP_SERVER, IMG_DB_API_KEY } from "../../../utilities/utilities";

const AddDoctor = () => {
  const {
    register,
    formState,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();
  const { createUser, updateUserProfile, setAuthLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Add A Doctor");

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/appointmentSpecialty`);
      const data = await response.json();
      return data;
    }
  });

  // reset the form after successful submission
  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [formState, reset]);

  const handleAddDoctor = data => {
    const addDoctorFormData = new FormData();
    const photo = data.photo[0];

    const imgBBUrl = `https://api.imgbb.com/1/upload?key=${IMG_DB_API_KEY}`;

    // the field value in the formData has to be exactly === "image"
    addDoctorFormData.append("image", photo);

    fetch(imgBBUrl, {
      method: "post",
      body: addDoctorFormData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          // toast.success("Image added successfully!");
          const doctorProfile = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            imgId: result.data.id,
            imgUrl: result.data.url
          };

          fetch(`${APP_SERVER}/doctors`, {
            method: "post",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(doctorProfile)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                toast.success(
                  `${doctorProfile.name} has been added successfully!`
                );
                navigate("/dashboard/manageDoctors");
              }
            })
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="">
        <h2 className="mb-8">Add Doctor</h2>
        <div className="p-1">
          <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              <select
                name="specialty"
                id="specialty"
                className="select select-secondary w-full"
                {...register("specialty", {
                  required: "Please provide a specialty"
                })}
                defaultValue={"Please provide a specialty"}>
                <option disabled>Please provide a specialty</option>
                {specialties.map(specialty => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
              {errors.specialty && (
                <p role="alert">{errors.specialty?.message}</p>
              )}
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                // accept="image/*"
                name="photo"
                id="photo"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="username"
                {...register("photo", {
                  required: "Please upload your photo"
                })}
              />
              <label
                htmlFor="photo"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Photo
              </label>
              {errors.photo && <p role="alert">{errors.photo?.message}</p>}
            </div>

            <div className="pb-4 text-center text-slate-600">
              <p className="">Your privacy is always protected.</p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">
                Add doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
