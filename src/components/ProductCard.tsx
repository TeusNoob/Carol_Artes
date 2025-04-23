
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  paymentUrl: string;
}

const ProductCard = ({ image, name, price, paymentUrl }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const openPaymentPopup = (url: string) => {
    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open(
      url, 
      'Pagamento',
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2 backdrop-blur-sm bg-white/70 border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-pastel-pink to-white/50 p-4">
        <div className="relative w-full h-full animate-paper-float">
          <img
            src={`/imagens/${image}`}
            alt={name}
            className={`w-full h-full object-contain transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
            }`}
          />
          <div className="absolute top-2 right-2 animate-sparkle">
            <div className="text-primary/20">
              <Image className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-white/40 to-white/60 backdrop-blur-sm border-t border-white/20">
        <h3 className="text-lg font-semibold text-primary-dark mb-2 line-clamp-2">{name}</h3>
        <p className="text-2xl font-bold text-primary mb-4">{price}</p>
        
        <button
          onClick={() => openPaymentPopup(paymentUrl)}
          className="w-full relative group overflow-hidden rounded-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 transition-all duration-500 group-hover:opacity-100 backdrop-blur-sm"></div>
          <div className="relative bg-gradient-to-r from-primary to-secondary group-hover:from-primary-dark group-hover:to-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5">
            Comprar Agora
          </div>
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
