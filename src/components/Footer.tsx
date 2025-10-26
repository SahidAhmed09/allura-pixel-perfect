import logo from "@/assets/allura-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src={logo} alt="Allura Tech" className="h-10 w-auto" />
          
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Allura Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
