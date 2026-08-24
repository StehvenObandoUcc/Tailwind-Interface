import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ 
  src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", 
  alt = "User Avatar", 
  size = 36 
}: AvatarProps) {
  return (
    <div 
      className="relative rounded-full overflow-hidden border border-white/25 shadow-inner hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${size}px`}
        priority
      />
    </div>
  );
}
