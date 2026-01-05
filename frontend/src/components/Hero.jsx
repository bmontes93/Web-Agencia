import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
                        <Sparkles size={14} />
                        Agencia Digital Premium
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black text-white mb-8 leading-tighter tracking-tighter"
                >
                    DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">X</span> PERIENCE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light"
                >
                    Fusionamos <span className="text-white font-semibold">Inteligencia Artificial</span> con diseño inmersivo.
                    <br />
                    El futuro de la web no se ve, se siente.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button 
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 group"
                    >
                        Empezar Ahora
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 text-white font-medium transition-all backdrop-blur-sm">
                        Ver Casos de Éxito
                    </button>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
               <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
                   <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                   />
               </div>
            </motion.div>
        </section>
    );
};

export default Hero;
