import Image from "next/image";
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Modal = () => {
  const [modalShown, setModalShown] = useState(true);
  function clickHandler() {
    setModalShown(false);
  }
  return (
    <div
      data
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      className={`h-full w-full fixed z-10 left-0 top-0 flex justify-center items-center select-none ${
        modalShown ? "" : "hidden"
      }`}
      onClick={clickHandler}
    >
      <div className="flex flex-col z-20 bg-white justify-center items-center p-3 rounded-3xl shadow-xl relative">
        <GiCancel className="absolute top-0 right-0 text-6xl m-2 hover:bg-red-500 rounded-full cursor-pointer" />
        <Image src={"/../public/shorts_1.png"} width={500} height={500} />
        <div className="py-5 text-2xl font-semibold">
          TÜM ÜRÜNLERDE %25 İNDİRİM
        </div>
        <div className="pb-10 text-2xl">Sınırlı süreli bu fırsatı kaçırma!</div>
      </div>
    </div>
  );
};

export default Modal;
