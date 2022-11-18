import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { APP_SERVER } from "../../../utilities/utilities";
import AppointmentRow from "./AppointmentRow";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookingsData = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(`${APP_SERVER}/bookings?email=${user?.email}`).then(res =>
        res.json()
      )
  });

  return (
    <div>
      <div className="">
        <h2 className="mb-8">My Appointment</h2>

        {isLoading ? (
          <LoadingCircle />
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Treatment</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {bookingsData &&
                  bookingsData.map((booking, i) => (
                    <AppointmentRow
                      key={booking?._id}
                      booking={booking}
                      idx={i + 1}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointment;
