import React from "react";
import home from "../assets/home.jpg";
import { ReactTyped, Typed } from "react-typed";

function Hero() {
  return (
    <div className="w-full bg-transparent py-16 px-4 md:my-5 my-[-30px] md:mb-0 mb-[40px] md:h-[77vh] h-[82vh]">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row">
        {" "}
        {/* flex-col-reverse : we used to make the image come above the text component */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-[rgb(226,119,34)] font-medium my-2 text-lg md:text-left text-center">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-left text-center">
          <ReactTyped 
            strings={["Fuel Your Learning :) ", "Unlock Your Potentia ;) ", "Find Your Perfect Tutor <3 ","Elevate Your Learning :) "]}
            className="md:text-5xl sm:text-4xl text-3xl font-bold py-2 text-[#18335D]"
            typeSpeed={85}
            backSpeed={40}
            loop
          />
          </h1>
          <p className="py-4 text-[16px] md:text-left text-center">
          Discover tailored learning experiences. Connect with skilled educators across subjects. Find your perfect match based on your goals, schedule, and preferences. Say goodbye to endless searching and hello to transformative learning.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start md:ml-[-10px]">
            <button className="text-white  bg-[rgb(226,119,34)] lg:w-[200px] md:w-[130px] w-[120px] rounded-md font-medium py-3 md:mx-3 mx-2 my-2">
              Sign Up
            </button>
            <button className="text-white bg-[rgb(226,119,34)] lg:w-[200px] md:w-[130px] w-[120px] rounded-md font-medium py-3 md:mx-3 mx-2 my-2">
              Sign In
            </button>
          </div>
        </div>
        <img
          src={home}
          alt="/"
          className="w-full md:w-[50%] mx-aut[rgb(226,119,34)]0px] md:my-4"
        />
      </div>
    </div>
  );
}

export default Hero;
