import Image from "next/image";
import MainGlassPanel from "@/components/MainGlassPanel";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden py-12 md:py-24 bg-zinc-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <Image
          src="/fondo.jpg"
          alt="visionOS Background Room"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <MainGlassPanel />
      </div>
    </div>
  );
}
