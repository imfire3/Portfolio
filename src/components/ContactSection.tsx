import { FC, useState, FormEvent } from 'react';
import { ArrowUpRight, Copy, Check, Linkedin, Send } from 'lucide-react';

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
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-4">
              <span>06 / CONTACT</span>
              <span>✦</span>
              <span>PARIS & REMOTE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-[var(--text)] leading-[0.95] mb-6">
              Vous avez une idée, un produit ou un défi ?
            </h2>
            <p className="text-lg text-[var(--text-2)] max-w-xl leading-relaxed">
              Disponible pour des missions Product Owner / AI Product Builder en freelance, ou opportunités de leadership produit.
            </p>
          </div>

          <div>
            <a
              href="mailto:vincentgiacalonepro@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl sm:text-4xl font-black font-display tracking-tight text-[var(--accent)] hover:text-[var(--text-3)] transition-colors"
            >
              <span>LET'S BUILD SOMETHING GREAT</span>
              <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-soft-strong)] border border-[var(--border)] text-xs font-mono text-[var(--text-2)] flex items-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--text)]" />
                  <span className="text-[var(--text)] font-bold">Email copié dans le presse-papier !</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--text-3)]" />
                  <span>vincentgiacalonepro@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/vincentgiacalone"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-soft-strong)] border border-[var(--border)] text-xs font-mono text-[var(--text-2)] flex items-center gap-2 transition-all"
            >
              <Linkedin className="w-4 h-4 text-[var(--text-3)]" />
              <span>Profil LinkedIn ↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-3)] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--text)] uppercase tracking-wider">
                Message Direct
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-4)]">Réponse {"<"} 24h</span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-3)] mb-1.5">
                Votre nom ou entreprise
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex. Sophie Martin · FinTech Corp"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans placeholder:text-[var(--text-4)]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-3)] mb-1.5">
                Votre adresse email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@entreprise.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans placeholder:text-[var(--text-4)]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-3)] mb-1.5">
                Sujet de l'échange
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans"
              >
                <option value="Cadrage de nouveau produit / MVP">Cadrage de nouveau produit / MVP</option>
                <option value="Mission Product Owner / Freelance">Mission Product Owner / Freelance</option>
                <option value="Intégration d'IA & Automatisation">Intégration d'IA & Automatisation</option>
                <option value="Opportunité CDI / Direction Produit">Opportunité CDI / Direction Produit</option>
                <option value="Simple échange informel">Simple échange informel</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-3)] mb-1.5">
                Votre message
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Parlez-moi de vos enjeux, de votre roadmap ou de votre idée..."
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans resize-none placeholder:text-[var(--text-4)]"
              />
            </div>

            {sentSuccess && (
              <p className="text-xs font-mono text-[var(--text-3)]">
                ✓ Votre messagerie va s'ouvrir — j'y suis toujours pour de vrai.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--bg)] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--accent-glow)]"
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