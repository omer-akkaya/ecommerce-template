import Image from "next/image";
import React, { useEffect, useState } from "react";
import CategoryArray from "@/public/CategoryArray";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="max-w-6xl mx-auto hidden md:flex justify-center overflow-scroll md:overflow-auto">
      {CategoryArray.map(({ id, title, image }) => {
        return (
          <SingleCategory
            id={id}
            title={title}
            image={image}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </div>
  );
};

const SingleCategory = ({
  id,
  title,
  image,
  selectedCategory,
  setSelectedCategory,
}) => {
  function clickHandler() {
    setSelectedCategory(id);
  }
  return (
    <div
      className={`flex flex-col justify-center items-center w-min px-8 pt-1 pb-4 rounded-t-3xl hover:bg-sky-500 transition-all group cursor-pointer select-none
      ${id == selectedCategory ? "bg-sky-500" : null}`}
      onClick={clickHandler}
    >
      <Image
        src={image}
        width={50}
        height={50}
        className="bg-white rounded-full p-2"
      />
      <div
        className={`whitespace-nowrap text-sm mt-1 text-sky-700 group-hover:text-white transition-all font-medium ${
          id == selectedCategory ? "text-white" : null
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Categories;
