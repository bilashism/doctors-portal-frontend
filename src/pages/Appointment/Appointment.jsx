import React, { createContext, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AppointmentHero from "./AppointmentHero";
import AvailableAppointment from "./AvailableAppointment";
export const AppointmentAvailabilityContext = createContext();

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  useTitle("Appointment");
  return (
    <div className="">
      <AppointmentAvailabilityContext.Provider
        value={{ selectedDate, setSelectedDate }}>
        <AppointmentHero />
        <AvailableAppointment />
      </AppointmentAvailabilityContext.Provider>
    </div>
  );
};

export default Appointment;
