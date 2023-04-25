const PopularCategories = () => {
  return (
    <div>
      <Title />
      <Categories />
      <Products />
    </div>
  );
};

const Title = () => {
  return (
    <div className="max-w-6xl text-2xl mx-auto flex justify-center items-center mb-5">
      Popüler Kategoriler
    </div>
  );
};

const Categories = () => {
  return (
    <div className="max-w-6xl text-2xl mx-auto flex justify-center items-center gap-x-10">
      <Category title={"Avantajlı Paketler"} />
      <Category title={"Granola & Yulaf Ezmesi"} />
      <Category title={"Kinoa Cips"} />
      <Category title={"Raw Bites"} />
      <Category title={"Cracks"} />
    </div>
  );
};

const Category = ({ title }) => {
  return (
    <div className="border-2 border-sky-500 text-sky-500 text-base rounded-3xl py-2 px-8 mb-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer select-none">
      {title}
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-6xl text-2xl mx-auto flex justify-center items-center">
      <Product />
      <Product />
    </div>
  );
};

const Product = () => {
  return (
    <div className="bg-gray-100">
      <div>Foto</div>
      <div>9lu tanaışma paketi</div>
      <div>265,00 TL</div>
    </div>
  );
};
export default PopularCategories;

const popularProducts = [
  { title: "9'lu Tanışma Paketi", price: "265,00 TL", photoUrl: "" },
  { title: "Glutensiz Parti Paketi", price: "169,00 TL", photoUrl: "" },
  { title: "15'li Mega Paket", price: "545,00 TL", photoUrl: "" },
  { title: "Glutensiz Kahvaltı Paketi", price: "168,00 TL", photoUrl: "" },
];
