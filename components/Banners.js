import React from "react";

const Banners = () => {
  return (
    <div className="max-w-6xl py-16 mx-auto flex justify-center items-center">
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="bg-red-100 border-2 border-black px-36 py-44 w-min"></div>
  );
};

export default Banners;
