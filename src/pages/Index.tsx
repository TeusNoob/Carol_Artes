
import { useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ShopeeSection from "@/components/ShopeeSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
    
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "Bem-vindo(a)!",
        description: "Conheça nossos moldes exclusivos e produtos personalizados.",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);
  
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background styling */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" 
        style={{ backgroundImage: "url('/Fundo.jpg')" }}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="section-container">
          {/* Products grid with improved spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            <ProductCard
              image="/Pack_Mods.jpg"
              name="Pack 55 Moldes"
              price="R$ 9,99"
              paymentUrl="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1039323113-b37cc4a4-dd32-47d2-ab05-fcbb821d99f3"
            />
            
            <ProductCard
              image="/Molde_Buque.jpg"
              name="Molde Buquê"
              price="R$ 4,99"
              paymentUrl="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1039323113-cc6f0f4d-7407-467a-a723-6103f27d035f"
            />
            
            <ProductCard
              image="/Caixa_Envelope.jpg"
              name="Molde Caixa Envelope"
              price="R$ 4,99"
              paymentUrl="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1039323113-82b545c9-4b78-449a-93fc-51608a99962e"
            />
          </div>
          
          {/* Notice box with improved styling */}
          <div className="bg-[rgba(255,228,240,0.3)] border-l-4 border-primary p-6 my-12 rounded-r-lg" data-aos="fade-up">
            <strong>Importante:</strong> Após a compra de um molde digital, você terá acesso a um projeto no Canva com visualização liberada. Para editar, é necessário fazer uma cópia. Os moldes são arquivos digitais e não envolvem envio de produto físico.
          </div>
          
          {/* Shopee Section */}
          <ShopeeSection />
        </div>
      </main>
      
      <WhatsAppFloat />
      
      <Footer />
    </div>
  );
};

export default Index;
