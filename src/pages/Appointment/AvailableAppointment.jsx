import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { APP_SERVER } from "../../utilities/utilities";
import { AppointmentAvailabilityContext } from "./Appointment";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointment = () => {
  const { selectedDate, setSelectedDate } = useContext(
    AppointmentAvailabilityContext
  );
  const formattedDate = format(selectedDate, "PP");
  const [treatment, setTreatment] = useState(null);

  const {
    data: appointmentOptions,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["appointmentOptions", formattedDate],
    queryFn: () =>
      fetch(`${APP_SERVER}/appointmentOptions?date=${formattedDate}`).then(
        res => res.json()
      )
  });

  if (isLoading) return <LoadingCircle />;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Available Appointment on{" "}
          <span className="text-blue-600">{format(selectedDate, "PP")}</span>
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 my-10">
          {appointmentOptions.map(appointmentOption => (
            <AppointmentOption
              key={appointmentOption._id}
              appointmentOption={appointmentOption}
              setTreatment={setTreatment}
            />
          ))}
        </div>
        <div className="">
          {treatment && (
            <BookingModal
              treatment={treatment}
              setTreatment={setTreatment}
              refetch={refetch}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailableAppointment;
