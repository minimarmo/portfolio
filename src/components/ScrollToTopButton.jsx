import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // ตรวจจับ scroll แล้วโชว์/ซ่อนปุ่ม
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // เมื่อคลิกปุ่ม
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-base-200 hover:bg-base-300 text-base-content p-3 rounded-full shadow-md transition-all"
      aria-label="Scroll to top"
    >
      <MdOutlineKeyboardDoubleArrowUp className="w-5 h-5" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
