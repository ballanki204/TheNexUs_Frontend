import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/NexUsLogo.svg";

class Footer extends React.Component {
  render() {
    const navigation = {
      services: [
        { name: "Software Solutions", path: "/software" },
        { name: "Digital Marketing", path: "/digital-marketing" },
      ],
      products: [
        { name: "Plant Marketplace", path: "/plant-marketplace" },
        { name: "Safety App", path: "/safety-app" },
      ],
      company: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/careers/contact" },
      ],
      social: [
        { name: "Facebook", icon: Facebook, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
      ],
    };

    return (
      <footer className="relative bg-gradient-to-br from-background via-primary/5 to-secondary/5 border-t border-primary/10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-30" />

        <div className="container relative z-10 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="500"
                  height="719"
                  viewBox="0 0 476 719"
                  preserveAspectRatio="xMidYMid meet"
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
                >
                  <defs>
                    <linearGradient
                      id="logoGradientFooter"
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
                    className="group-hover:fill-[url(#logoGradientFooter)] transition-all duration-300"
                  >
                    <path d="M 38,22 L 219,336 L 100,58 L 413,58 L 44,698 L 475,698 L 298,388 L 415,663 L 108,662 L 475,22 Z" />
                  </g>
                </svg>
                <div className="text-xl font-bold flex flex-col">
                  <div className="flex">
                    {"THE".split("").map((char, index) => (
                      <span
                        key={index}
                        className="hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    {"NEXUS".split("").map((char, index) => (
                      <span
                        key={index}
                        className="hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base text-left text-muted-foreground leading-relaxed max-w-md mb-8">
                Empowering businesses with cutting-edge technology solutions,
                professional back-office services, and comprehensive IT support.
                Your partner in digital transformation.
              </p>

              {/* Contact Info */}
              <div className="mb-6 space-y-3">
                <a
                  href="mailto:contact@thenexus.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/contact"
                >
                  <div className="w-8 h-8 rounded-full glass-card border border-primary/20 flex items-center justify-center group-hover/contact:bg-primary/10 group-hover/contact:border-primary/50 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>contact@thenexus.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/contact"
                >
                  <div className="w-8 h-8 rounded-full glass-card border border-primary/20 flex items-center justify-center group-hover/contact:bg-primary/10 group-hover/contact:border-primary/50 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative w-12 h-12 rounded-full glass-card border-2 border-primary/20 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-xl group overflow-hidden"
                      aria-label={item.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-125" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <h4 className="text-base font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="gradient-text">Services</span>
                </h4>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block relative group/link flex items-center gap-2"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover/link:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <h4 className="text-base font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="gradient-text">Products</span>
                </h4>
                <ul className="space-y-3">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-sm text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block relative group/link flex items-center gap-2"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary group-hover/link:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <h4 className="text-base font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="gradient-text">Company</span>
                </h4>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block relative group/link flex items-center gap-2"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover/link:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} TheNexUS. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <span className="gradient-text font-semibold flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  Built with excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
