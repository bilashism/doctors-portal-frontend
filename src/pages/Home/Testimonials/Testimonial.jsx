import React from 'react';

function Testimonial({ review }) {
  const { _id, name, location, reviewText, img } = review;
  return (
    <article className="px-4 py-6 shadow-lg shadow-slate-500 rounded-2xl">
      <p className="">{reviewText}</p>
      <div className="flex gap-4 flex-wrap items-center pt-8 ">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={img}
              alt={name}
              className="w-10 h-10 mx-auto"
              width="40"
              height="40"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold">{name}</h2>
          <p className="">{location}</p>
        </div>
      </div>
    </article>
  );
}

export default Testimonial;
