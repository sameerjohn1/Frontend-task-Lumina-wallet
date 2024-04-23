import React from "react";
import image90 from "../../assets/image 90.png";

const Banner = () => {
  return (
    <div className="bg-black xl:px-20 px-4">
      <section className="text-gray-600 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-5xl h-auto mb-4  text-white">
              Snipe and sell tokens
              <br />
              at lightning speed
            </h2>
            <p className="text-purple-600">Connect to start trading SOL now.</p>
            <p className="mb-8 text-gray-500">
              Install Phantom and connect your wallet to log in.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="">
              <div className="rect"></div>
              <img className="" alt="" src={image90} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl h-56 mx-auto container xl:px-28 px-4 py-20 text-center text-4xl text-white">
        <h1>
          BUILT BY TRADERS <br />{" "}
          <span className="text-purple-600">FOR TRADERS</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
