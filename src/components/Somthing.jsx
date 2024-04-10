import React from 'react';
import some from '../assets/some.jpg';

function Something() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-cover bg-fixed bg-center bg-no-repeat md:h-[40vh] h-[45vh]" style={{ backgroundImage: `url(${some})` }}>
        <div className='max-w-[1240px]'>
             <h1 className="text-center tracking-tight font-extrabold m-2 md:mt-0 md:text-4xl text-3xl text-[#18335D]">
          {" "}
          Where Teachers and Students Meet Their Perfect Match
        </h1>
        <p className="text-center  mt-[40px] font-bold  sm:text-2xl md:px-0 px-3 ">
        <span className='font-bold text-2xl text-red-600'>"</span> Our platform simplifies the search for ideal mentors and students, bringing together educators and learners effortlessly.  ensures seamless connections, fostering productive learning relationships. Say hello to effortless guidance, where educators and students find their perfect match with ease. <span className='font-bold text-2xl text-red-600'> "</span>
        </p>
        </div>

       
    </div>
  );
}

export default Something;
