
import { Button } from "@/components/ui/button";
import ShopeeItem from "./ShopeeItem";
import { ArrowRight } from "lucide-react";

const ShopeeSection = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/20 mt-12" data-aos="fade-up" data-aos-delay="100">
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm text-white p-8 text-center relative">
        <div className="absolute inset-0 bg-[url('/imagens/pattern.png')] opacity-10"></div>
        <h2 className="font-playfair text-3xl md:text-4xl mb-3 relative z-10">Nossos Produtos Mais Vendidos</h2>
        <p className="text-lg opacity-90 relative z-10">Produtos personalizados feitos com carinho</p>
      </div>
      
      <div className="p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ShopeeItem
            image="/Produto1.jpg"
            name="Adesivo P/ Capa de Caderno/Agenda"
            url="https://shopee.com.br/product/426598945/22193695734?uls_trackid=52hagi6i00v8&utm_campaign=id_kmBHvGMCR4&utm_content=----&utm_medium=affiliates&utm_source=an_18372850597&utm_term=cwa5upak9whq"
          />
          
          <ShopeeItem
            image="/Produto2.jpg"
            name="Kit Personalizados Fazendinha Rosa"
            url="https://shopee.com.br/product/426598945/22898369098?uls_trackid=52hagl1o0010&utm_campaign=id_pImlXgGTN8&utm_content=----&utm_medium=affiliates&utm_source=an_18372850597&utm_term=cwa5x1mywki3"
          />
          
          <ShopeeItem
            image="/Produto3.jpg"
            name="Kit Personalizados Stitch/Angel"
            url="https://shopee.com.br/product/426598945/23093862326?uls_trackid=52hagmvb01v8&utm_campaign=id_11c6GVzyBig&utm_content=----&utm_medium=affiliates&utm_source=an_18372850597&utm_term=cwa5ykzoov9d"
          />
        </div>
        
        <div className="text-center">
          <a
            href="https://shopee.com.br/CarollShop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-primary hover:to-secondary text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-primary/25 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 text-lg">
              <span className="flex items-center">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopeeSection;
