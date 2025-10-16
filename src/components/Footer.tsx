import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "Contact", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "Licenses"],
  };

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 bg-white rounded-md"></div>
              <span className="text-base font-semibold text-white">Allura Tech</span>
            </div>
            <p className="text-xs text-white/40 mb-6 leading-relaxed">
              Empowering businesses with intelligent automation solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Twitter size={14} className="text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin size={14} className="text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github size={14} className="text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram size={14} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm text-white">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/40 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2024 Allura Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
