// src/Components/PreviewImage.jsx

export default function PreviewImage({ url, alt }) {
  return (
    <div className="w-full border rounded overflow-hidden">
      {url ? (
        <img src={url} alt={alt} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
          Sem imagem
        </div>
      )}
    </div>
  );
}
