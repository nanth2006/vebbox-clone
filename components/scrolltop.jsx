import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition text-3xl"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;