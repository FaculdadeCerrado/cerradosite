import React, { useEffect, useState } from "react";
import FullScreenBannerVideo from "../../Components/FullScreenBannerVideo/FullScreenBannerVideo";
import Banner from "../../Components/BannerHome/BannerHome";
import Footer from "../../Components/Footer/footer.jsx";
import Carrosel from "../../Components/Carrosel/Carrosel.jsx";
import AboutClinic from "../../Components/AboutClinic/AboutClinic.jsx";
import ProjectsSection from "../../Components/ProjectsSection/ProjectsSection.jsx";
import { getBanners } from "../../service/bannerService";
import NavBar from "../../Components/NavBar/NavBarClinica";
import Faq from "../../Components/Faq/Faq.jsx";
import bannerclinica from "../../images/bannerclinica2.png";
import { CalendarClock } from "lucide-react";

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
      <NavBar />
      <Banner images={images} />
      <div id="sobre">
        <AboutClinic />
      </div>
      <Carrosel />
      <Faq />
      <div id="projetos">
        <ProjectsSection />
      </div>

      <div
        className="w-full h-[70vh] md:h-[85vh] relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerclinica})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-white text-center px-4 max-w-4xl">
          <a href="">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-7 py-4 rounded-2xl shadow-xl mb-7 inline-flex items-center gap-3">
              <CalendarClock className="w-7 h-7 text-white drop-shadow" />
              <span className="text-xl md:text-3xl font-semibold">
                Faça seu agendamento agora
              </span>
            </div>
          </a>
        </div>
      </div>

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
