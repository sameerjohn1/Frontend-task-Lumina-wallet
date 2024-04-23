import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto h-[250px]  footer">
        <div className="flex justify-center items-center">
          <h1 className="mt-20 mb-10 text-center text-3xl  text-white font-light">
            START TRADINGIN <br /> LESS THAN 30 SECS
          </h1>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row  md:flex-row items-start justify-around gap-8">
          <h1 className="text-white">© Lumina wallet Inc. 2024</h1>
          <h1 className="text-white">Terms of use | Privacy policy</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
