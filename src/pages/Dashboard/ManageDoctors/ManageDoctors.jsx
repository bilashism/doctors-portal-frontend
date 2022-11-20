import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import useTitle from "../../../hooks/useTitle";
import { APP_SERVER } from "../../../utilities/utilities";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => setDeletingDoctor(null);
  const deleteDoctor = id => {
    fetch(`${APP_SERVER}/doctors/${id}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount >= 1) {
          toast.success("Deleted successfully!");
          refetch();
          closeModal();
        }
      })
      .catch(err => console.error(err));
  };
  const {
    data: allDoctors = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const response = await fetch(`${APP_SERVER}/doctors`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  });
  useTitle("Manage Doctors");
  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <div>
      <div className="">
        <h2 className="mb-8">Manage Doctors</h2>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allDoctors.map((doctor, i) => (
                  <DoctorRow
                    key={doctor._id}
                    doctor={doctor}
                    idx={i + 1}
                    setDeletingDoctor={setDeletingDoctor}
                  />
                ))}
              </tbody>
            </table>
            {deletingDoctor && (
              <ConfirmationModal
                deletingDoctor={deletingDoctor}
                closeModal={closeModal}
                deleteDoctor={deleteDoctor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
