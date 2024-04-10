import { Card } from "@material-tailwind/react";
import React from "react";
import CardComp from "./CardComp";

function Pricing() {
  return (
    <div>
    
   

        
      <section class="bg-white mt-[-20px]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#18335D]">
              Designed for business teams like yours
            </h2>
            <p class="mb-5 font-medium text-[rgb(226,119,36)] sm:text-xl ">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <CardComp
              price="99"
              heading="Lorem ipsum dolor sit amet"
              tab={[
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
              ]}
            />
            <CardComp
              price="199"
              heading="Lorem ipsum dolor sit amet"
              tab={[
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
              ]}
            />
            <CardComp
              price="299"
              heading="Lorem ipsum dolor sit amet"
              tab={[
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
              ]}
            />
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden leading-0 mt-[-30px] md:block hidden">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path className="fill-current text-[#FCECDB] " d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
</svg>

</div>

    </div>
  );
}

export default Pricing;
