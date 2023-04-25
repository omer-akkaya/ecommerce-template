import Image from "next/image";

const Announcement = () => {
  return (
    <div>
      <div className="w-full bg-sky-100 text-gray-700 h-10 flex justify-center items-center">
        <div className="max-w-6xl flex-1 text-sm flex justify-between">
          <span className="flex items-center gap-x-2">
            <Image src={"/../public/1.png"} width={25} height={25} />
            250 TL ve üzeri alışverişlerinizde kargo ücretsiz!
          </span>
          <span className="flex items-center gap-x-2">
            <Image src={"/../public/2.png"} width={20} height={20} />
            Kargom nerede?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
