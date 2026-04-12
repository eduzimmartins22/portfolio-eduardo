"use client";
import { useState } from "react";
import { getTheme } from "../enxuto/lib/theme";
import { Navbar } from "../enxuto/lib/components/NavBar";
import { Hero } from "../enxuto/lib/components/sections/Hero";
import { About } from "../enxuto/lib/components/sections/About";
import { FeaturedProject } from "../enxuto/lib/components/sections/FeaturedProject";
import { WebProjects } from "../enxuto/lib/components/sections/WebProject";
import { MobileApps } from "../enxuto/lib/components/sections/MobileApps";
import { LaunchedCourse } from "../enxuto/lib/components/sections/LaunchedCourse"; // ← NOVO
import { InProgress } from "../enxuto/lib/components/sections/InProgress";
import { Contact } from "../enxuto/lib/components/sections/Contact";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const t = getTheme(dark);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Pro:wght@300;400;500&display=swap');
        * { font-family: 'Crimson Pro', Georgia, serif; }
        h1, h2, h3, nav span { font-family: 'Lora', Georgia, serif; }
      `}</style>

      <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-500`}>
        <Navbar t={t} dark={dark} setDark={setDark} />

        <div className="pt-14">
          <Hero t={t} />
          <About t={t} />
          <FeaturedProject t={t} />
          <WebProjects t={t} />
          <MobileApps t={t} />
          <LaunchedCourse t={t} />                   
          <InProgress t={t} />
          <Contact t={t} />
        </div>
      </div>
    </>
  );
}