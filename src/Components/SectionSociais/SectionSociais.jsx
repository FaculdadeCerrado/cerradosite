import fundoSection from "../../images/Logo/fundo-section.svg";
import logo from "../../images/Logo/Logo Faculdade Cerrado - Colorida - Lateral.png";

const NewsSection = () => {
  return (
    <section className="w-full bg-[#ECECEC] overflow-hidden">
      <div className="relative z-10">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between pl-8 pr-8 pt-8">
          <div>
            <h2 className="text-4xl font-bold">
              Acompanhe Nossas Redes Sociais
            </h2>
            <p className="text-gray-800">
              Fique por dentro das últimas novidades
            </p>
          </div>
        </div>

        {/* Grid dos posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 pr-8 pl-8 pt-4">
          {/* Post Instagram 1 */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DN1TRoIZsDj/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              margin: "1px auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
            }}></blockquote>

          {/* Post Instagram 2 */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DO3Nz8JFZBF/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              margin: "1px auto",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
            }}></blockquote>

          {/* Post Facebook */}
          <div className="w-full flex justify-center items-center">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1321797423059166%26set%3Da.547702713801978%26type%3D3&show_text=true&width=500"
              width="500"
              height="460"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        {/* Script do Instagram */}
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </section>
  );
};

export default NewsSection;
