
import { useState } from "react";
import { Image } from "lucide-react";

interface ShopeeItemProps {
  image: string;
  name: string;
  url: string;
}

const ShopeeItem = ({ image, name, url }: ShopeeItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-white/20 animate-paper-float"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[160px] overflow-hidden flex items-center justify-center bg-gradient-to-br from-pastel-pink to-white/50 p-3 relative">
        <img 
          src={`/imagens/${image}`}
          alt={name} 
          className={`w-full h-full object-contain transition-transform duration-500 ${
            isHovered ? "scale-110 rotate-2" : "scale-100 rotate-0"
          }`}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 animate-sparkle opacity-50">
          <Image className="w-4 h-4 text-primary/30" />
        </div>
      </div>
      <div className="p-4 text-center bg-gradient-to-b from-white/40 to-white/60 backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-primary-dark line-clamp-2">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default ShopeeItem;
