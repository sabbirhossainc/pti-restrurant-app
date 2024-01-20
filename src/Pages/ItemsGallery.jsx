import axios from "axios";
import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Next from "../components/Next";
import Previous from "../components/Previous";

export const ItemsGallery = () => {
  const [items, setItems] = useState();
  const [isError, setIsError] = useState("");

  const callAxios = async () => {
    axios
      // .get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        const getItems = response.data.Items;
        setItems(getItems);
        console.log(getItems);
      })
      .catch((er) => setIsError(er.message));
  };

  useEffect(() => {
    callAxios();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <Next />,
    prevArrow: <Previous />,
  };

  return (
    <>
      <div className="bg-transparent">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="inline-flex items-center font-sans gap-x-2">
            <div className="flex justify-start">
              <h2 className="text-2xl font-serif tracking-tight text-gray-900">
                Popular
              </h2>

              <div className="absolute right-28 md:right-48 lg:right-[8rem] rounded-l-md hover:bg-gray-50">
                <Link
                  href="/"
                  className="relative inline-flex items-center rounded-l-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <span className="text-lg font-sans text-orange px-1">
                    Add More
                  </span>
                  <IoAddOutline className="text-orange rounded-full w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-x-6 gap-y-10 ">
            <Slider {...settings}>
              {isError !== "" && <h2>{isError}</h2>}
              {items &&
                items
                  .filter((product) => {
                    return product.IsRecommended == true ? (
                      product
                    ) : (
                      <h1 className="font-bold">No data!</h1>
                    );
                  })
                  .map((product) => {
                    return (
                      <div key={product.Id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={product.ImageUrl}
                            alt={product.Name}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <Link to={`/details/${product.Id}`}>
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                <span>Title:</span>
                                <strong>{product.Name}</strong>
                              </Link>
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            <span>Price:</span>
                            <strong>{product.Price} BDT</strong>
                          </p>
                        </div>
                      </div>
                    );
                  })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-transparent">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="inline-flex items-center font-sans gap-x-2">
            <div className="flex justify-start">
              <h2 className="text-2xl font-serif tracking-tight text-gray-900">
                Popular
              </h2>

              <div className="absolute right-28 md:right-48 lg:right-[8rem] rounded-l-md hover:bg-gray-50">
                <Link
                  href="/"
                  className="relative inline-flex items-center rounded-l-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <span className="text-lg font-sans text-orange px-1">
                    Add More
                  </span>
                  <IoAddOutline className="text-orange rounded-full w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-x-6 gap-y-10 ">
            <Slider {...settings}>
              {isError !== "" && <h2>{isError}</h2>}
              {items &&
                items
                  .filter((product) => {
                    return product.IsRecommended == true ? (
                      product
                    ) : (
                      <h1 className="font-bold">No data!</h1>
                    );
                  })
                  .map((product) => {
                    return (
                      <div key={product.Id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={product.ImageUrl}
                            alt={product.Name}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <Link to={`/details/${product.Id}`}>
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                <span>Title:</span>
                                <strong>{product.Name}</strong>
                              </Link>
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            <span>Price:</span>
                            <strong>{product.Price} BDT</strong>
                          </p>
                        </div>
                      </div>
                    );
                  })}
            </Slider>
          </div>
        </div>
      </div>

    </>
  );
  // }
};

export default ItemsGallery;
