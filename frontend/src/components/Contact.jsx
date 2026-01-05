import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Error de conexión. Inténtalo más tarde.");
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Empecemos a crear algo extraordinario.</h2>
            <p className="text-slate-400 text-lg mb-8">
              ¿Listo para transformar tu presencia digital? Cuéntanos sobre tu proyecto y descubramos cómo podemos ayudarte a escalar.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <p className="text-slate-400">hola@agenciadigital.com</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center text-purple-400 shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                        <p className="text-slate-400">Lima, Perú / Remoto Global</p>
                    </div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nombre</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Tu nombre"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Empresa (Opcional)</label>
                    <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Nombre de tu empresa"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Mensaje</label>
                <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Cuéntanos brevemente sobre tus necesidades..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
                }`}
              >
                {status === 'loading' ? (
                   <>
                    <Loader2 className="animate-spin" /> Procesando...
                   </>
                ) : status === 'success' ? (
                   <>
                    <CheckCircle2 /> Mensaje Enviado
                   </>
                ) : status === 'error' ? (
                   <>
                    <AlertCircle /> Error - Reintentar
                   </>
                ) : (
                   <>
                    Enviar Mensaje <Send size={18} />
                   </>
                )}
              </button>
              
              {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
