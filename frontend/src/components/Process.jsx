import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search size={32} />,
        title: "Discovery",
        desc: "Inmersión profunda en tu marca, objetivos y audiencia para definir el norte estratégico."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Strategy & Design",
        desc: "Conceptualización visual y arquitectónica. Diseñamos prototipos que respiran tu identidad."
    },
    {
        icon: <Code2 size={32} />,
        title: "Development",
        desc: "Ingeniería limpia y escalable. Construimos soluciones robustas con tecnología de vanguardia."
    },
    {
        icon: <Rocket size={32} />,
        title: "Launch & Growth",
        desc: "Despliegue optimizado y monitoreo constante para asegurar el máximo rendimiento."
    }
];

const Process = () => {
    return (
        <section className="py-32 bg-slate-900/30 relative z-10 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">De la idea a la realidad en cuatro pasos estratégicos.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-800 -z-10" />
                            )}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors h-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-6 border border-slate-700 shadow-lg shadow-blue-900/10">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
