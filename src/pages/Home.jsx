import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/footer.jsx";
import Banner from "../Components/BannerHome/BannerHome";
import FaqSection from "../Components/Faq/Faq";
import SearchCard from "../Components/SearchCard/SearchCard";
import NewsSection from "../Components/NewsSection/NewsSections";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import AboutSectionHome from "../Components/AboutSectionHome/AboutSectionHome";
import SectionSociais from "../Components/SectionSociais/SectionSociais";
import ComunicadosModal from "../Components/ComunicadosModal/ComunicadosModal.jsx";

import { getBanners } from "../service/bannerService";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getBanners("home").then((res) => {
      if (res.success) {
        setImages(res.banners);
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />

      <Banner images={images} />

      {/* <TourVirtual /> */}
      <ComunicadosModal />
      <SearchCard />
      <NewsSection />
      <SectionSociais />
      <AboutSectionHome />
      {/* <FaqSection /> */}
      <WhatsAppWidget />
      <Footer />
    </main>
  );
}

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
   -https://www.linkedin.com/in/gabrielsouto01
   -https://github.com/soutozk
   -https://www.instagram.com/soutozk/ */
