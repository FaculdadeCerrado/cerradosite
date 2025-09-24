import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import BannerHome from "../Components/BannerHome/BannerHome";
import FaqSection from "../Components/Faq/Faq";
import SearchCard from "../Components/SearchCard/SearchCard";
import NewsSection from "../Components/NewsSection/NewsSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  flex flex-col items-center ">
      <NavBar />
      <BannerHome />
      {/* <TourVirtual /> */}
      <SearchCard />
      <NewsSection />
      <FaqSection />
      {/* <Footer /> */}
    </main>
  );
}
