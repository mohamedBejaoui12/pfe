import React from 'react';
import Img from '../assets/persone.jpg';

function AboutUsCard() {
  return (
    <div className='mx-4 my-4'>
      <a href="#" className="flex flex-col items-center mx-4 bg-white border rounded-lg shadow md:flex-row md:max-w-xl  ">
        <img className="object-cover rounded-full w-48 md:mt-0 md:ml-4 ml-0 mt-5 h-48 md:w-32 md:h-32" src={Img} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight md:text-left text-center text-[rgb(226,119,36)]">Persone Name</h5>
          <p className="mb-3 font-normal md:text-left text-center text-gray-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eius tenetur quasi quis ipsam ad blanditiis quisquam vel voluptas placeat..</p>
        </div>
      </a>
    </div>
  );
}

export default AboutUsCard;
