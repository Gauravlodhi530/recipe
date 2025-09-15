import React from "react";
import { FaFacebookF, FaInstagram, FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";


const links = [
  { label: "Privacy Policy", url: "/privacy-policy" },
  { label: "Terms & Conditions", url: "/terms" },
  { label: "Accessibility Statement", url: "/accessibility" },
];


const socialIcons = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaXTwitter />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaPinterest />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

const Footer = () => (
  <footer className="mt-16">
    <div className="bg-[#FCFAF7] py-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Links */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {links.map(link => (
          <Link
            key={link.label}
            to={link.url}
            className="text-gray-900 font-medium hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        {socialIcons.map((item, idx) => (
          <Link
            key={idx}
            to={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-red-600 text-xl"
            aria-label="Social link"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="bg-[#FAE4DA] py-2 text-center text-gray-800 font-medium text-sm">
      © 2025 Foodie. All rights reserved.
    </div>
  </footer>
);

export default Footer;
