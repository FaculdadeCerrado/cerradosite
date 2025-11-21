import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  Phone,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";
let Background =
  "https://gerenciador.faculdadecerrado.edu.br/uploads/LinkBio/bg-mobile-light_optimized_.webp";

export default function CerradoLinks() {
  const links = [
    {
      icon: <FileText size={18} />,
      label: "Vestibular – Faculdade Cerrado",
      href: "https://unicollege.net/cerrado/ps/cadastroinc.aspx",
    },
    {
      icon: <Globe size={18} />,
      label: "Acesse Nosso Site!",
      href: "https://faculdadecerrado.edu.br",
    },
    {
      icon: <Phone size={18} />,
      label: "Entre em Contato",
      href: "https://api.whatsapp.com/send/?phone=5561995838206&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${Background})`,
      }}>
      <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4  transition-colors duration-300">
        {/* PERFIL */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://gerenciador.faculdadecerrado.edu.br/uploads/Logo/Logo-Branca-943x1024.png"
            alt="logo"
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
          <p className="mt-3 text-lg font-bold text-white ">
            @faculdadecerrado
          </p>
        </div>

        {/* LISTA DE LINKS */}
        <ul className="w-full max-w-md space-y-4">
          {links.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-4 text-white bg-white/20 backdrop-blur-sm rounded-xl shadow border border-white hover:scale-[1.02] active:scale-[0.98] transition-all">
                {item.icon}
                <span className="font-bold">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* SOCIAL */}
        <div className="flex gap-6 mt-10">
          <a
            href="https://www.instagram.com/faculdadecerrado/"
            className="text-white hover:text-green-600 transition">
            <Instagram size={28} />
          </a>

          <a
            href="https://web.facebook.com/facul.cerrado"
            className=" text-white hover:text-orange-600 transition">
            <Facebook size={28} />
          </a>

          <a
            href="https://maps.app.goo.gl/ueF7TnZ4MJJP6BVX9"
            className="text-white hover:text-purple-600 transition">
            <MapPin size={28} />
          </a>
        </div>

        {/* MAPA */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 m-8 w-full max-w-xl flex flex-col items-center">
          <motion.div
            className="w-full max-w-lg mt-12"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-center text-xl font-semibold mb-4 text-white">
              Venha fazer uma visita!
            </h2>

            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.037100426788!2d-48.04240872398208!3d-15.85464728479423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333c7b763a67%3A0xd0474c8fbd9bbe44!2sFaculdade%20Cerrado%20%7C%20Direito%20%7C%20Psicologia%20%7C%20Pedagogia%20%7C%20Gest%C3%A3o%20P%C3%BAblica%20e%20RH%20%7C%20Secretariado%20%7C%20T%C3%A9c%20Enfermagem%20e%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1736978803652!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                loading="lazy"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
