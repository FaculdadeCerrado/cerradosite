import React, { useState } from "react";
import FullScreenBannerVideo from "../../Components/FullScreenBannerVideo/FullScreenBannerVideo";
import Banner from "../../Components/BannerHome/BannerHome";
import { HomeBanners } from "../../Data/BannerData.js";
import Footer from "../../Components/Footer/footer.jsx";
import Navbar from "../../Components/NavBar/NavBar";

export default function ClinicaEscola() {
  return (
    <main>
      <Navbar />
      <Banner images={HomeBanners} />
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
