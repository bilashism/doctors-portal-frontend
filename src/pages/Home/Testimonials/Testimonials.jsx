import React from "react";
import quoteImg from "../../../images/icons/quote.svg";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviewsData = [
    {
      _id: 1,
      name: "Winson Herry 1",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1
    },
    {
      _id: 2,
      name: "Winson Herry 2",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people2
    },
    {
      _id: 3,
      name: "Winson Herry 3",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people3
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center pb-12">
          <div className="flex flex-col-reverse">
            <h2 className="text-3xl ">What Our Patients Says</h2>
            <p className="text-primary font-bold">Testimonial</p>
          </div>
          <figure className="">
            <img
              src={quoteImg}
              alt="quote"
              className="w-48 h-48 ml-auto"
              width="140"
              height="140"
              decoding="async"
              fetchpriority="low"
            />
          </figure>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 py-10">
          {reviewsData.map(review => (
            <Testimonial key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
