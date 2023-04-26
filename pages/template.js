import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import Shorts from "@/components/Shorts";
import Banners from "@/components/Banners";
import PopularCategories from "@/components/PopularCategories";
import SimpleSlider from "@/components/SimpleSlider";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { useState } from "react";

const template = () => {
  return (
    <>
      <Modal />
      <Announcement />
      <Header />
      <Categories />
      <Slider />
      <Shorts />
      <Banners />
      <PopularCategories />
      <SimpleSlider />
      <InfoCards />
      <Footer />
    </>
  );
};

export default template;
