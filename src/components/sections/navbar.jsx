"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const menuItems = [
    // {
    //   name: "Company",
    //   type: "dropdown",
    //   links: [
    //     { label: "About Us", href: "#" },
    //     { label: "History", href: "#" },
    //     { label: "Work Process", href: "#" },
    //     { label: "Why Choose Us", href: "#" },
    //     { label: "Career", href: "#" },
    //     { label: "Clients", href: "#" },
    //   ],
    // },
    { name: "Accueil", type: "link", href: "#" },
    { name: "Nos Services", type: "link", href: "#" },
    { name: "Qui Sommes nous ?", type: "link", href: "#" },
    { name: "Nos valeurs", type: "link", href: "#" },
    // {
    //   name: "All Pages",
    //   type: "dropdown",
    //   isMega: true,
    //   columns: [
    //     {
    //       links: [
    //         { label: "Home 1", href: "#" },
    //         { label: "Home 2", href: "#" },
    //         { label: "Home 3", href: "#" },
    //         { label: "About Us", href: "#" },
    //         { label: "History", href: "#" },
    //       ],
    //     },
    //     {
    //       links: [
    //         { label: "Team", href: "#" },
    //         { label: "Pricing", href: "#" },
    //         { label: "Projects", href: "#" },
    //         { label: "Clients", href: "#" },
    //         { label: "Services", href: "#" },
    //       ],
    //     },
    //     {
    //       links: [
    //         { label: "Career", href: "#" },
    //         { label: "Contact us", href: "#" },
    //         { label: "Testimonials", href: "#" },
    //         { label: "Blog", href: "#" },
    //         { label: "FAQ's", href: "#" },
    //       ],
    //     },
    //   ],
    // },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-center p-[10px_20px_0] dark:bg-[#030303] ">
      <div className="w-full max-w-[1300px] bg-background rounded-b-[10px] flex items-center justify-between px-5 md:px-10 h-[98px] shadow-sm dark:border border-white">
        {/* Logo */}
        <a href="/" className="relative block w-[126px] h-[100px] shrink-0">
          <Image
            src="/image.png"
            alt="Ironis Logo"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.type === "dropdown" ? (
                <>
                  <button
                    onClick={(e) => toggleDropdown(e, item.name)}
                    className="flex items-center gap-1.5 px-4 py-3 text-[16px] font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background rounded-[10px] shadow-lg border border-border transition-all duration-200 ${
                      activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    } ${item.isMega ? "w-[90vw] max-w-[600px] p-8 grid grid-cols-3" : "w-[200px] p-4 flex flex-col"}`}
                  >
                    {item.isMega
                      ? item.columns?.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-2">
                            {col.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                className="group/link flex items-center text-[15px] text-foreground hover:text-muted-foreground py-1.5"
                              >
                                <span className="w-2.5 h-2.5 bg-foreground rounded-[2px] mr-3 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ))
                      : item.links?.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="group/link flex items-center text-[15px] text-foreground hover:text-muted-foreground py-2"
                          >
                            <span className="w-2.5 h-2.5 bg-foreground rounded-[2px] mr-3 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            {link.label}
                          </a>
                        ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="px-4 py-3 text-[16px] font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center gap-6">
          <DarkModeToggle />
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider">Interested?</span>
          </div>
          <a
            href="/contact-us"
            className="group relative flex items-center justify-center gap-2 bg-primary hover:bg-foreground text-primary-foreground hover:text-background px-8 h-[58px] rounded-full text-[16px] font-semibold transition-all duration-300"
          >
            Contactez-nous
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
               <ArrowUpRight className="w-5 h-5 absolute transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
               <ArrowUpRight className="w-5 h-5 absolute -translate-x-5 translate-y-5 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <DarkModeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background z-[999] lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6 sm:px-10">
          <div className="flex flex-col gap-4 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <div 
                  className="flex items-center justify-between py-4 border-b border-border cursor-pointer"
                  onClick={() => item.type === "dropdown" ? toggleMobileDropdown(item.name) : (setIsMobileMenuOpen(false), window.location.href = item.href)}
                >
                  <span className="text-[18px] sm:text-[20px] font-medium text-foreground">{item.name}</span>
                  {item.type === "dropdown" && (
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeMobileDropdown === item.name ? "rotate-180" : ""}`} />
                  )}
                </div>
                {item.type === "dropdown" && (
                  <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${
                    activeMobileDropdown === item.name ? "max-h-[500px] pt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    {item.isMega
                      ? item.columns?.flatMap((c) => c.links).map((link) => (
                          <a 
                            key={link.label} 
                            href={link.href} 
                            className="text-[16px] text-muted-foreground py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))
                      : item.links?.map((link) => (
                          <a 
                            key={link.label} 
                            href={link.href} 
                            className="text-[16px] text-muted-foreground py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 flex flex-col gap-4">
            <span className="text-center text-[14px] text-muted-foreground uppercase tracking-widest">Besoin d'un devis ?</span>
            <a
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground h-[58px] rounded-full text-[16px] font-semibold"
            >
              Let’s work together
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
