import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3Fill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  return (
    <div className="max-w-6xl flex justify-between items-center h-24 mx-auto">
      <Logo />
      <SearchBox />
      <Icons />
      <Drawer />
    </div>
  );
};

const Logo = () => {
  return (
    <Image
      src={"/../public/logo.jpeg"}
      width={200}
      height={200}
      className="w-36 mr-16 cursor-pointer select-none ml-4 md:ml-0"
    />
  );
};

const SearchBox = () => {
  const placeholder = "Ürünün adını ya da stok kodunun yazınız.";
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="hidden md:block px-6 py-2 outline-none rounded-md w-7/12 border-[1px] border-sky-200 shadow-sm focus:border-black"
      ></input>
      <AiOutlineSearch className="hidden md:block text-3xl relative right-10" />
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
    <div className="hidden md:block bg-sky-100 hover:bg-sky-700 hover:text-white cursor-pointer transition-all rounded-full p-3 text-2xl">
      {icon}
    </div>
  );
};

const Drawer = () => {
  return (
    <GoThreeBars className="md:hidden text-5xl mr-4 hover:bg-sky-500 hover:text-white rounded-full p-2 transition-all cursor-pointer" />
  );
};

export default Header;
