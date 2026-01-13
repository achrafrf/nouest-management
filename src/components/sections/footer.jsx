"use client";

import React from 'react';
import Image from 'next/image';
import { MoveRight, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

/**
 * Footer Component - Nouest Management
 * Designed & Developed by: Achraf Rafiq
 * Style: Modern 2026 Minimalist
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-20 sm:pt-28 pb-10 font-sans text-[#1a1a1a] border-t border-gray-100 dark:bg-[#030303]">
      <div className="container max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 pb-16">
          
          {/* 1. Brand & Newsletter Section (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Logo & Name */}
            <div className="mb-10 flex items-center gap-4 group cursor-pointer">
              <div className="relative w-[60px] h-[60px] overflow-hidden rounded-xl border border-gray-100 p-2 group-hover:border-[#800020]/20 transition-all">
                <Image 
                  src="/image.png" 
                  alt="Nouest Management Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-[#800020] uppercase italic">
                Nouest <span className="text-[#C0A062] not-italic">Management</span>
              </h2>
            </div>

            {/* Newsletter Heading from context */}
            <h3 className="text-[32px] sm:text-[45px] leading-[1.1] font-black text-[#1a1a1a] max-w-[550px] mb-10 tracking-tighter uppercase italic dark:text-white">
              Restez connecté avec <span className="text-[#C0A062] not-italic underline decoration-1 underline-offset-8">nos dernières solutions.</span>
            </h3>

            {/* Modern Subscription Form */}
            <form className="w-full max-w-[480px] relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email"
                placeholder="Votre adresse email"
                className="w-full py-5 px-8 rounded-full bg-gray-50 border border-[#800020] text-[15px] focus:outline-none focus:border-[#C0A062] focus:bg-white transition-all duration-500 placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-[46px] h-[46px] flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#800020] text-white transition-all duration-300 shadow-lg group-hover:shadow-[#800020]/20"
              >
                <MoveRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* 2. Navigation & Contact (Right) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-10">
            
            {/* Column: Nos Services (From PDF Slide 5) */}
            <div>
              <h6 className="text-[12px] font-black uppercase tracking-[0.3em] mb-8 text-[#C0A062]">Services</h6>
              <ul className="space-y-4">
                {[
                  "Externalisation RH",
                  "Personnel Intérimaire",
                  "Jardinage & Espaces Verts",
                  "Nettoyage Industriel"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[15px] font-bold text-gray-500 hover:text-[#800020] transition-colors flex items-center gap-2 group">
                      <div className="w-0 h-[1px] bg-[#800020] group-hover:w-3 transition-all"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Contact Details (From PDF Slide 6) */}
            <div>
              <h6 className="text-[12px] font-black uppercase tracking-[0.3em] mb-8 text-[#C0A062]">Contact Us</h6>
              <div className="flex flex-col gap-6">
                <a href="mailto:nouestmanagement@gmail.com" className="group">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Email</p>
                  <p className="text-[15px] font-bold text-[#800020] group-hover:text-[#800020] transition-colors">nouestmanagement@gmail.com</p>
                </a>
                
                <a href="tel:+212614809564" className="group">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Téléphone</p>
                  <p className="text-[15px] font-bold text-[#800020] group-hover:text-[#800020] transition-colors">+212 6 14 80 95 64</p>
                </a>

                <div className="group">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Siège Social</p>
                  <p className="text-[14px] font-bold text-gray-500 leading-tight">
                    15 AV AL ABTAL, <br /> AGDAL, RABAT
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-2">
                  {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#800020] flex items-center justify-center text-gray-400 hover:bg-[#800020] hover:text-white transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Final Credits & Sign-off */}
        <div className="w-full h-[1px] bg-gray-50 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[12px] font-bold text-gray-400">
            <span>© {currentYear} NOUEST MANAGEMENT.</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-200"></div>
            <a href="#" className="hover:text-[#800020] transition-colors uppercase tracking-widest">Mentions Légales</a>
          </div>
          
          {/* Your Professional Signature */}
          <div className="group">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Designed & Developed by{" "}
              <a 
                href="#" 
                className="text-[#1a1a1a] font-black group-hover:text-[#C0A062] transition-colors relative"
              >
                Achraf Rafiq
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C0A062] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;