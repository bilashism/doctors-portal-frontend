import React from "react";
import headerImg from "../../images/chair.png";
import headerBgImg from "../../images/bg.png";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="hero bg-base-200 py-16 relative isolate">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={headerImg}
              className="lg:max-w-xl rounded-lg shadow-2xl"
              alt="loading"
              width="904"
              height="541"
              decoding="async"
              fetchpriority="low"
              loading="lazy"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Your New Smile Starts Here!
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
                <source srcSet={headerBgImg} />
                <img
                  src={headerBgImg}
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

export default Header;
