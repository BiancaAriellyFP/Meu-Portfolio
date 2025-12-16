import { useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  onImageClick?: () => void;
}

export default function ProjectCarousel({
  images,
  onImageClick,
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-lg">
      {/* IMAGENS */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagem ${i + 1}`}
            onClick={onImageClick}
            className="w-full h-full object-cover flex-shrink-0 cursor-pointer"
          />
        ))}
      </div>

      {/* CONTROLES */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-8 h-8 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-8 h-8 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
