
import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative py-12 px-5 text-center rounded-b-[40px] mb-12 overflow-hidden min-h-[250px] flex flex-col justify-center items-center">
      {/* Background styling */}
      <div className="absolute inset-0 bg-cover bg-center bg-light opacity-90 z-[-2]" 
           style={{ backgroundImage: "url('/Pagina_Inicial.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm z-[-1]" />
      
      {/* Social icons with improved styling */}
      <div className="flex justify-center gap-6 mb-8 z-10">
        <Link 
          to="https://www.instagram.com/carolartes.print/" 
          target="_blank" 
          className="flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-white bg-white hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-7 h-7 text-pink-600" />
        </Link>
        
        <Link 
          to="https://www.tiktok.com/@personalizadosdacarol" 
          target="_blank" 
          className="flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-white bg-white hover:scale-110"
          aria-label="TikTok"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
            <path d="M16 8v12"></path>
            <path d="M12 16v4"></path>
            <path d="M21 8a4 4 0 0 1-4-4 4 4 0 0 0-4-4h-2v16"></path>
          </svg>
        </Link>
        
        <Link 
          to="https://wa.me/31987426591" 
          target="_blank" 
          className="flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-white bg-white hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-green-500" />
        </Link>
      </div>
      
      {/* Title with improved styling */}
      <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary-dark bg-white/80 inline-block py-3 px-8 rounded-full backdrop-blur-md shadow-sm z-10">
        Personalizados da Carol
      </h1>
    </header>
  );
};

export default Header;
