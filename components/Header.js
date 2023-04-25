import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3Fill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="max-w-6xl flex justify-between items-center h-24 mx-auto">
      <Logo />
      <SearchBox />
      <Icons />
    </div>
  );
};

const Logo = () => {
  return (
    <span className="text-4xl font-semibold w-2/12  text-sky-700 font-sans select-none cursor-pointer">
      Logo
    </span>
  );
};

const SearchBox = () => {
  const placeholder = "Ürünün adını ya da stok kodunun yazınız.";
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="px-6 py-2 outline-none rounded-md w-7/12 border-[1px] border-sky-200 shadow-sm focus:border-black"
      ></input>
      <AiOutlineSearch className="text-3xl relative right-10" />
    </>
  );
};

const Icons = () => {
  return (
    <div className="w-3/12 flex justify-between pl-20">
      <Circle icon={<AiOutlineStar />} />
      <Circle icon={<AiOutlineUser />} />
      <Circle icon={<BsBasket3Fill />} />
    </div>
  );
};

const Circle = ({ icon }) => {
  return (
    <div className="bg-sky-100 hover:bg-sky-700 hover:text-white cursor-pointer transition-all rounded-full p-3 text-2xl">
      {icon}
    </div>
  );
};

export default Header;
