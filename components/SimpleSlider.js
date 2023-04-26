import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { popularProducts } from "@/public/popularProducts";
import Image from "next/image";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  };
  return (
    <div className="max-w-6xl mx-auto my-5">
      <Slider {...settings}>
        {popularProducts.map(({ title, photoUrl, price }) => {
          return (
            <SingleProduct title={title} photoUrl={photoUrl} price={price} />
          );
        })}
      </Slider>
    </div>
  );
}

function SingleProduct({ title, photoUrl, price }) {
  return (
    <div className="flex justify-center cursor-pointer select-none">
      <div className="w-64 flex flex-col bg-slate-50 py-2 rounded-lg hover:bg-slate-200 transition-all ">
        <div className="flex justify-center items-center mt-1">
          <Image src={photoUrl} width={200} height={200} />
        </div>
        <div className="text-center mt-4 my-8">{title}</div>
        <div className="text-center border-dashed border-t-2 border-slate-300 py-2 relative bottom-0 text-lg">
          {price}
        </div>
      </div>
    </div>
  );
}
