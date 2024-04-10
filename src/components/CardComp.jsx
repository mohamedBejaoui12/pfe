import React from 'react'

function CardComp({price,heading,tab}) {
  return (
    <div class="flex flex-col p-6 mx-auto max-w-lg text-center   bg-white rounded-lg border border-[#18335D] shadow-[0_20px_40px_-15px_rgba(226,119,36,0.4)] xl:p-8 dark:bg-white dark:text-black">
              <h3 class="mb-4 text-2xl font-semibold text-[#18335D]">{heading}</h3>
              <p class="font-light text-gray-400">Best option for personal use & for your next seance.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold text-[#18335D]">{price} DT</span>
                  <span class="text-[rgb(226,119,36)]">/month</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">

                      <svg class="flex-shrink-0 w-5 h-5 text-[rgb(226,119,36)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">

                      <svg class="flex-shrink-0 w-5 h-5 text-[rgb(226,119,36)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{tab[0]}</span>
                  </li>
                  <li class="flex items-center space-x-3">

                      <svg class="flex-shrink-0 w-5 h-5 text-[rgb(226,119,36)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                     <span class="font-semibold">{tab[1]}</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-[rgb(226,119,36)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span class="font-semibold">{tab[2]}</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-[rgb(226,119,36)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                     <span class="font-semibold">{tab[3]}</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 bg-[rgb(226,119,36)] hover:scale-105 duration-200 ease-in-out">Get started</a>
          </div>
  )
}

export default CardComp