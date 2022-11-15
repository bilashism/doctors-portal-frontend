import React, { useContext } from "react";
import bannerImg from "../../images/treatment.png";
import bannerBgImg from "../../images/bg.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { AppointmentAvailabilityContext } from "./Appointment";

const AppointmentHero = () => {
  const { selectedDate, setSelectedDate } = useContext(
    AppointmentAvailabilityContext
  );

  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="hero bg-base-200 py-16 relative isolate">
          <div className="hero-content justify-between w-full flex-col lg:flex-row-reverse">
            <img
              src={bannerImg}
              className="lg:max-w-xl rounded-lg shadow-2xl"
              alt="loading"
              width="904"
              height="541"
              decoding="async"
              fetchpriority="low"
              loading="lazy"
            />
            <div>
              {
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
              }
            </div>
          </div>

          {/* bg image */}
          <div className="absolute w-full h-full z-[-1] overflow-hidden top-0">
            <figure className="">
              <picture>
                <source srcSet={bannerBgImg} />
                <img
                  src={bannerBgImg}
                  alt="chair background"
                  className=""
                  width="904"
                  height="541"
                  decoding="async"
                  fetchpriority="low"
                  loading="lazy"
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentHero;
