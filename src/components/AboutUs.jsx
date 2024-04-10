import React,{useState} from 'react';
import AboutUsCard from './AboutUsCard';

function AboutUs() {

  let [pColor,setPColor]=useState('rgb(226,119,36)');
  let [sColor,setsColor]=useState('#18335D');
  return (
    <div className="mx-auto max-w-[1840px] px-6">
      <div className=" my-8">
        <h2 className="text-center tracking-tight font-extrabold m-2 md:mt-0 text-4xl text-[#18335D]">About Us</h2>
        <p className="text-[rgb(226,119,36)] text-center mb-8">Learn more about our team and what we do.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AboutUsCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AboutUsCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AboutUsCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AboutUsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
