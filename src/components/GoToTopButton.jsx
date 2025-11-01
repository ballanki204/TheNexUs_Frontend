import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-5 right-10 z-50 rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 animate-fade-in"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
          <span className="sr-only">Go to top</span>
        </Button>
      )}
    </>
  );
};

export default GoToTopButton;
