import React from "react";
import logo from "../../assets/Group 2229.png";
import image91 from "../../assets/image 91.png";
import image94 from "../../assets/image 94.png";
import image95 from "../../assets/image 95.png";
import image01 from "../../assets/01.png";
import image02 from "../../assets/02.png";
import image03 from "../../assets/03.png";

const data = [
  {
    image: image91,
    numbers: image01,
    heading: "Discover",
    paragraph: "Discover new tokens and filter by your preferences.",
  },
  {
    image: image94,
    numbers: image02,
    heading: "Monitor",
    paragraph: "Real-time security updates & easily monitor your portfolio.",
  },
  {
    image: image95,
    numbers: image03,
    heading: "Quick Buy and Sell",
    paragraph:
      "Trade faster with Photon with a speed advantage for every transaction.",
  },
];

const TradersCards = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 bg-black ">
      <section className="text-gray-600 body-font  flex flex-col gap-4">
        {data?.map((ele) => (
          <div className="container mx-auto px-12 flex bg-[#7470D91F] py-4 flex-col items-center md:flex-row ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <img src={logo} alt="" />
              <p className="mb-8 leading-relaxed text-white">{ele.heading}</p>
              <p className="mb-8 leading-relaxed text-white">{ele.paragraph}</p>
              <img src={ele.numbers} alt="" className=" " />
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={ele.image}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TradersCards;
