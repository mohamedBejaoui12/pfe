import { Input } from "@material-tailwind/react";


function Form() {
  return (
    <div className="w-[100%] ">
 <div className="md:block hidden md:mt-0 mt-3 ">
    <svg data-name="Layer 1"  className="fill-current text-[#FCECDB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="fill-current text-[#FCECDB]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="mt-[-20px]">
        <h1 className="text-center tracking-tight font-extrabold m-2 md:mt-0 text-4xl text-[#18335D]">
          {" "}
          Lets Talk 
        </h1>
        <p className="text-center mt-3 font-medium text-[rgb(226,119,36)] sm:text-xl md:px-0 px-3 md:mb-[40px] mb-[10px]">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deleniti 
        </p>
      </div>
      <div className="md:flex flex-row-reverse block  md:w-[90%]  p-2 md:justify-center flex-wrap">
        <div className="md:w-[40%] w-[70%] m-auto my-4">
          <h1 className="font-bold mb-2 text-2xl  text-[rgb(226,119,36)]">
            {" "}
            <i className="fa-solid fa-umbrella-beach"></i> Project Name
          </h1>
          <p className="py-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniamco laboris nisunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-2 flex gap-2 justify-center w-fit items-center">
            <i className="fa-solid fa-building my-2 pr-1 text-[rgb(226,119,36)]"></i>ariana mnihla 
          </div>
          <div className="md:mb-0 mb-[40px]">
          <div className="mt-2 flex gap-2 justify-center w-fit items-center">
            <i className="fa-solid fa-phone my-2 pr-1 text-[rgb(226,119,36)]"></i> +216 12 345 678
          </div>
          <div className="mt-2 flex gap-2 justify-center w-fit items-center">
            <i className="fa-solid fa-envelope my-2 pr-1 text-[rgb(226,119,36)]"></i> bejaouihama1253@gmail.com
          </div>
          </div>
        </div>
        <div className="md:w-[40%] w-[70%] m-auto mb-4">
          <div className="flex gap-3 w-[100%]">
            <div className="flex flex-col md:w-[50%] w-[47.5%] mb-2">
              <label className="text-[#18335D] font-medium">First name</label>
              <input
                className="border border-solid border-[#18335D] p-2 rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col md:w-[50%] w-[47.5%] mb-2">
              <label className="text-[#18335D] font-medium">Last name</label>
              <input
                className="border border-solid border-[#18335D] p-2 rounded-md"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-[#18335D] font-medium">Email</label>
            <input
              className="border border-solid border-[#18335D] p-2 rounded-md"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-[#18335D] font-medium">Message</label>
            <textarea
              className="border border-solid border-[#18335D] p-2 rounded-md"
              rows={5}
              wrap=""
            />
          </div>
          <div>
            <button className=" w-[100%] rounded-md bg-[rgb(226,119,36)] p-3 text-white font-semibold  mt-2">
              Let's Talk
            </button>
          </div>
          <div className="my-4">
            <p>
              By submitting this form, I agree to the{" "}
              <span className="text-[rgb(226,119,36)]">privace policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
