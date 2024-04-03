import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Features() {
  return (

    <div className='w-full bg-[#FCECDB] py-16 px-4 lg:my-[-20px] md:my-[20px] my-0'>
    <h1 className='my-3 font-bold text-[#18335D] md:text-[40px] text-3xl text-center md:ml-[70px] md:mb-[45px] mb-4'>Features </h1>
   
    <div className=' md:flex justify-center items-center mx-auto grid md:grid-cols-3 gap-8'>
      
      
      <Card className="mt-6 w-96 rounded-lg overflow-hidden shadow-md  m-3 p-3">
        <CardBody className="flex flex-col justify-center items-center py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-[rgb(226,119,34)]"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h3"  className="my-3 font-bold text-[#18335D] md:text-3xl text-2xl text-left">
            Personalized Tutor Matching
          </Typography>
          <Typography className="text-left font-medium my-2 ">
          "Our advanced algorithms match you with the perfect educator based on your goals, preferences, and schedule. Say goodbye to generic solutions and hello to tailored learning."
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-left items-center">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center hover:scale-105 duration-150 ease gap-2 text-[#18335D]">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 rounded-lg overflow-hidden shadow-md  m-3 p-3">
        <CardBody className="flex flex-col justify-center items-center py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-[rgb(226,119,34)]"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h3"  className="my-3 font-bold text-[#18335D] md:text-3xl text-2xl text-left">
          Skilled Educators Network
          </Typography>
          <Typography className="text-left font-medium my-2">
          "Access a diverse network of experienced educators spanning various subjects and disciplines. Our teachers undergo rigorous screening to ensure you receive top-quality instruction tailored to your needs."
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-left items-center">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center hover:scale-105 duration-150 ease gap-2 text-[#18335D]">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 rounded-lg overflow-hidden shadow-md  m-3 p-3">
        <CardBody className="flex flex-col justify-center items-center py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-[rgb(226,119,34)]"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h3"  className="my-3 font-bold text-[#18335D] md:text-3xl text-2xl text-left">
          Customizable Learning Paths
          </Typography>
          <Typography className="text-left font-medium my-2">
          "Choose from a variety of learning formats, including one-on-one sessions, group classes, and self-paced modules. With flexible scheduling and adaptable lesson plans, you have the freedom to learn on your terms."
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-left items-center">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center hover:scale-105 duration-150 ease gap-2 text-[#18335D]">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 rounded-lg overflow-hidden shadow-md  m-3 p-3">
        <CardBody className="flex flex-col justify-center items-center py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-[rgb(226,119,34)]"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h3"  className="my-3 font-bold text-[#18335D] md:text-3xl text-2xl text-left">
          Empowering Learning Experiences
          </Typography>
          <Typography className="text-left font-medium my-2">
          "Experience a transformative journey of growth and development with engaging lessons designed to ignite your curiosity and fuel your passion for learning. Join a supportive community committed to your success."
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-left items-center">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center hover:scale-105 duration-150 ease gap-2 text-[#18335D]">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
      

   
    </div>
    </div>
  );
}

export default Features;
