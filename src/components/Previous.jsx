import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Previous = ({ onClick }) => {
  return (
    <>
      <div className="absolute right-[50px] -top-[34px]" onClick={onClick}>
        <Link
          href="/"
          className=" inline-flex items-center rounded-l-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <IoIosArrowBack className="text-orange rounded-full w-7 h-7" />
        </Link>
      </div>
    </>
  );
};

export default Previous;
