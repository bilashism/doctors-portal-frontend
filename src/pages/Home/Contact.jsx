import React from "react";
import headerBgImg from "../../images/bg.png";

const Contact = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="hero  py-16 relative isolate">
          <div className="hero-content max-w-2xl w-full">
            <div className="flex-grow w-full ">
              <div className="flex flex-col-reverse text-center">
                <h2 className="text-3xl ">Stay connected with us</h2>
                <p className="text-primary font-bold">Contact Us</p>
              </div>

              <form className="py-12">
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="subject">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="message">
                    <span className="label-text">Your message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea textarea-bordered"
                    placeholder="Your message"
                    rows={8}></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary self-center" type="submit">
                    Submit
                  </button>
                </div>
              </form>
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
                  className="mx-auto object-cover"
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
    </section>
  );
};

export default Contact;
