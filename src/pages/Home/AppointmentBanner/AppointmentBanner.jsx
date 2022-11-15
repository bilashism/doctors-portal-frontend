import React from "react";
import doctorImg from "../../../images/doctor.png";
import appointmentBgImg from "../../../images/appointment.png";

function AppointmentBanner() {
  return (
    <section className="my-20 relative isolate">
      <div className="container mx-auto px-4">
        <div className="hero text-white">
          <div className="hero-content lg:p-0 flex-col lg:flex-row">
            <img
              src={doctorImg}
              className="lg:max-w-xl rounded-lg lg:scale-110 origin-bottom "
            />
            <div className="lg:pt-32">
              <h2 className="text-3xl font-bold">Make an appointment Today</h2>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/* bg image */}
      <div className="absolute w-full h-full z-[-1] overflow-hidden bottom-0">
        <figure className="flex items-center justify-center w-full h-full">
          <picture className="flex items-end justify-center w-full h-full">
            <source srcSet={appointmentBgImg} />
            <img
              src={appointmentBgImg}
              alt="chair background"
              className="w-full h-3/4 object-cover"
              width="1920"
              height="889"
              decoding="async"
              fetchpriority="low"
              loading="lazy"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}

export default AppointmentBanner;
