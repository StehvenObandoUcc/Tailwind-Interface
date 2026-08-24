import { ReactNode } from "react";

export interface SmallAppCardProps {
  name: string;
  description: string;
  icon: ReactNode;
}

export default function SmallAppCard({ name, description, icon }: SmallAppCardProps) {
  return (
    <div className="flex-1 min-w-[260px] p-3 rounded-2xl bg-white/[0.04] border border-white/5 backdrop-blur-md flex items-center justify-between gap-3 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/15 hover:scale-[1.01]">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center border border-white/10 flex-shrink-0 overflow-hidden">
          {icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-xs font-semibold text-white/90 truncate">{name}</h4>
          <p className="text-[10px] text-white/45 truncate">{description}</p>
        </div>
      </div>
      <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-[10px] font-bold text-white hover:text-black transition-all duration-200 active:scale-95 border border-white/5">
        GET
      </button>
    </div>
  );
}
