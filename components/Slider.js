import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
  return <SimpleSlider />;
};

export default SliderComponent;

function SimpleSlider() {
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };
  return (
    <div className="w-full mb-10 cursor-pointer select-none">
      <Slider {...settings} className="">
        <Image src={"/slick_1.jpeg"} width={2000} height={2000} className="" />{" "}
        <Image src={"/slick_2.jpeg"} width={2000} height={2000} className="" />
      </Slider>
    </div>
  );
}
