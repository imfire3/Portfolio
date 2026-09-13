import { FC, useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, Mail, Linkedin, Send, Sparkles } from 'lucide-react';

export const ContactSection: FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Cadrage de nouveau produit / MVP',
    message: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vincentgiacalonepro@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:vincentgiacalonepro@gmail.com?subject=${encodeURIComponent(
      `[Contact Portfolio] ${formData.projectType} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Big Typography & Direct Contacts */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff4b16] mb-4">
              <span>06 / CONTACT</span>
              <span>✦</span>
              <span>PARIS & REMOTE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-white leading-[0.95] mb-6">
              Vous avez une idée, un produit ou un défi ?
            </h2>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Disponible pour des missions Product Owner / AI Product Builder en freelance, ou opportunités de leadership produit.
            </p>
          </div>

          {/* Monumental Action Link */}
          <div>
            <a
              href="mailto:vincentgiacalonepro@gmail.com"
              className="group inline-flex items-center gap-4 text-3xl sm:text-5xl font-black font-display tracking-tight text-[#ff4b16] hover:text-white transition-colors"
            >
              <span>LET’S BUILD SOMETHING GREAT</span>
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Fast Contact Options */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-2xl bg-[#14151a] hover:bg-white/10 border border-white/10 text-xs font-mono text-white/90 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Email copié dans le presse-papier !</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#ff4b16]" />
                  <span>vincentgiacalonepro@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/vincentgiacalone"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#14151a] hover:bg-white/10 border border-white/10 text-xs font-mono text-white/90 flex items-center gap-2 transition-all shadow-lg"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>Profil LinkedIn ↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Assistant */}
        <div className="lg:col-span-5 bg-[#14151a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Message Direct
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/40">Réponse &lt; 24h</span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Votre nom ou entreprise
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex. Sophie Martin · FinTech Corp"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#ff4b16] transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Votre adresse email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@entreprise.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#ff4b16] transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Sujet de l'échange
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1a1b22] border border-white/10 text-sm text-white focus:outline-none focus:border-[#ff4b16] transition-colors font-sans"
              >
                <option value="Cadrage de nouveau produit / MVP">Cadrage de nouveau produit / MVP</option>
                <option value="Mission Product Owner / Freelance">Mission Product Owner / Freelance</option>
                <option value="Intégration d'IA & Automatisation">Intégration d'IA & Automatisation</option>
                <option value="Opportunité CDI / Direction Produit">Opportunité CDI / Direction Produit</option>
                <option value="Simple échange informel">Simple échange informel</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                Votre message
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Parlez-moi de vos enjeux, de votre roadmap ou de votre idée..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#ff4b16] transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ff4b16] hover:bg-[#ff4b16]/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ff4b16]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
