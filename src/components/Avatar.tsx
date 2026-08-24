
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ size = 36 }: AvatarProps) {
  return (
    <div 
      className="relative rounded-full overflow-hidden border border-white/25 bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 shadow-inner hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/95 fill-current">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}
