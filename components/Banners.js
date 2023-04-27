import Image from "next/image";
import React from "react";

const Banners = () => {
  return (
    <div className="max-w-6xl py-10 mx-auto flex justify-center items-center">
      <Banner id={1} />
      <Banner id={2} />
      <Banner id={3} />
      <Banner id={4} />
    </div>
  );
};

function Banner({ id }) {
  return (
    <div className="w-1/4 cursor-pointer relative group">
      <div
        className={`w-full h-full bg-black opacity-40 z-40 absolute hidden group-hover:block`}
      >
        adss
      </div>
      <Image src={`/banner_${id}.jpeg`} width={1000} height={1000} />
    </div>
  );
}

export default Banners;
