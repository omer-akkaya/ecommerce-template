import { TbTruckDelivery } from "react-icons/tb";
import { HiDocumentSearch } from "react-icons/hi";

const Announcement = () => {
  return (
    <div>
      <div className="w-full bg-sky-100 text-gray-400 h-14 flex justify-center items-center">
        <div className="max-w-6xl flex-1 text-sm flex md:justify-between justify-center px-5 lg:px-0">
          <span className="flex items-center gap-x-2 hover:text-sky-900 transition-all select-none cursor-pointer hover:underline ">
            <TbTruckDelivery className="text-3xl mr-1" /> 250 TL ve üzeri
            alışverişlerinizde kargo ücretsiz!
          </span>
          <span className="md:flex items-center gap-x-2 hover:text-sky-900 transition-all select-none cursor-pointer hover:underline hidden">
            <HiDocumentSearch className="text-2xl mr-1" /> Kargom nerede?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
