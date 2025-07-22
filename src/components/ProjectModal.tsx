import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const images = project.imageUrls || [];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleManualNext = () => {
    setAutoPlay(false);
    nextImage();
  };

  const handleManualPrev = () => {
    setAutoPlay(false);
    prevImage();
  };

  // ⏱ Auto-slide
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // ทุก 3 วินาที

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  // ⌨️ Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleManualNext();
      if (e.key === "ArrowLeft") handleManualPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Reset index & autoplay เมื่อเปลี่ยน project
  useEffect(() => {
    setImageIndex(0);
    setAutoPlay(true);
  }, [project]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-2xl bg-white rounded-2xl p-6 lg:p-12 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full transition"
          aria-label="Close modal"
        >
          <FiX className="text-2xl" />
        </button>

        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="relative w-full bg-gray-100 rounded-md overflow-hidden mb-6">
            <img
              src={images[imageIndex]}
              alt={`Slide ${imageIndex + 1}`}
              className="w-full max-h-[300px] object-contain mx-auto"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handleManualPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Previous image"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleManualNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Next image"
                >
                  <FiChevronRight />
                </button>
              </>
            )}
          </div>
        )}

        {/* Title */}
        <h3
          id="modal-title"
          className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-2">Tech Stack:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {project.stack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
