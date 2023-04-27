import { useContext } from "react";
import { SidebarContext } from "@/pages/index";

export default function Sidebar() {
  const { sidebarShown, setSidebarShown } = useContext(SidebarContext);

  function clickHandler() {
    setSidebarShown(!sidebarShown);
  }

  return (
    <>
      <div
        onClick={clickHandler}
        className={`w-full h-full bg-black z-30 opacity-60 ${
          sidebarShown ? "fixed" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute z-40 h-full w-3/12 bg-white right-0 p-10 ${
          sidebarShown ? "" : "hidden"
        }`}
      >
        <Sepet />
      </div>
    </>
  );
}

function Sepet() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="font-sans text-2xl font-semibold">
        Hoş Geldiniz{" "}
        <div className="font-sans font-normal text-xl">
          Hızlı ve güvenli alışverişe giriş yapın!
        </div>
      </div>

      <div className="font-sans text-2xl w-full bg-green-950 text-white p-4 rounded-3xl text-center  cursor-pointer select-none hover:text-black hover:bg-yellow-400 transition-all">
        Üye ol
      </div>
      <div className="font-sans text-2xl w-full bg-sky-950 text-white p-4 rounded-3xl text-center cursor-pointer select-none hover:text-black hover:bg-yellow-400 transition-all">
        Giriş Yap
      </div>
    </div>
  );
}
