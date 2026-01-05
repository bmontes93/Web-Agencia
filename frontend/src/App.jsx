import { useState } from "react";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import CustomCursor from "./components/CustomCursor";
import Scene3D from "./components/Scene3D";
import { User, Menu, X } from "lucide-react";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 shadow-lg shadow-black/20">
            <div 
                className="cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    Agencia<span className="text-blue-500">.</span>
                </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {['Servicios', 'Trabajo', 'Proceso', 'Contacto'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(item === 'Servicios' ? 'services' : item === 'Trabajo' ? 'work' : item === 'Contacto' ? 'contact' : 'process')}
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-500 after:transition-all hover:after:w-full"
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsLoginOpen(true)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all font-medium text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                    <User size={16} />
                    <span className="hidden sm:inline">Login</span>
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="absolute top-24 left-6 right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col gap-4 md:hidden animate-fade-in-down">
                {['Servicios', 'Trabajo', 'Proceso', 'Contacto'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(item === 'Servicios' ? 'services' : item === 'Trabajo' ? 'work' : item === 'Contacto' ? 'contact' : 'process')}
                        className="text-left text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-white/5 last:border-0"
                    >
                        {item}
                    </button>
                ))}
            </div>
        )}
      </nav>

      <Scene3D />
      
      <main className="relative z-10">
        <Hero />
        <BentoGrid />
        <Portfolio />
        <Process />
        <Contact />
      </main>

      <Footer />
      
      <CustomCursor />
      
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
