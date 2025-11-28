import React, { useEffect, useState } from "react";
import FullScreenBannerVideo from "../../Components/FullScreenBannerVideo/FullScreenBannerVideo";
import Banner from "../../Components/BannerHome/BannerHome";
import { HomeBanners } from "../../Data/BannerData.js";
import Footer from "../../Components/Footer/footer.jsx";
import Navbar from "../../Components/NavBar/NavBar";
import Carrosel from "../../Components/Carrosel/Carrosel.jsx";
import AboutClinic from "../../Components/AboutClinic/AboutClinic.jsx";
import ProjectsSection from "../../Components/ProjectsSection/ProjectsSection.jsx";
import { getBanners } from "../../service/bannerService";

export default function ClinicaEscola() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getBanners("ClinicaEscola").then((res) => {
      if (res.success) {
        setImages(res.banners);
      }
    });
  }, []);
  return (
    <main>
      {/* <NavBar />*/}
      <Banner images={images} />
      <AboutClinic />
      <Carrosel />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
