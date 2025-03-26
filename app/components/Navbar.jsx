"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
      { id: "profile", text: "Profile" }, // เพิ่ม Profile
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md">
      <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-center space-x-10 h-20 items-center">

          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm md:text-base cursor-pointer transition-all duration-300 
                ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-300 hover:text-white hover:border-b hover:border-gray-400"
                } pb-1`}
            >
              {tab.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;