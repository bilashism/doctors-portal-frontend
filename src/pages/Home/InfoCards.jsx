import React from "react";
import clockIcon from "../../images/icons/clock.svg";
import phoneIcon from "../../images/icons/phone.svg";
import markerIcon from "../../images/icons/marker.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "opening hours",
      description: "open at 9am",
      icon: clockIcon,
      bgClass: "bg-neutral"
    },
    {
      id: 2,
      name: "our locations",
      description: "open at 9am",
      icon: markerIcon,
      bgClass: "bg-secondary"
    },
    {
      id: 3,
      name: "contact us",
      description: "open at 9am",
      icon: phoneIcon,
      bgClass: "bg-neutral"
    }
  ];
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3 py-10">
          {cardsData.map(card => (
            <InfoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
