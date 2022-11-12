import React from "react";
import bannerImg from "../../images/treatment.png";
import bannerBgImg from "../../images/bg.png";

const Banner = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="hero bg-base-200 py-16 relative isolate">
          <div className="hero-content flex-col lg:flex-row">
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
              <h2 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h2>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-black"
                type="button">
                Get Started
              </button>
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

export default Banner;
