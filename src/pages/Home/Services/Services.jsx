import React from "react";
import fluorideImg from "../../../images/fluoride.png";
import cavityImg from "../../../images/cavity.png";
import whiteningImg from "../../../images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "fluoride",
      description: "open at 9am",
      image: fluorideImg
    },
    {
      id: 2,
      name: "cavity",
      description: "open at 9am",
      image: cavityImg
    },
    {
      id: 3,
      name: "whitening",
      description: "open at 9am",
      image: whiteningImg
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse text-center">
          <h2 className="text-3xl ">Services we provide</h2>
          <p className="text-primary font-bold">our services</p>
        </div>
        <div className="grid gap-8 py-10 lg:grid-cols-3">
          {servicesData.map(service => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
