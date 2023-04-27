import CategoryArray from "@/public/CategoryArray";
import Image from "next/image";

const Shorts = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 flex justify-between overflow-scroll md:overflow-visible">
      {CategoryArray.map(({ title, shorts }) => {
        return <SingleShort title={title} shorts={shorts} />;
      })}
    </div>
  );
};

const SingleShort = ({ title, shorts }) => {
  return (
    <div className="flex flex-col w-min justify-center items-center group cursor-pointer">
      <div className="flex justify-center items-center w-36 h-36 bg-sky-500 group-hover:bg-sky-900 group-hover:ring-4 group-hover:ring-black transition-all rounded-full p-3 mb-4">
        <Image src={shorts} width={1000} height={1000} />
      </div>
      <div className="whitespace-nowrap text-sky-900 text-sm group-hover:text-black group-hover:underline">
        {title}
      </div>
    </div>
  );
};

export default Shorts;
