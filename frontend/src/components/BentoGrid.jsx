import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { AnalyticsIcon, SeoIcon, AdsIcon, MobileIcon } from "./ServiceIcons";

const services = [
  {
    icon: <AnalyticsIcon />,
    title: "Analítica Avanzada",
    desc: "Dashboards en tiempo real para tomar decisiones informadas.",
    cols: "md:col-span-2",
  },
  {
    icon: <SeoIcon />,
    title: "SEO Global",
    desc: "Posicionamiento orgánico en mercados internacionales.",
    cols: "md:col-span-1",
  },
  {
    icon: <AdsIcon />,
    title: "Performance Ads",
    desc: "Campañas de alto ROI en Google y Meta.",
    cols: "md:col-span-1",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile First",
    desc: "Experiencias optimizadas para dispositivos móviles.",
    cols: "md:col-span-2",
  },
];

const BentoGrid = () => {
  return (
    <section id="services" className="py-32 bg-transparent px-6 relative z-10">
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">Nuestros Servicios</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Ingeniería digital de precisión para marcas ambiciosas.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <HolographicCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HolographicCard = ({ item, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseMove={handleMouseMove}
            className={`${item.cols} relative rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl group overflow-hidden`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(147, 51, 234, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Border Highlight */}
             <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.4),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div className="mb-6 rounded-2xl w-fit transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-mono tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm opacity-80">{item.desc}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default BentoGrid;
