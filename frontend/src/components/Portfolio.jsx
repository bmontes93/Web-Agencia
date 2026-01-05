import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Finance",
    category: "Fintech / Web3",
    description: "Plataforma de trading descentralizado con visualización de datos en tiempo real.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
    tags: ["React", "WebGL", "Solidity"]
  },
  {
    title: "Aura Spaces",
    category: "Real Estate de Lujo",
    description: "Experiencia inmersiva para visualización arquitectónica 3D.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
    tags: ["Three.js", "Vue", "GSAP"]
  },
  {
    title: "Kinetix",
    category: "Performance Sportswear",
    description: "E-commerce headless con animaciones fluidas y carga instantánea.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "Shopify", "Framer Motion"]
  }
];

const Portfolio = () => {
    return (
        <section id="work" className="py-32 bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-4 block">Nuestro Trabajo</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">Casos de Éxito</h2>
                    <p className="text-slate-400 max-w-2xl text-lg">Resultados tangibles donde la estética se encuentra con la funcionalidad.</p>
                </motion.div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b border-white/5 pb-20 last:border-0"
        >
            {/* Image Section */}
            <div className={`relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Section */}
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-blue-500 font-medium mb-6">{project.category}</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.description}
                </p>
                
                <button className="flex items-center gap-2 text-white font-medium group/btn hover:text-blue-400 transition-colors">
                    Ver Proyecto
                    <ArrowUpRight size={20} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </button>
            </div>
        </motion.div>
    );
}

export default Portfolio;
