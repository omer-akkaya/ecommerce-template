import { useState } from "react";

const PopularCategories = () => {
  return (
    <div>
      <Title />
      <Categories />
    </div>
  );
};

const Title = () => {
  return (
    <div className="max-w-6xl text-2xl mx-auto flex justify-center items-center mb-4 text-sky-950">
      <span className="border-b-4 border-dotted border-sky-900 w-80 text-center pb-4">
        Popüler Kategoriler
      </span>
    </div>
  );
};

const Categories = () => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex md:hidden justify-center items-center">
        <select className="bg-sky-500 w-3/4 px-8 py-4 rounded-3xl text-white">
          <option>Avantajlı Paketler</option>
          <option>Granola & Yulaf Ezmesi</option>
          <option>Kinoa Cips</option>
          <option>Raw Bites</option>
        </select>
      </div>

      <div className="hidden md:flex max-w-6xl text-2xl mx-auto justify-center items-center gap-x-10 px-5 lg:px-0">
        <Category
          title={"Avantajlı Paketler"}
          id={1}
          selected={selected}
          setSelected={setSelected}
        />
        <Category
          title={"Granola & Yulaf Ezmesi"}
          id={2}
          selected={selected}
          setSelected={setSelected}
        />
        <Category
          title={"Kinoa Cips"}
          id={3}
          selected={selected}
          setSelected={setSelected}
        />
        <Category
          title={"Raw Bites"}
          id={4}
          selected={selected}
          setSelected={setSelected}
        />
        <Category
          title={"Cracks"}
          id={5}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

const Category = ({ title, id, selected, setSelected }) => {
  function clickHandler() {
    setSelected(id);
  }
  return (
    <div
      onClick={clickHandler}
      className={`text-sky-500 text-base rounded-3xl py-2 px-8 mb-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer select-none ${
        selected == id ? "bg-sky-500 text-white" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default PopularCategories;
