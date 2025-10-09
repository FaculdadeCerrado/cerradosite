import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/BannerHome/BannerHome";
import FaqSection from "../Components/Faq/Faq";
import SearchCard from "../Components/SearchCard/SearchCard";
import NewsSection from "../Components/NewsSection/NewsSections";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import AboutSectionHome from "../Components/AboutSectionHome/AboutSectionHome";
import SectionSociais from "../Components/SectionSociais/SectionSociais";
import { HomeBanners } from "../Data/BannerData.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  flex flex-col items-center ">
      <NavBar />
      <Banner images={HomeBanners} />
      {/* <TourVirtual /> */}
      <SearchCard />
      <NewsSection />
      <SectionSociais />
      <AboutSectionHome />
      {/* <FaqSection /> */}
      <WhatsAppWidget />
      {/* <Footer /> */}
    </main>
  );
}
