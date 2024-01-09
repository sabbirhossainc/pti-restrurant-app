import { FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import footerImg from "../assets/Image2.png";

const Footer = () => {
  return (
    <>
      <footer className="body-font"></footer>
      <div className="hidden md:block lg:block container place-content-center place-items-center mx-auto max-w-full -mb-10">
        <div className="grid grid-cols-6 gap-6 h-auto items-center bg-orange-light lg:px-28 md:px-12 rounded-b-3xl gap-x-6">
          <div className="col-start-1 col-end-3  row-span-4 h-auto w-full">
            <div className="relative text-2xl lg:text-5xl md:text-4xl font-bold text-gray-100 md:py-5 lg:py-3 h-46 md:h-28 w-[25rem] lg:w-[30rem]">
              <form>
                <div className="flex justify-start">
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="block w-96 h-auto rounded-xl border-0 py-3 px-7 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-orange outline-none sm:text-sm sm:leading-6"
                      placeholder="Enter Your Email"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="relative items-center inline-flex rounded-xl bg-orange hover:bg-orange-light end-0 w-40 h-10 px-3 mr-2">
                        <button
                          target="_blank"
                          className="text-white border-0 px-2 font-serif focus:outline-none rounded-xl text-base overflow-auto"
                          aria-hidden="true"
                        >
                          Subscribe
                        </button>
                        <FaArrowRightLong className="text-gray-200 rounded-full w-7 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="relative md:text-base font-bold font-serif text-gray-900 py-4 md:py-2 lg:py-6 h-18 md:w-96 lg:w-[35rem]">
              <p className="font-serif text-3xl py-1">
                pti<strong className="font-bold text-orange">.</strong>
              </p>
              <div className="container py-2 mx-auto flex items-center sm:flex-row flex-col">
                <p>
                  Copyright<span>©</span> Trip.{" "}
                  <br className="lg:hidden md:block" /> All Right Reserved
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
                  <a
                    target="_blank"
                    href="#"
                    className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                  >
                    <FaGoogle className="text-orange  w-8 h-8" />
                  </a>
                  <a
                    target="_blank"
                    href="#"
                    className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                  >
                    <FaTwitter className="text-orange  w-8 h-8" />
                  </a>
                  <a
                    target="_blank"
                    href="#"
                    className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                  >
                    <FaInstagram className="text-orange  w-8 h-8" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-start-4 col-end-7 row-span-4 md:w-auto lg:h-82 md:h-62 h-46 items-center lg:px-0 md:px-2">
            <img
              src={footerImg}
              className="object-scale-down object-center items-end  overflow-x-visible"
              alt="hero-image"
            />
          </div>
        </div>
      </div>

      {/*  moble view  */}

      <div className="sm:block md:hidden lg:hidden flex place-content-center place-items-center mx-auto max-w-full -mb-10">
        <div className="flex flex-wrap h-auto justify-around bg-orange-light px-3 rounded-b-3xl gap-2">
          <div className="flex-1 h-auto w-full items-center">
            <div className="relative text-2xl font-bold text-center text-gray-100 pt-7 h-46 w-auto">
              <form>
                <div className="flex justify-around">
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="block w-80 h-auto rounded-xl border-0 py-3 px-4 pr-20 text-gray-900 font-bold text-sm focus:ring-2 focus:ring-orange outline-none"
                      placeholder="Enter Your Email"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="relative items-center inline-flex rounded-xl bg-orange hover:bg-orange-light end-0 w-28 h-9 px-3 mr-2">
                        <button
                          target="_blank"
                          className="text-white border-0 font-serif focus:outline-none rounded-xl text-sm overflow-auto"
                          aria-hidden="true"
                        >
                          Subscribe
                        </button>
                        <FaArrowRightLong className="text-gray-200 rounded-full w-5 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="relative font-bold text-center font-serif text-gray-900 pt-2 h-18 w-full">
              <p className="font-serif text-3xl py-3">
                pti<strong className="font-bold text-orange">.</strong>
              </p>
              <p>
                Copyright<span>©</span> Trip. All Right Reserved
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
                <a
                  target="_blank"
                  href="#"
                  className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                >
                  <FaGoogle className="text-orange  w-8 h-8" />
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                >
                  <FaTwitter className="text-orange  w-8 h-8" />
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="size-10 inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-orange-light rounded-full"
                >
                  <FaInstagram className="text-orange  w-8 h-8" />
                </a>
              </span>
            </div>
          </div>

          <div className="flex-wrap justify-around columns-1">
            <img
              src={footerImg}
              className="size-28  object-scale-down overflow-auto my-2"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
