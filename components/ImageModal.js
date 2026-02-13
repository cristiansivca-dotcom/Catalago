import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ images, altText, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition-all p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl border border-white/10 shadow-lg"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all p-4 z-50 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl group"
          >
            <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all p-4 z-50 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl group"
          >
            <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </>
      )}

      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[80vh] no-download" onContextMenu={(e) => e.preventDefault()}>
          <Image
            src={images[currentIndex]}
            alt={`${altText} - Foto ${currentIndex + 1}`}
            fill
            className="object-contain rounded-sm shadow-2xl no-download"
            priority
            draggable={false}
          />
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto max-w-full p-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all relative no-download ${idx === currentIndex
                    ? "border-blue-500 opacity-100 scale-105"
                    : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={img}
                  alt={`Thumb ${idx}`}
                  fill
                  className="object-cover no-download"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
