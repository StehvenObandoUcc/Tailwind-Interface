interface CarouselIndicatorsProps {
  total?: number;
  active?: number;
}

export default function CarouselIndicators({ total = 5, active = 1 }: CarouselIndicatorsProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/10 border border-white/10 backdrop-blur-md select-none">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active 
              ? "w-4 bg-white" 
              : "w-1.5 bg-white/30 hover:bg-white/50 cursor-pointer"
          }`}
        />
      ))}
    </div>
  );
}
