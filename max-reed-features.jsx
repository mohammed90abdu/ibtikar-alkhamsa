import React from "react";
import {
  ArrowUpRight,
  Sparkle,
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
} from "lucide-react";

const VIDEO_BG = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4";
const VIDEO_10M = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4";
const VIDEO_SOFTWARE = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4";

const TIMELINE = [
  { years: "2023—Now", role: "Freelance Creative", place: "Solo Studio" },
  { years: "2020—2023", role: "Head of Brand Design", place: "Rove Studio" },
  { years: "2017—2020", role: "Visual Stylist", place: "Ember Works" },
];

const ROW_1_ICONS = [Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome];
const ROW_2_ICONS = [Camera, Brush, Box, Wand2, Figma, Framer, Type, Layers];

function SectionLabel({ children, align = "center" }) {
  const justify =
    align === "start" ? "justify-start" : "justify-center";
  return (
    <div className={`flex items-center gap-2 ${justify}`}>
      <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
      <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">
        {children}
      </span>
      <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
    </div>
  );
}

function IconTile({ Icon }) {
  return (
    <div className="liquid-glass flex h-14 w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-xl">
      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white/85" strokeWidth={1.5} />
    </div>
  );
}

function MarqueeRow({ icons, direction }) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const doubled = [...icons, ...icons];
  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className={`flex w-max gap-3 ${animClass}`}>
        {doubled.map((Icon, i) => (
          <IconTile Icon={Icon} key={`${direction}-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#0a0a0a] text-white antialiased font-sans px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex flex-col gap-6 md:gap-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif; }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee-left { animation: marquee-left 22s linear infinite; }
        .animate-marquee-right { animation: marquee-right 26s linear infinite; }

        .noise-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.55;
          mix-blend-mode: soft-light;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 240px 240px;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left, .animate-marquee-right { animation: none; }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 flex-shrink-0">
        <div className="max-w-3xl">
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight">
            Hi, I'm Max Reed!
          </h1>
          <p className="mt-3 text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl">
            A London-based independent creator shaping sharp visual systems,
            web-ready products, and story-first campaigns. With a decade of
            craft behind me, I help ideas move with focus and intention.
          </p>
        </div>
        <button className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white/90 whitespace-nowrap self-start sm:self-auto hover:text-white transition-colors">
          Let's Team Up Today
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1 min-h-0">
        {/* Column 1 — Background */}
        <div className="relative rounded-2xl bg-black overflow-hidden min-h-[420px] md:min-h-0 flex flex-col justify-between p-5 md:p-6">
          <video
            src={VIDEO_BG}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10">
            <SectionLabel>Background</SectionLabel>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-[auto_auto_1fr_auto] gap-x-2 gap-y-2.5 items-center">
              {TIMELINE.map((row, i) => (
                <React.Fragment key={i}>
                  <span className="text-[12px] text-white/85 whitespace-nowrap">
                    {row.years}
                  </span>
                  <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
                  <span className="text-[12px] text-white/85 truncate">
                    {row.role}
                  </span>
                  <span className="text-[12px] text-white/50 whitespace-nowrap">
                    {row.place}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-rows-2 md:grid-rows-[auto_1fr] gap-4 md:gap-5 min-h-0">
          {/* Client Voice */}
          <div className="noise-overlay relative rounded-2xl bg-[#324444] p-5 md:p-6 overflow-hidden flex flex-col gap-4">
            <SectionLabel align="start">Client Voice</SectionLabel>
            <p className="relative z-10 text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85">
              Max reshaped our image with a degree of finesse and vision that
              surpassed what we'd hoped for. The process felt graceful, and
              the outcomes speak for themselves.
            </p>
            <div className="relative z-10 mt-auto text-[12px] text-white/60">
              <span className="text-white/90 font-medium">Elena Brooks</span>
              {" "}— Creative Director, Halcyon
            </div>
          </div>

          {/* 10M+ */}
          <div className="relative rounded-2xl bg-black overflow-hidden min-h-[220px] flex flex-col items-center justify-center">
            <video
              src={VIDEO_10M}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                10M+
              </span>
              <span className="text-white/85 text-sm">
                Raised for startups
              </span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid grid-rows-2 gap-4 md:gap-5 min-h-0">
          {/* Daily Software */}
          <div className="relative rounded-2xl bg-black overflow-hidden min-h-[220px] flex flex-col justify-between p-5 md:p-6">
            <video
              src={VIDEO_SOFTWARE}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10">
              <SectionLabel>Daily Software</SectionLabel>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <MarqueeRow icons={ROW_1_ICONS} direction="left" />
              <MarqueeRow icons={ROW_2_ICONS} direction="right" />
            </div>
          </div>

          {/* Reach Me */}
          <div className="noise-overlay relative rounded-2xl bg-[#324444] p-5 md:p-6 overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 flex items-start justify-between">
              <SectionLabel align="start">Reach Me</SectionLabel>
              <button
                aria-label="Get in touch"
                className="liquid-glass h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="relative z-10 mt-4 space-y-1">
              <p className="text-sm text-white/85">hi@maxreed.com</p>
              <p className="text-sm text-white/85">+44 207 81 63</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
