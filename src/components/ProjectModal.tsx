import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  images,
}: Props) {
  const [index, setIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIndex(0);
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("fullscreen-open");
      setFullscreenIndex(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* MODAL DO PROJETO */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* BACKDROP */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* CONTEÚDO */}
        <div className="relative z-50 w-full max-w-4xl bg-[#1b102b] rounded-2xl p-8">
          {/* FECHAR */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400"
          >
            ✕
          </button>

          {/* CARROSSEL */}
          <div className="relative w-full h-[420px] overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={title}
                  onClick={() => {
                    document.body.classList.add("fullscreen-open");
                    setFullscreenIndex(i);
                  }}
                  className="w-full h-[420px] object-contain flex-shrink-0 cursor-zoom-in"
                />
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIndex((index - 1 + images.length) % images.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full text-white hover:bg-black/80"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setIndex((index + 1) % images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full text-white hover:bg-black/80"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* TEXTO */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 FULLSCREEN */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
          onClick={() => {
            document.body.classList.remove("fullscreen-open");
            setFullscreenIndex(null);
          }}
        >
          <img
            src={images[fullscreenIndex]}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenIndex(
                    (fullscreenIndex - 1 + images.length) % images.length
                  );
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-purple-400"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenIndex(
                    (fullscreenIndex + 1) % images.length
                  );
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-purple-400"
              >
                ›
              </button>
            </>
          )}

          <button
            onClick={() => {
              document.body.classList.remove("fullscreen-open");
              setFullscreenIndex(null);
            }}
            className="absolute top-6 right-6 text-white text-3xl hover:text-purple-400"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
