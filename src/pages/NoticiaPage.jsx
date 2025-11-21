import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/footer.jsx";
import { getNoticia, getNoticias } from "../service/noticiaService";

export default function NoticiaPage() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [sugestoes, setSugestoes] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getNoticia(id);
      setNoticia(data);
    }
    load();
  }, [id]);

  useEffect(() => {
    async function loadSugestoes() {
      const todas = await getNoticias();
      // remove atual e pega últimas 3
      const filtradas = todas.filter((n) => n.id !== Number(id)).slice(0, 3);

      setSugestoes(filtradas);
    }
    loadSugestoes();
  }, [id]);

  if (!noticia) return <p className="p-6 text-gray-700">Carregando...</p>;

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-6">
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          className="w-full max-h-96 object-cover rounded"
        />

        <h1 className="text-3xl font-bold mt-6">{noticia.titulo}</h1>

        <p className="text-gray-500 mt-1">{noticia.data_publicacao}</p>

        <div
          className="mt-6 text-gray-800 space-y-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />
      </div>
      {/* ✅ SUGESTÕES */}
      {sugestoes.length > 0 && (
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mt-10 mb-4">Mais notícias</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sugestoes.map((item) => (
              <Link
                key={item.id}
                to={`/noticia/${item.id}`}
                className="border rounded-lg overflow-hidden hover:shadow-md transition">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold line-clamp-2">{item.titulo}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {item.data_publicacao}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}{" "}
      <Footer />
    </>
  );
}
