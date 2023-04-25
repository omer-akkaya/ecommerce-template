import React from "react";
import CategoryArray from "@/public/CategoryArray";

const Shorts = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 flex justify-between">
      {CategoryArray.map(({ title }) => {
        return <SingleShort title={title} />;
      })}
    </div>
  );
};

const SingleShort = ({ title }) => {
  return (
    <div className="flex flex-col w-min justify-center items-center">
      <div className="p-16 bg-sky-500 rounded-full my-3"></div>
      <div className="whitespace-nowrap text-sky-900 text-sm">{title}</div>
    </div>
  );
};

export default Shorts;
