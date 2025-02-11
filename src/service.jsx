import { FaHtml5 } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
export function Service() {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <h1 className="uppercase text-4xl font-bold relative pb-4 after:w-full after:h-1.5 after:absolute after:bg-blue-400 after:bottom-0 after:left-0 after:rounded-2xl">
        Our services
      </h1>
      <p className="my-4">WE DESIGN MOBILE-FIRST WEBSITES FOR YOU</p>

      {/* Start Gallery */}
      <div className="flex max-sm:flex-col  max-sm:px-4 flex-nowrap justify-center gap-2 w-full  container">
        {/* Flip Card 1 */}
        <div className="flip-card max-sm:w-full sm:w-full md-w-[24%] ">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front flex justify-center items-center bg-white">
              <FaHtml5 className=" text-6xl text-[#e44d26]" />
            </div>
            {/* Back Side */}
            <div className="flip-card-back flex flex-col items-center justify-center p-4 text-[#e44d26] bg-white">
              <h2 className="text-xl font-bold">HTML5 CODING</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Flip Card 2 */}
        <div className="flip-card max-sm:w-full sm:w-full md-w-[24%] ">
          <div className="flip-card-inner">
            <div className="flip-card-front flex justify-center items-center  bg-white">
              <BiSupport className=" text-6xl text-green-400" />
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center p-4 text-green-400 bg-white">
              <h2 className="text-xl font-bold">OUR SUPPORT</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Flip Card 3 */}
        <div className="flip-card max-sm:w-full sm:w-full md-w-[24%] ">
          <div className="flip-card-inner">
            <div className="flip-card-front flex justify-center items-center  bg-white">
              <MdDesignServices className=" text-6xl text-blue-400" />
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center p-4 text-blue-400 bg-white">
              <h2 className="text-xl font-bold">OUR DESIGN</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        {/* flip card 4 */}
        <div className="flip-card max-sm:w-full sm:w-full md-w-[24%] ">
          <div className="flip-card-inner">
            <div className="flip-card-front flex justify-center items-center  bg-white">
              <FaMobile className=" text-6xl text-indigo-500" />
            </div>
            <div className="flip-card-back flex flex-col items-center justify-center p-4 text-indigo-500 bg-white">
              <h2 className="text-xl font-bold">GO FOR MOBILE</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
