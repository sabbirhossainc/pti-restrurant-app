import ItemsGallery from "./ItemsGallery";
import heroImg from '../assets/Image1.png'


const Home = () => {
  return (
    <>
      <div className="hidden md:block lg:block container place-content-center place-items-center mx-auto max-w-7xl px-5 lg:py-32 md:py-16 gap-x-4 gap-y-3">
        <div className="grid grid-cols-6 gap-6 h-auto items-center bg-orange-light lg:px-28 md:px-12 rounded-3xl gap-x-6">
          <div className="col-start-1 col-end-3  row-span-4 h-auto w-full">
            <h1 className="relative text-2xl lg:text-5xl md:text-4xl font-bold text-gray-100 md:py-5 lg:py-3 h-46 md:h-28 w-[25rem] lg:w-[30rem]">
              Deliver Food <br className="sm:block lg:hidden" /> To Your
              <br className="md:hidden block lg:block" /> Door Step|
            </h1>
            <p className="relative lg:text-xl md:text-base font-serif text-gray-200 py-4 md:py-2 lg:py-6 h-18 w-[30rem]">
              Authentic Food | Quick Service,
              <br className="block md:hidden lg:hidden" /> Fast Delivery
            </p>
          </div>

          <div className="col-start-4 col-end-7 row-span-4 md:w-auto lg:h-82 md:h-62 h-46 items-center lg:px-0 md:px-2">
            <img
              src="./src/assets/Image1.png"
              className=" object-scale-down object-center items-end relative overflow-x-visible"
              alt="hero-image"
            />
          </div>
        </div>
      </div>

      {/*  moble view  */}

      <div className="sm:block md:hidden lg:hidden flex place-content-center place-items-center mx-auto max-w-7xl px-4 py-10 gap-2">
        <div className="flex flex-wrap h-auto items-center bg-orange-light px-3 rounded-3xl gap-2">
          <div className="flex-1 h-auto w-full items-center">
            <h1 className="relative text-2xl font-bold text-center text-gray-100 pt-7 h-46 w-auto">
              Deliver Food To Your
              <br className="md:hidden block lg:block" /> Door Step |
            </h1>
            <p className="relative text-base text-center font-serif text-gray-200 pt-2 h-18 w-full">
              Authentic Food | Quick Service,
              <br className="block md:hidden lg:hidden" /> Fast Delivery
            </p>
          </div>

          <div className="flex-wrap items-center h-46">
            <img
              src={heroImg}
              className="object-scale-down object-center items-end relative overflow-x-visible"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <ItemsGallery/>
    </>
  );
};

export default Home;
