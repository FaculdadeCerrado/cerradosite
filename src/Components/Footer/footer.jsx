import { Facebook, Instagram, Mail, MapPin, Phone, Chrome } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-20 pb-12">
      {/* GRID PRINCIPAL */}
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://gerenciador.faculdadecerrado.edu.br/uploads/Logo/Logo-Branca-943x1024.png"
            alt="Faculdade Cerrado"
            className="w-56"
          />
        </div>

        {/* LINKS IMPORTANTES */}
        <div>
          <h3 className="font-semibold text-lg mb-4">LINKS IMPORTANTES</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a
                href="/https://unicollege.net/cerrado/ps/cadastroinc.aspxvestibular"
                className="hover:text-gray-300 transition">
                Vestibular
              </a>
            </li>
            <li>
              <a
                href="https://www.unicollege.net/cerrado"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition">
                Portal do Aluno
              </a>
            </li>
            <li>
              <a
                href="https://www.cerrado.eadmax.net/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition">
                Portal AVA
              </a>
            </li>
            <li>
              <a
                href="https://www.unicollege.net/cerrado"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition">
                Portal do Professor
              </a>
            </li>
          </ul>
        </div>

        {/* NOSSOS CURSOS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">NOSSOS CURSOS</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Gestão Pública</li>
            <li>Secretariado</li>
            <li>Direito</li>
            <li>Psicologia</li>
            <li>Pedagogia</li>
            <li>Enfermagem</li>
            <li>Estética</li>
          </ul>
        </div>

        {/* MAIS INFORMAÇÕES */}
        <div>
          <h3 className="font-semibold text-lg mb-4">MAIS INFORMAÇÕES</h3>

          <div className="space-y-3 text-sm opacity-90">
            <p className="flex gap-2 items-center">
              <MapPin className="w-4 h-4" />
              CSE 06 Lote 32, Taguatinga Sul-DF
            </p>

            <p className="flex gap-2 items-center">
              <Phone className="w-4 h-4" /> (61) 3541-8247
            </p>

            <p className="flex gap-2 items-center">
              <Mail className="w-4 h-4" /> contato@faculdadecerrado.com.br
            </p>

            <p className="flex gap-2 items-center">
              <MapPin className="w-4 h-4" /> Ver localização
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h3 className="font-semibold mb-3">AVALIE-NOS NO GOOGLE</h3>
          <button className="bg-[#1B1B1B] px-6 py-3 rounded-lg shadow">
            <img
              src="https://gerenciador.faculdadecerrado.edu.br/uploads/Logo/avaliacao-google-menor.png"
              alt="Avalie-nos no Google"
              className="w-44"
            />
          </button>
        </div>
        <div className="mt-16 text-center hidden md:block ">
          <p className="text-sm mb-6">SIGA NOSSAS REDES SOCIAIS</p>

          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://www.facebook.com/facul.cerrado"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook className="w-8 h-8 cursor-pointer hover:text-gray-300" />
            </a>

            <a
              href="https://www.instagram.com/faculdadecerrado"
              target="_blank"
              rel="noopener noreferrer">
              <Instagram className="w-8 h-8 cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="tel:+556135418247"
              target="_blank"
              rel="noopener noreferrer">
              <Phone className="w-8 h-8 cursor-pointer hover:text-gray-300" />
            </a>

            <a
              href="https://www.google.com.br/maps/place/FACULDADE+CERRADO-DF/@-15.8108606,-48.0650025,15z/data=!4m2!3m1!1s0x0:0xd0474c8fbd9bbe44?sa=X&ved=0ahUKEwja08uju_vZAhWDUZAKHWIBCc0Q_BIImgEwCg"
              target="_blank"
              rel="noopener noreferrer">
              <MapPin className="w-8 h-8 cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>
        {/* QR CODE E-MEC */}
        <div className="hidden md:block">
          <div className="text-center flex items-center flex-col">
            <h3 className="font-semibold mb-3">E-MEC</h3>
            {/*  <p>
              Consulte aqui o cadastro da <br /> Instituição no Sistema e-MEC
            </p> */}
            <img
              src="https://gerenciador.faculdadecerrado.edu.br/uploads/Logo/Codigo-QR-MEC.png"
              alt="QR Code E-MEC"
              className="w-48"
            />
          </div>
        </div>
        <div className="mt-10 md:hidden">
          <div className="text-center flex items-center flex-col">
            <h3 className="font-semibold mb-3">E-MEC</h3>
            {/*  <p>
              Consulte aqui o cadastro da <br /> Instituição no Sistema e-MEC
            </p> */}
            <img
              src="https://gerenciador.faculdadecerrado.edu.br/uploads/Logo/Codigo-QR-MEC.png"
              alt="QR Code E-MEC"
              className="w-48"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center md:hidden">
        <p className="text-sm mb-6">SIGA NOSSAS REDES SOCIAIS</p>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://www.facebook.com/facul.cerrado"
            target="_blank"
            rel="noopener noreferrer">
            <Facebook className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          </a>

          <a
            href="https://www.instagram.com/faculdadecerrado"
            target="_blank"
            rel="noopener noreferrer">
            <Instagram className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          </a>
          <a href="tel:+556135418247" target="_blank" rel="noopener noreferrer">
            <Phone className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          </a>

          <a
            href="https://www.google.com.br/maps/place/FACULDADE+CERRADO-DF/@-15.8108606,-48.0650025,15z/data=!4m2!3m1!1s0x0:0xd0474c8fbd9bbe44?sa=X&ved=0ahUKEwja08uju_vZAhWDUZAKHWIBCc0Q_BIImgEwCg"
            target="_blank"
            rel="noopener noreferrer">
            <MapPin className="w-8 h-8 cursor-pointer hover:text-gray-300" />
          </a>
        </div>
      </div>
      <div className="mt-16 text-center">
        <hr className="border-gray-700 mt-12 mb-6" />

        <p className="text-lg opacity-80">
          © 2025 Faculdade Cerrado – Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
