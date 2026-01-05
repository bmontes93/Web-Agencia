import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <span className="text-2xl font-bold text-white block mb-2">Agencia<span className="text-blue-500">.</span></span>
                <p className="text-sm text-slate-500">Transformando ideas en experiencias digitales.</p>
            </div>

            <div className="flex gap-6">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                    <motion.a 
                        key={i}
                        href="#" 
                        whileHover={{ y: -3, color: "#60a5fa" }}
                        className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Icon size={20} />
                    </motion.a>
                ))}
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
            <p>&copy; {new Date().getFullYear()} Agencia Digital. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
