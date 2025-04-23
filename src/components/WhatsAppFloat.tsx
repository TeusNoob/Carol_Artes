
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <a
      href="https://wa.me/31987426591"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25D366]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 z-50 transition-all duration-500 animate-float hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloat;
