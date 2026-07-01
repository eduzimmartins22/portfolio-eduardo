"use client";
import { useState } from "react";
import { getTheme } from "../enxuto/lib/theme";
import { Navbar } from "../enxuto/lib/components/NavBar";
import { Hero } from "../enxuto/lib/components/sections/Hero";
import { About } from "../enxuto/lib/components/sections/About";
import { FeaturedProject } from "../enxuto/lib/components/sections/FeaturedProject";
import { WebProjects } from "../enxuto/lib/components/sections/WebProject";
import { MazoFluteProject } from "../enxuto/lib/components/sections/MazoFluteProject";
import { LaunchedCourse } from "../enxuto/lib/components/sections/LaunchedCourse";
import { MobileApps } from "../enxuto/lib/components/sections/MobileApps";
import { InProgress } from "../enxuto/lib/components/sections/InProgress";
import { Contact } from "../enxuto/lib/components/sections/Contact";

export default function Home() {
  const [dark, setDark] = useState(true);
  const t = getTheme(dark);

  return (
    <main className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-500`}>
      <Navbar t={t} dark={dark} setDark={setDark} />
      <div className="pt-14">
        <Hero t={t} />
        <About t={t} />
        <FeaturedProject t={t} />
        <WebProjects t={t} />
        <MazoFluteProject t={t} />
        <LaunchedCourse t={t} />
        <MobileApps t={t} />
        <InProgress t={t} />
        <Contact t={t} />
      </div>
    </main>
  );
}
