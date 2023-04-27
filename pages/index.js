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
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import React, { useState } from "react";

export const SidebarContext = React.createContext();

const Home = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  function toggleSidebar() {
    return setSidebarShown(!sidebarShown);
  }

  return (
    <SidebarContext.Provider value={{ sidebarShown, setSidebarShown }}>
      <Sidebar />
      <Title />
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
    </SidebarContext.Provider>
  );
};

const Title = () => {
  return (
    <Head>
      <title>Glutensiz, ilave şekersiz, katkısız, vegan atıştırmalıklar!</title>
    </Head>
  );
};

export default Home;
