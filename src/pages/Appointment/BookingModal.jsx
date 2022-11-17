import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { APP_SERVER } from "../../utilities/utilities";
import { AppointmentAvailabilityContext } from "./Appointment";

const BookingModal = ({ treatment, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { selectedDate } = useContext(AppointmentAvailabilityContext);
  const userSelectedDate = format(selectedDate, "PP");
  const handleBooking = ev => {
    ev.preventDefault();
    const form = ev.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      treatmentName: treatment?.name,
      userSelectedDate,
      selectedSlot: slot,
      patientName: name,
      email,
      phone
    };

    // create a booking
    fetch(`${APP_SERVER}/bookings`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.acknowledged) {
          toast.success("Your booking is confirmed.");
          refetch();
        }
        if (!data?.acknowledged) {
          toast.error(data?.message);
        }
      })
      .catch(err => {
        toast.error(`Something went wrong. Please try again.`);
        console.error(err);
      })
      .finally(() => {
        setTreatment(null);
      });
  };
  return (
    <>
      <input type="checkbox" id="BookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="BookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment?.name}</h3>

          <div className="py-4">
            <form className="flex flex-col gap-4" onSubmit={handleBooking}>
              <input
                type="text"
                value={userSelectedDate}
                disabled
                readOnly
                aria-readonly
                name="date"
                className="input input-bordered input-primary w-full "
              />

              <select
                name="slot"
                className="select select-secondary w-full"
                defaultValue={"Pick your suitable time"}>
                <option disabled>Pick your suitable time</option>
                {treatment?.slots.map((slot, i) => (
                  <option key={`tr-slot-${i + 1}`} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>

              <input
                type="name"
                name="name"
                placeholder="Name"
                readOnly
                disabled
                defaultValue={user?.displayName}
                className="input input-bordered input-primary w-full "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                readOnly
                disabled
                defaultValue={user?.email}
                className="input input-bordered input-primary w-full "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered input-primary w-full "
              />
              <button
                type="submit"
                className="btn btn-ghost bg-secondary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
