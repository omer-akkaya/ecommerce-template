import Image from "next/image";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3Fill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import CategoryArray from "@/public/CategoryArray";
import { useContext } from "react";
import { SidebarContext } from "@/pages/index";

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
  const { sidebarShown, setSidebarShown } = useContext(SidebarContext);

  function onClick() {
    setSidebarShown(!sidebarShown);
  }
  return (
    <div className="w-3/12 flex justify-between pl-20">
      <Circle onClick={onClick} icon={<AiOutlineStar />} />
      <Circle onClick={onClick} icon={<AiOutlineUser />} />
      <Circle onClick={onClick} icon={<BsBasket3Fill />} />
    </div>
  );
};

const Circle = ({ onClick, icon }) => {
  return (
    <div
      onClick={onClick}
      className="hidden md:block bg-sky-100 hover:bg-sky-700 hover:text-white cursor-pointer transition-all rounded-full p-3 text-2xl text-sky-500"
    >
      {icon}
    </div>
  );
};

const Drawer = () => {
  const [modalShown, setModalShown] = useState(false);

  function clickHandler() {
    setModalShown((previousState) => {
      return !previousState;
    });
  }

  return (
    <>
      <GoThreeBars
        onClick={clickHandler}
        className={`md:hidden text-5xl mr-4 hover:bg-sky-500 hover:text-white rounded-full p-2 transition-all cursor-pointer ${
          modalShown && "hidden"
        }`}
      />
      <GiCancel
        onClick={clickHandler}
        className={`md:hidden text-5xl mr-4 hover:bg-red-500 hover:text-white rounded-full p-2 transition-all cursor-pointer ${
          modalShown ? "block" : "hidden"
        }`}
      />
      <Modal modalShown={modalShown} />
    </>
  );
};

function Modal({ modalShown }) {
  return (
    <div
      className={`md:hidden w-full h-full fixed top-36 left-0 z-10 bg-sky-900 ${
        modalShown ? "block" : "hidden"
      } flex flex-col justify-start items-center p-10`}
    >
      {CategoryArray.map(({ title }) => {
        return (
          <div className="text-white text-3xl my-5 pb-4 border-b-4 w-full text-center border-white hover:border-black hover:text-black cursor-pointer">
            {title}
          </div>
        );
      })}
    </div>
  );
}
export default Header;
