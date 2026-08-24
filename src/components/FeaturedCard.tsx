import { ReactNode } from "react";

export interface FeaturedCardProps {
  category: string;
  title: string;
  appName: string;
  appDescription: string;
  appIcon: ReactNode;
  bgIllustration: ReactNode;
  accentColor: string; // e.g. 'text-blue-400'
}

export default function FeaturedCard({
  category,
  title,
  appName,
  appDescription,
  appIcon,
  bgIllustration,
  accentColor,
}: FeaturedCardProps) {
  return (
    <div className="group relative flex flex-col justify-between h-[360px] rounded-3xl overflow-hidden border border-white/10 bg-black/25 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl">
      {/* Background Illustration / Art */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {bgIllustration}
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Top Tag & Title */}
      <div className="relative z-10 p-5 pt-6">
        <span className={`text-[10px] font-bold tracking-widest uppercase ${accentColor}`}>
          {category}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-tight text-white/95 line-clamp-2 max-w-[85%]">
          {title}
        </h3>
      </div>

      {/* Bottom App Info Panel */}
      <div className="relative z-10 p-4 mx-3 mb-3 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* App Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-xl overflow-hidden bg-black/30 border border-white/10 flex items-center justify-center">
            {appIcon}
          </div>
          {/* Titles */}
          <div className="min-w-0">
            <h4 className="text-xs font-semibold text-white truncate">{appName}</h4>
            <p className="text-[10px] text-white/50 truncate max-w-[140px]">
              {appDescription}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white text-[11px] font-bold text-white hover:text-black transition-all duration-200 shadow-sm border border-white/10 active:scale-95">
          GET
        </button>
      </div>
    </div>
  );
}
