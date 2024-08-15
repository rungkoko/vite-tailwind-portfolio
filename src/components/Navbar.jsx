import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EDUCATION", link: "#education" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-colors duration-300 ${
        sticky ? "bg-white/60 text-gray-900 shadow-md" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <h4>
            A
            <span className="text-cyan-600">ry</span>a
            <span className="text-cyan-600">n</span>
          </h4>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-6 transition-colors duration-300 ${
            sticky ? "text-gray-900" : "text-white"
          }`}
        >
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              className="hover:text-cyan-600 transition-colors duration-300"
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] md:hidden cursor-pointer transition-colors duration-300 ${
            sticky || open ? "text-gray-900" : "text-white"
          }`}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <ul className="flex flex-col items-start p-6 space-y-6 mt-20">
            {menuLinks.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.link}
                  className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
