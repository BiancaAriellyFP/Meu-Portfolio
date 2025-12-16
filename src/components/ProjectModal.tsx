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
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("fullscreen-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />

        <div className="relative z-50 w-[95%] max-w-4xl bg-[#1b102b] rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>

          <div
            className="relative w-full h-[360px] overflow-hidden rounded-xl cursor-zoom-in"
            onClick={() => {
              document.body.classList.add("fullscreen-open");
              setFullscreen(true);
            }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-[360px] object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  setIndex((index - 1 + images.length) % images.length)
                }
              >
                ◀
              </button>
              <button
                onClick={() =>
                  setIndex((index + 1) % images.length)
                }
              >
                ▶
              </button>
            </div>
          )}

          <h3 className="text-2xl font-bold mt-6 text-white">{title}</h3>
          <p className="text-gray-300 mt-3">{description}</p>
        </div>
      </div>

      {/* FULLSCREEN */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
          onClick={() => {
            document.body.classList.remove("fullscreen-open");
            setFullscreen(false);
          }}
        >
          <img
            src={images[index]}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
