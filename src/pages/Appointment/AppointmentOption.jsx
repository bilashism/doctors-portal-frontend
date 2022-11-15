import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { _id, name, slots } = appointmentOption;

  return (
    <article className="text-center flex flex-col gap-4 border px-3 py-4 shadow-sm">
      <h2 className="font-bold">{name}</h2>
      <p className="">{slots.length > 0 ? slots[0] : `Try another day!`}</p>
      <p className="">
        {slots.length} slot{slots.length >= 2 ? "s" : ""} available
      </p>
      <div className="">
        <label
          disabled={slots.length === 0}
          onClick={() => setTreatment(appointmentOption)}
          htmlFor="BookingModal"
          className="btn btn-ghost bg-slate-300">
          Book now
        </label>
      </div>
    </article>
  );
};

export default AppointmentOption;
