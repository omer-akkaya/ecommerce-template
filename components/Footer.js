import Image from "next/image";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-5 justify-between">
        <Col1 />
        <Col2 />
        <Col3 />
        <Col4 />
      </div>
      <Copyright />
    </>
  );
};

function Col1() {
  return (
    <div className="flex flex-col">
      <Image
        src={"/logo.jpeg"}
        width={151}
        height={60}
        className="mb-4 cursor-pointer select-none"
      />
      <div className="my-3">Bizi takip edin</div>
      <div className="flex text-3xl text-sky-500 gap-x-8 my-4 cursor-pointer select-none">
        <BsInstagram className="hover:text-black" />
        <BsLinkedin className="hover:text-black" />
        <BsYoutube className="hover:text-black" />
      </div>
    </div>
  );
}

function Col2() {
  return (
    <div className="flex flex-col">
      <Title>Hesabım</Title>
      <Subtitle>Hesap Numaralarımız</Subtitle>
      <Subtitle>İletişim Formu</Subtitle>
    </div>
  );
}

function Col3() {
  return (
    <div className="flex flex-col">
      <Title>Online Alışveriş</Title>
      <Subtitle>Alışveriş Bilgileri</Subtitle>
      <Subtitle>Mesafeli Satış Sözleşmesi</Subtitle>
    </div>
  );
}

function Col4() {
  return (
    <div className="flex flex-col">
      <Title>Müşteri Hizmetleri</Title>
      <Subtitle>İletişim</Subtitle>
      <Subtitle>Üyelik Bilgileri</Subtitle>
    </div>
  );
}

function Title({ children }) {
  return (
    <div className="text-lg my-2 selection:none cursor-pointer">{children}</div>
  );
}

function Subtitle({ children }) {
  return (
    <div className="text-gray-400 hover:text-sky-800 cursor-pointer select-none hover:underline text-sm my-2">
      {children}
    </div>
  );
}
function Copyright() {
  return <div className="w-full bg-sky-400 h-24 mt-10 "></div>;
}
export default Footer;
