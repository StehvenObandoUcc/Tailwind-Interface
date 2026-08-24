import { ChevronRight, Search, LayoutGrid, Gamepad2, Heart, Music, Sparkles } from "lucide-react";
import Avatar from "./Avatar";
import CarouselIndicators from "./CarouselIndicators";
import FeaturedCard from "./FeaturedCard";
import SmallAppCard from "./SmallAppCard";

export default function MainGlassPanel() {
  // Data for the 4 featured cards
  const featuredCards = [
    {
      category: "ESSENTIALS",
      title: "Change Your World View",
      appName: "Microsoft Word",
      appDescription: "Create & Receive Docs",
      accentColor: "text-sky-400",
      appIcon: (
        <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg select-none">
          W
        </div>
      ),
      bgIllustration: (
        <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-blue-950 to-indigo-950 relative">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* Floating Glass Panels */}
          <div className="absolute top-[25%] left-[20%] w-24 h-16 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm rotate-[-12deg] shadow-lg flex items-center justify-center">
            <div className="w-8 h-2 bg-white/20 rounded-full" />
          </div>
          <div className="absolute top-[40%] right-[15%] w-20 h-28 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm rotate-[15deg] shadow-lg flex flex-col gap-2 p-3">
            <div className="w-full h-8 bg-sky-500/20 rounded" />
            <div className="w-3/4 h-2 bg-white/25 rounded" />
            <div className="w-1/2 h-2 bg-white/20 rounded" />
          </div>
          {/* Abstract glowing sphere */}
          <div className="absolute bottom-[20%] left-[30%] w-16 h-16 rounded-full bg-sky-400/20 blur-xl" />
        </div>
      ),
    },
    {
      category: "OUR FAVORITES",
      title: "A New Way to Play Classic Games",
      appName: "Apple Arcade",
      appDescription: "Play Classic Chess & Cards",
      accentColor: "text-pink-400",
      appIcon: (
        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white select-none">
          <Gamepad2 className="w-5 h-5 text-white" />
        </div>
      ),
      bgIllustration: (
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-950 to-red-950 relative">
          {/* Chessboard perspective */}
          <div 
            className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] border-t border-white/15 bg-[radial-gradient(ellipse_at_center,transparent_20%,#00000030_100%)]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              transform: 'perspective(150px) rotateX(45deg)',
            }}
          />
          {/* Neon Floating Chess Piece Vector Representation */}
          <div className="absolute top-[20%] left-[45%] w-14 h-24 flex flex-col items-center drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
            {/* Crown/Head */}
            <div className="w-6 h-6 rounded-full bg-pink-500 border border-white/30" />
            {/* Neck */}
            <div className="w-4 h-3 bg-pink-400 rounded-sm mt-1 border-x border-white/20" />
            {/* Body */}
            <div className="w-8 h-10 bg-pink-600 rounded-t-xl border border-white/20" />
            {/* Base */}
            <div className="w-10 h-3 bg-pink-700 rounded-full border border-white/20" />
          </div>
          {/* Small Green Pawn */}
          <div className="absolute top-[45%] left-[25%] w-8 h-14 flex flex-col items-center drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
            <div className="w-4 h-4 rounded-full bg-green-500 border border-white/20" />
            <div className="w-6 h-8 bg-green-600 rounded-t-lg mt-0.5 border border-white/20" />
            <div className="w-8 h-2 bg-green-700 rounded-full border border-white/20" />
          </div>
        </div>
      ),
    },
    {
      category: "TRY NOW",
      title: "Get Behind the Wheel of an F1 Car",
      appName: "JigSpace",
      appDescription: "Unforgettable 3D Driving",
      accentColor: "text-amber-400",
      appIcon: (
        <div className="w-full h-full bg-black flex items-center justify-center text-white select-none">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>
      ),
      bgIllustration: (
        <div className="w-full h-full bg-zinc-950 relative overflow-hidden">
          {/* Cyberpunk Perspective Laser Grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.4) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              transform: 'perspective(180px) rotateX(60deg) translateY(-20px)',
              transformOrigin: 'top center'
            }}
          />
          {/* Racing car stylized SVG outline */}
          <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-48 h-20 opacity-90 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            <svg viewBox="0 0 200 80" className="w-full h-full fill-none stroke-red-500 stroke-2">
              {/* Spoiler */}
              <path d="M 10,25 L 30,25 L 20,40 Z" fill="rgba(220, 38, 38, 0.3)" />
              <line x1="20" y1="40" x2="20" y2="60" />
              {/* Car Body Chassis */}
              <path d="M 20,60 L 60,60 L 80,45 L 140,45 L 160,60 L 190,60 L 180,40 L 140,40 L 120,30 L 70,30 L 40,45 Z" fill="rgba(30, 30, 30, 0.9)" />
              {/* Wheels */}
              <circle cx="55" cy="60" r="14" fill="#111" stroke="#ef4444" strokeWidth="2" />
              <circle cx="55" cy="60" r="6" fill="#ef4444" />
              <circle cx="155" cy="60" r="14" fill="#111" stroke="#ef4444" strokeWidth="2" />
              <circle cx="155" cy="60" r="6" fill="#ef4444" />
              {/* Cockpit */}
              <path d="M 90,30 L 110,30 L 120,40 L 80,40 Z" fill="#ef4444" />
            </svg>
          </div>
          {/* Speed particles */}
          <div className="absolute top-[20%] left-[10%] w-8 h-[1px] bg-red-500/50" />
          <div className="absolute top-[35%] right-[15%] w-12 h-[1px] bg-red-400/30" />
          <div className="absolute bottom-[40%] left-[5%] w-6 h-[1px] bg-red-500/40" />
        </div>
      ),
    },
    {
      category: "INCREDIBLE INDIE",
      title: "Search for Clues in Blackbox",
      appName: "Blackbox",
      appDescription: "Think outside the box",
      accentColor: "text-purple-400",
      appIcon: (
        <div className="w-full h-full bg-zinc-900 border border-purple-500/30 flex items-center justify-center text-white select-none">
          <div className="w-4 h-4 bg-purple-500 rounded-sm animate-pulse" />
        </div>
      ),
      bgIllustration: (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 relative">
          {/* Glass Orbs */}
          <div className="absolute top-[20%] left-[20%] w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/30 border border-white/20 backdrop-blur-md shadow-inner flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/40 blur-[1px]" />
          </div>
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 rounded-full bg-gradient-to-bl from-blue-500/20 to-purple-600/30 border border-white/10 backdrop-blur-[6px] shadow-lg flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white/30 blur-[2px]" />
          </div>
          <div className="absolute top-[40%] right-[15%] w-10 h-10 rounded-full bg-pink-500/20 blur-md" />
          {/* Abstract background light */}
          <div className="absolute bottom-[-10%] left-[-10%] w-36 h-36 rounded-full bg-purple-500/10 blur-2xl" />
        </div>
      ),
    },
  ];

  // Data for the 3 small cards
  const smallCards = [
    {
      name: "Rec Room",
      description: "Play & Create Games with Friends",
      icon: (
        <div className="w-full h-full bg-rose-600 flex items-center justify-center text-white font-extrabold text-sm select-none">
          REC
        </div>
      ),
    },
    {
      name: "Complete HeartX",
      description: "Hands-on medical learning app",
      icon: (
        <div className="w-full h-full bg-red-950 flex items-center justify-center text-red-500 select-none">
          <Heart className="w-5 h-5 fill-red-500" />
        </div>
      ),
    },
    {
      name: "Simply Piano",
      description: "Learn Songs Fast & Fun",
      icon: (
        <div className="w-full h-full bg-cyan-950 flex items-center justify-center text-cyan-400 select-none">
          <Music className="w-5 h-5" />
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex items-stretch w-full max-w-[1240px] gap-6 px-4 md:px-0">
      {/* Floating Vertical Toolbar (visionOS Navigation Side Menu) */}
      <div className="hidden md:flex flex-col items-center gap-6 py-5 px-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg self-center select-none">
        <button className="p-3 rounded-full bg-white/10 text-white border border-white/20 transition-all hover:bg-white/20 active:scale-95">
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full text-white/50 transition-all hover:bg-white/5 hover:text-white/80 active:scale-95">
          <Gamepad2 className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full text-white/50 transition-all hover:bg-white/5 hover:text-white/80 active:scale-95">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Main Glassmorphic window */}
      <div className="flex-1 p-6 md:p-8 rounded-[32px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
        
        {/* Subtle decorative inner corner reflections */}
        <div className="absolute inset-0 pointer-events-none rounded-[32px] border border-white/[0.07] ring-1 ring-white/5" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between gap-4 mb-6">
          <button className="flex items-center gap-1 group text-sm font-semibold text-white/90 hover:text-white transition-colors">
            Get Started
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Carousel Dot Indicators */}
          <div className="hidden sm:block">
            <CarouselIndicators />
          </div>

          {/* User Profile Avatar */}
          <Avatar />
        </header>

        {/* Carousel indicators on mobile (under headers) */}
        <div className="sm:hidden flex justify-center mb-6">
          <CarouselIndicators />
        </div>

        {/* Featured App Grid */}
        <main className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {featuredCards.map((card, idx) => (
            <FeaturedCard key={idx} {...card} />
          ))}
        </main>

        {/* Section title for small cards */}
        <section className="relative z-10">
          <button className="flex items-center gap-1 group text-sm font-semibold text-white/90 hover:text-white transition-colors mb-4">
            Apps and Games We Love
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Grid of smaller apps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {smallCards.map((card, idx) => (
              <SmallAppCard key={idx} {...card} />
            ))}
          </div>
        </section>

        {/* Bottom Window Grabber (visionOS detail) */}
        <div className="mt-8 flex justify-center items-center gap-2 select-none pointer-events-none opacity-50">
          <div className="w-1.5 h-1.5 rounded-full bg-white/45" />
          <div className="w-24 h-1 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}
