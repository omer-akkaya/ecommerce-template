import Image from "next/image";
import { infoCardsSrc } from "@/public/infoCardsSrc";

const InfoCards = () => {
  return (
    <div className="px-5 md:px-0 flex flex-wrap max-w-6xl mx-auto justify-between my-16">
      {infoCardsSrc.map(({ title, imageUrl }) => {
        return <SingleCard title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

function SingleCard({ title, imageUrl }) {
  return (
    <div className="bg-sky-100 py-4 m-2 px-6 w-44 justify-center items-center rounded-2xl hover:bg-sky-500 hover:text-white transition-all select-none cursor-pointer">
      <div className="flex justify-center items-center">
        <Image
          width={80}
          height={80}
          src={imageUrl}
          className="rounded-full bg-white p-4 "
        />
      </div>
      <div className="text-center mt-4 text-sm">{title}</div>
    </div>
  );
}

export default InfoCards;
