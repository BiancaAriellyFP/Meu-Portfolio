import { useEffect, useState } from "react";

interface Props {
  images: string[];
  onImageClick?: () => void;
}

export default function ProjectCarousel({
  images,
  onImageClick,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Projeto"
            className="w-full h-full object-cover flex-shrink-0 cursor-pointer"
            onClick={onImageClick}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 w-8 h-8 rounded-full text-white"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 w-8 h-8 rounded-full text-white"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
