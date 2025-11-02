import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import LoginPopup from "./LoginPopup";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("up");
  const [lastScrollY, setLastScrollY] = React.useState(0);

  // Handle scroll for header size changes with improved accuracy
  React.useEffect(() => {
    let ticking = false;
    let lastTime = 0;
    const throttleDelay = 10; // Smoother updates

    const handleScroll = () => {
      const currentTime = Date.now();

      if (!ticking && currentTime - lastTime >= throttleDelay) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only update if scroll position changed significantly (improved threshold)
          if (Math.abs(currentScrollY - lastScrollY) < 0.5) {
            ticking = false;
            return;
          }

          // Smooth scrolled state transition
          if (currentScrollY > 30) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Improved scroll direction detection with smoother thresholds
          const scrollDifference = currentScrollY - lastScrollY;
          if (scrollDifference > 3 && currentScrollY > 80) {
            setScrollDirection("down");
          } else if (scrollDifference < -3) {
            setScrollDirection("up");
          }

          setLastScrollY(currentScrollY);
          lastTime = currentTime;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBookConsultancy = () => {
    navigate("/book", {
      state: {
        fromPage: {
          label: getPageLabel(location.pathname),
          path: location.pathname,
        },
      },
    });
    closeMenu();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const getPageLabel = (pathname) => {
    const pageMap = {
      "/": "Home",
      "/software": "Software Solutions",
      "/digital-marketing": "Digital Marketing",
      "/plant-marketplace": "Plant Marketplace",
      "/safety-app": "Safety App",
      "/careers": "Careers",
      "/about": "About Us",
    };
    return pageMap[pathname] || "Page";
  };

  // Define theme colors for each page
  const themeColors = {
    "/": {
      hover: "hover:text-primary",
      active: "text-primary",
      dotColor: "bg-primary",
    },
    "/about": {
      hover: "hover:text-primary",
      active: "text-primary",
      dotColor: "bg-primary",
    },
    "/software": {
      hover: "hover:text-primary",
      active: "text-primary",
      dotColor: "bg-primary",
    },
    "/digital-marketing": {
      hover: "hover:text-orange-600",
      active: "text-orange-600",
      dotColor: "bg-orange-600",
    },
    "/plant-marketplace": {
      hover: "hover:text-green-600",
      active: "text-green-600",
      dotColor: "bg-green-600",
    },
    "/safety-app": {
      hover: "hover:text-blue-600",
      active: "text-blue-600",
      dotColor: "bg-blue-600",
    },
    "/careers": {
      hover: "hover:text-primary",
      active: "text-primary",
      dotColor: "bg-primary",
    },
  };

  const getCurrentTheme = () => {
    return (
      themeColors[location.pathname] || {
        hover: "hover:text-primary",
        active: "text-primary",
      }
    );
  };

  const currentTheme = getCurrentTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Software", path: "/software" },
    { name: "Digital", path: "/digital-marketing" },
    { name: "Plant Marketplace", path: "/plant-marketplace" },
    { name: "Safety App", path: "/safety-app" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
  ];

  // Constant sizes for logo and text
  const logoHeight = 56; // Constant: 56px
  const textSizePx = 24; // Constant: 24px

  const logoSize = "h-14 md:h-16";
  const textSize = "text-xl md:text-2xl";
  const headerHeight = "h-20 md:h-24";
  const logoSpace =
    scrollDirection === "down" && isScrolled
      ? "space-x-2"
      : isScrolled
      ? "space-x-2"
      : "space-x-2 md:space-x-2";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ease-out ${
        isScrolled
          ? "glass-effect shadow-xl backdrop-blur-xl bg-background/85 border-primary/10"
          : "bg-background/98 backdrop-blur-md shadow-md border-primary/5"
      } translate-y-0`}
    >
      <div
        className={`container flex ${headerHeight} items-center justify-between px-4 md:px-8 gap-8 transition-all duration-500`}
      >
        <Link
          to="/"
          className={`flex items-center ${logoSpace} group transition-all duration-500 ease-out relative shrink-0`}
        >
          {/* Logo glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="476"
            height="719"
            viewBox="0 0 476 719"
            preserveAspectRatio="xMidYMid meet"
            className="w-auto transition-all duration-500 ease-out transform group-hover:scale-105"
            style={{
              height: `${logoHeight}px`,
              transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <defs>
              <linearGradient
                id="logoGradientHeader"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#2563eb" />
                <animate
                  attributeName="x1"
                  values="0%;100%;0%"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <g
              fill="black"
              stroke="none"
              fillRule="evenodd"
              className="group-hover:fill-[url(#logoGradientHeader)] transition-all duration-300"
            >
              <path d="M 38,22 L 219,336 L 100,58 L 413,58 L 44,698 L 475,698 L 298,388 L 415,663 L 108,662 L 475,22 Z" />
            </g>
          </svg>
          <div
            className="font-bold flex flex-col transition-all duration-500 ease-out leading-tight"
            style={{
              fontSize: `${textSizePx}px`,
              transition: "font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="flex">
              {"THE".split("").map((char, index) => (
                <span
                  key={index}
                  className="relative hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer group/char"
                  style={{ transitionDelay: `${index * 0.02}s` }}
                >
                  {char}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm opacity-0 group-hover/char:opacity-100 transition-opacity" />
                </span>
              ))}
            </div>
            <div className="flex">
              {"NEXUS".split("").map((char, index) => (
                <span
                  key={index}
                  className="relative hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer group/char"
                  style={{ transitionDelay: `${index * 0.02}s` }}
                >
                  {char}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm opacity-0 group-hover/char:opacity-100 transition-opacity" />
                </span>
              ))}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center transition-all duration-500 md:gap-1 lg:gap-2 xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative transition-all duration-300 group px-1 py-1.5 rounded-lg text-xs md:text-sm lg:text-sm xl:text-sm font-semibold ${
                currentTheme.hover
              } ${
                location.pathname === item.path
                  ? `${currentTheme.active}`
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {item.name}
                {location.pathname === item.path && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${currentTheme.dotColor} animate-pulse-glow`}
                  />
                )}
              </span>
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in" />
              )}
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
          <Link to={"/book"}>
            <Button
              className="relative bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group/btn px-5 py-2 text-sm"
              onClick={handleBookConsultancy}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                Book a Session
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </Link>
          <LoginPopup />
        </nav>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/10 glass-card shadow-lg">
          <nav className="container flex flex-col  py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-semibold transition-all duration-300 px-4 py-3 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                }`}
                onClick={() => {
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {item.name}
              </Link>
            ))}
            <NavLink to={"/book"}>
              <Button
                className="w-full mt-2 bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white font-semibold shadow-lg"
                onClick={handleBookConsultancy}
              >
                Book a Session
              </Button>
            </NavLink>
            <div className="pt-2 border-t border-primary/10 mt-2">
              <LoginPopup />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
