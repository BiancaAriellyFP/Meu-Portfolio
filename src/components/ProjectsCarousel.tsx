import { useState } from "react";

interface Props {
  items: React.ReactNode[];
}

export default function ProjectsCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / 2);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} className="flex w-full flex-shrink-0 gap-8">
            {items.slice(i * 2, i * 2 + 2).map((item, j) => (
              <div key={j} className="w-1/2">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          setIndex((index - 1 + totalSlides) % totalSlides)
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full text-white"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setIndex((index + 1) % totalSlides)
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full text-white"
      >
        ›
      </button>
    </div>
  );
}
