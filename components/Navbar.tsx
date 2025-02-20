import React from "react";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="text-3xl font-extrabold text-blue-700 tracking-wide">Arfiget</div>
      <div className="hidden md:flex items-center space-x-8">
        {[
          { label: "Home", href: "#" },
          { label: "Find Work", href: "#" },
          { label: "Find Freelancers", href: "#" },
          { label: "Log In", href: "#" },
          { label: "Sign Up", href: "#" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            {link.label}
          </a>
        ))}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all">
          Post a Project
        </Button>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
