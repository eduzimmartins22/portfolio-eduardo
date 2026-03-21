export type Theme = {
  bg: string;
  bgCard: string;
  bgCardHov: string;
  border: string;
  nav: string;
  navBorder: string;
  text: string;
  textMuted: string;
  textFaint: string;
  accent: string;
  accentBg: string;
  badge: string;
  tag: string;
  bar: string;
  barFill: string;
  btnPrimary: string;
  btnOutline: string;
  iconBtn: string;
  inProgress: string;
  wipBadge: string;
};

export function getTheme(dark: boolean): Theme {
  return {
    bg:         dark ? "bg-[#1a1f14]"        : "bg-[#f5f0e8]",
    bgCard:     dark ? "bg-[#242b1c]/80"     : "bg-[#ede8dc]/80",
    bgCardHov:  dark ? "hover:border-[#6b8c42]/40" : "hover:border-[#5a7a32]/40",
    border:     dark ? "border-[#3d4f28]/50" : "border-[#c8b89a]/60",
    nav:        dark ? "bg-[#1a1f14]/85"     : "bg-[#f5f0e8]/85",
    navBorder:  dark ? "border-[#3d4f28]/40" : "border-[#c8b89a]/50",
    text:       dark ? "text-[#e8e0d0]"      : "text-[#2c2416]",
    textMuted:  dark ? "text-[#a89880]"      : "text-[#6b5a42]",
    textFaint:  dark ? "text-[#6b5a42]"      : "text-[#a89880]",
    accent:     dark ? "text-[#8fbe4a]"      : "text-[#4a7a1e]",
    accentBg:   dark ? "bg-[#8fbe4a]/10"     : "bg-[#4a7a1e]/10",
    badge:      dark ? "bg-[#3d4f28]/60 border-[#6b8c42]/30 text-[#a8c870]"
                     : "bg-[#d4e8b0]/60 border-[#6b8c42]/40 text-[#3a5a1a]",
    tag:        dark ? "bg-[#3d4f28]/60 text-[#c8d8a8]" : "bg-[#c8d8a8]/60 text-[#3a5a1a]",
    bar:        dark ? "bg-[#3d4f28]"        : "bg-[#c8b89a]",
    barFill:    dark ? "bg-[#8fbe4a]"        : "bg-[#4a7a1e]",
    btnPrimary: dark ? "bg-[#6b8c42] hover:bg-[#7da04e] text-[#f5f0e8]"
                     : "bg-[#4a7a1e] hover:bg-[#5a8a2e] text-[#f5f0e8]",
    btnOutline: dark ? "border-[#6b8c42]/50 hover:border-[#8fbe4a] text-[#c8d8a8]"
                     : "border-[#6b8c42]/60 hover:border-[#4a7a1e] text-[#3a5a1a]",
    iconBtn:    dark ? "border-[#3d4f28] hover:border-[#6b8c42] hover:bg-[#3d4f28]/50"
                     : "border-[#c8b89a] hover:border-[#6b8c42] hover:bg-[#c8d8a8]/30",
    inProgress: dark ? "border-[#8fbe4a]/15 hover:border-[#8fbe4a]/30 bg-[#242b1c]/50"
                     : "border-[#6b8c42]/20 hover:border-[#6b8c42]/40 bg-[#ede8dc]/50",
    wipBadge:   dark ? "bg-[#8fbe4a]/10 text-[#8fbe4a] border-[#8fbe4a]/20"
                     : "bg-[#4a7a1e]/10 text-[#4a7a1e] border-[#4a7a1e]/20",
  };
}

export const skills = [
  { name: "React", level: 80 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "HTML & CSS", level: 80 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 100 },
  { name: "Flutter", level: 75 },
  { name: "IOT", level: 90 },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};