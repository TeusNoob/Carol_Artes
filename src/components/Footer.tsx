
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-6 mt-12 bg-white/95 rounded-t-3xl text-gray backdrop-blur-md shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      &copy; {currentYear} Personalizados da Carol. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
