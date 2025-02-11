import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";

function App() {
  return (
    <div className="h-dvh">
      <div
        className="relative h-[80vh] bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url(/gallary/1.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Social Icons (At the top) */}
        <div className="flex justify-center items-center gap-7 text-2xl text-white z-20 mt-20">
          <a href="http://">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
          <a href="http://">
            <FaLinkedin />
          </a>
        </div>

        {/* Navbar (20em from the top) */}
        <div className="navbar bg-base-100 shadow-sm  relative z-10 mt-10 w-[70%] rounded-4xl md:px-3.5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <a className="btn btn-ghost text-xl">
              <img
                src="/gallary/logo.png"
                width="50em"
                alt="Logo"
                className="rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="z-20 w-full flex flex-col mt-7 gap-10 items-center">
          <h1 className="text-3xl border-b-2 pb-1.5 mb-5 uppercase font-bold ">
            Responsive Designs
          </h1>
          <p className="uppercase sm:text-2xl md:text-3xl font-bold">
            download and use it for your website
          </p>
          <button className="btn btn-neutral hover:bg-white hover:text-black">
            Show More
          </button>
        </div>
        <div className="z-20 absolute -bottom-25 text-4xl animate-bounce">
          <FaCircleArrowDown className="btn btn-circle" />
        </div>
      </div>
    </div>
  );
}

export default App;
