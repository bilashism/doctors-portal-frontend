import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { AppointmentAvailabilityContext } from "./Appointment";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointment = () => {
  const { selectedDate, setSelectedDate } = useContext(
    AppointmentAvailabilityContext
  );

  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch(`appointmentOptions.json`)
      .then(res => res.json())
      .then(data => {
        setAppointmentOptions(data);
      })
      .catch(err => console.error(err));
  }, []);

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
            <BookingModal treatment={treatment} setTreatment={setTreatment} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailableAppointment;
