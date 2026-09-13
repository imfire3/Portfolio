import { FC, useState } from 'react';
import maplaceauportImg from '../assets/images/projects/maplaceauport.png';
import jobappImg from '../assets/images/projects/jobapp.png';
import catdexImg from '../assets/images/projects/catdex.png';
import voxeImg from '../assets/images/projects/voxe.png';
import {
  Sparkles,
  CheckCircle2,
  Camera,
  Search,
  SlidersHorizontal,
  Anchor,
  Send,
  ExternalLink,
  MapPin,
  Check,
  Building,
  Briefcase,
  Layers,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'ma-place-au-port' | 'job-app' | 'catdex' | 'voxe-booster';
  title: string;
  imageUrl?: string;
}

export const ProjectMockup: FC<ProjectMockupProps> = ({ type, title, imageUrl }) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Map type to imported bundle image assets
  const bundledImage =
    type === 'ma-place-au-port'
      ? maplaceauportImg
      : type === 'job-app'
      ? jobappImg
      : type === 'catdex'
      ? catdexImg
      : type === 'voxe-booster'
      ? voxeImg
      : undefined;

  const targetImage = bundledImage || imageUrl;

  // Render the user's raw image at 100% width, 100% height and centered
  if (targetImage && !imageFailed) {
    return (
      <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#090a0d]">
        <img
          src={targetImage}
          alt={title}
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // 1. MA PLACE AU PORT MOCKUP (Matching maplaceauport.com & screenshot)
  if (type === 'ma-place-au-port') {
    return (
      <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] flex items-center justify-center p-3 sm:p-5 bg-[#0b0d10] overflow-hidden rounded-2xl border border-white/10 group-hover:border-sky-500/40 transition-all duration-500">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Browser container replicating the real screenshot */}
        <div className="relative w-full max-w-[540px] bg-[#fbf9f5] text-[#1a1b1e] rounded-xl shadow-2xl overflow-hidden border border-white/20 transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Top window chrome */}
          <div className="bg-[#ede9e2] px-3.5 py-2 flex items-center justify-between border-b border-[#ded7cc] text-[11px] font-mono text-[#666]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e86959]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f4be4f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62c554]" />
              <span className="ml-2 font-medium text-[#444]">maplaceauport.com</span>
            </div>
            <span className="text-[10px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full">
              509 Ports couverts
            </span>
          </div>

          {/* Internal Dashboard Grid */}
          <div className="flex min-h-[340px]">
            {/* Left mini sidebar */}
            <div className="hidden sm:flex flex-col justify-between w-36 bg-[#f4f1ea] border-r border-[#e5dfd3] p-2.5 text-[10px]">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#111]">
                  <Anchor className="w-3.5 h-3.5 text-sky-700" />
                  <span>Ma place au port</span>
                </div>
                <div className="space-y-1 text-[#555]">
                  <div className="px-2 py-1 rounded bg-[#e8e2d5] font-semibold text-[#111]">Accueil</div>
                  <div className="px-2 py-1 hover:text-black">Mes démarches</div>
                  <div className="px-2 py-1 hover:text-black">509 ports</div>
                  <div className="px-2 py-1 hover:text-black">Notifications</div>
                </div>
              </div>
              <div className="border-t border-[#e2dcce] pt-2 text-[9px] text-[#777] flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-sky-800 text-white font-bold flex items-center justify-center text-[8px]">
                  VG
                </div>
                <span className="truncate">V. Giacalone</span>
              </div>
            </div>

            {/* Main Stage */}
            <div className="flex-1 p-3.5 sm:p-5 flex flex-col justify-between space-y-3">
              {/* Badge + Headline */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>France métropolitaine et outre-mer</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight text-[#111] leading-tight">
                  Votre place au port, en dix minutes.
                </h4>
                <p className="text-[11px] text-[#555] mt-1 leading-snug">
                  Multipliez vos candidatures sans multiplier les démarches : constitution des dossiers, rédaction, suivi des listes d'attente.
                </p>
              </div>

              {/* Central Card: Assigned Berth Preview */}
              <div className="bg-white rounded-xl p-3 border border-[#e5dfd3] shadow-sm flex flex-col sm:flex-row gap-3 items-center">
                {/* Visual of harbor */}
                <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden bg-gradient-to-tr from-sky-800 to-amber-500 shrink-0 flex items-center justify-center text-white">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-200">Bassin Vauban</div>
                    <div className="text-xs font-bold">Ponton C · #42</div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 w-full space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">Votre Dufour 40</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      ● Acceptée
                    </span>
                  </div>
                  <div className="text-[10px] text-[#666] italic">
                    « Bienvenue à bord de votre nouvelle place. »
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-[#444] pt-1">
                    <span>✓ Port-Cros</span>
                    <span>✓ Bandol</span>
                    <span className="text-emerald-700 font-bold">02 mars 2026</span>
                  </div>
                </div>
              </div>

              {/* Stats & CTA Row */}
              <div className="flex items-center justify-between pt-1 border-t border-[#ede9e2]">
                <div className="flex items-center gap-4 text-left">
                  <div>
                    <div className="text-sm font-black text-[#111]">100%</div>
                    <div className="text-[9px] text-[#777]">Français</div>
                  </div>
                  <div>
                    <div className="text-sm font-black text-sky-800">509</div>
                    <div className="text-[9px] text-[#777]">Ports couverts</div>
                  </div>
                </div>

                <div className="bg-[#111] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                  <span>Explorer les ports</span>
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. JOBTRACKER (JOBAPP) MOCKUP (Matching JobTracker screenshot)
  if (type === 'job-app') {
    return (
      <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] flex items-center justify-center p-3 sm:p-5 bg-[#0b0c10] overflow-hidden rounded-2xl border border-white/10 group-hover:border-emerald-500/40 transition-all duration-500">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Desktop window */}
        <div className="relative w-full max-w-[540px] bg-[#0d0f14] text-white rounded-xl shadow-2xl overflow-hidden border border-white/15 transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Header */}
          <div className="bg-[#14161f] px-3.5 py-2 flex items-center justify-between border-b border-white/10 text-[11px] font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-1 text-white font-bold flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-emerald-400" />
                JobTracker
              </span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
              Collecte auto 08:00
            </span>
          </div>

          {/* Body */}
          <div className="flex min-h-[340px]">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col justify-between w-32 bg-[#10121a] border-r border-white/10 p-2 text-[10px]">
              <div className="space-y-2">
                <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Navigation</div>
                <div className="space-y-1 text-white/70">
                  <div className="px-2 py-1 rounded bg-white/10 text-white font-bold flex items-center justify-between">
                    <span>Offres</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-2 py-1 hover:text-white">Candidatures</div>
                  <div className="px-2 py-1 hover:text-white">Extension</div>
                  <div className="px-2 py-1 hover:text-white">Sources</div>
                </div>
              </div>

              {/* Bottom AI Box */}
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2 text-[9px] text-emerald-200">
                <div className="flex items-center gap-1 font-bold text-emerald-400 mb-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Matching IA</span>
                </div>
                <p className="text-white/60 text-[8px] leading-tight">Compare le CV et génère les lettres</p>
              </div>
            </div>

            {/* Main view with offer cards */}
            <div className="flex-1 p-3 space-y-2.5">
              {/* Filter bar */}
              <div className="flex items-center justify-between gap-1.5 bg-white/5 p-1.5 rounded-lg border border-white/5 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-white/80">
                  <Search className="w-3 h-3 text-white/40" />
                  <span className="text-white/40">Product Manager, Paris</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">
                    Remote: ON
                  </span>
                </div>
              </div>

              {/* Offers Grid */}
              <div className="space-y-2">
                {/* Offer 1: Doctolib - 90% */}
                <div className="bg-[#151822] rounded-lg p-2.5 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xs text-white">Senior Product Manager</div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      Match 90%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/60">
                    <span className="text-sky-400 font-medium">Doctolib</span>
                    <span>·</span>
                    <span>LinkedIn</span>
                    <span>·</span>
                    <span className="text-white/80">70k–85k €</span>
                  </div>
                  {/* Matching bar */}
                  <div className="space-y-1 pt-1">
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[90%]" />
                    </div>
                    <div className="text-[9px] text-white/50 font-mono">
                      Top matches : Roadmap, Discovery B2C, Data A/B tests
                    </div>
                  </div>
                </div>

                {/* Offer 2: Mistral AI */}
                <div className="bg-[#151822] rounded-lg p-2.5 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xs text-white">Product Manager (AI Features)</div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                      Match 95%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/60">
                    <span className="text-amber-400 font-medium">Mistral AI</span>
                    <span>·</span>
                    <span>Indeed</span>
                    <span>·</span>
                    <span className="text-white/80">75k–95k €</span>
                  </div>
                  <div className="text-[9px] text-white/60 line-clamp-1">
                    Drive AI feature strategy, convert user needs into product specs & LLM workflows.
                  </div>
                </div>
              </div>

              {/* Bottom footer status */}
              <div className="flex items-center justify-between text-[9px] font-mono text-white/40 pt-1">
                <span>3 offres collectées aujourd'hui</span>
                <span className="text-emerald-400">Lettre de motivation générée ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. CATDEX MOCKUP (Matching cat-dex.netlify.app & screenshot)
  if (type === 'catdex') {
    return (
      <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] flex items-center justify-center p-3 sm:p-5 bg-[#0b0d10] overflow-hidden rounded-2xl border border-white/10 group-hover:border-indigo-500/40 transition-all duration-500">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Container reproducing catdex web/mobile presentation */}
        <div className="relative w-full max-w-[540px] bg-[#f7f9ff] text-[#111] rounded-xl shadow-2xl overflow-hidden border border-white/20 transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Top chrome */}
          <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-[#e5e9f5]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px]">
                🐱
              </span>
              <span className="font-extrabold text-sm tracking-tight text-[#141824]">CatDex</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-medium text-[#555]">
              <span className="hidden sm:inline">Expérience</span>
              <span className="hidden sm:inline">Vision</span>
              <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-full text-[10px]">
                Tester la bêta
              </span>
            </div>
          </div>

          {/* Hero Content with 2 phone overlays */}
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Left pitch */}
            <div className="sm:col-span-6 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 font-bold">
                ● PROJET PERSONNEL · PRODUCT BUILDER
              </div>
              <h4 className="text-2xl font-black text-[#111] tracking-tight leading-tight">
                Ton quartier. <br />
                <span className="text-indigo-600">Tes chats.</span>
              </h4>
              <p className="text-[11px] text-[#555] leading-snug">
                CatDex transforme chaque chat croisé en découverte, en souvenir et en progression. Explore, capture, identifie.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] font-mono bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded-full">
                  ✦ Analyse IA
                </span>
                <span className="text-[10px] font-mono bg-purple-100 text-purple-900 px-2 py-0.5 rounded-full">
                  Hyperlocal
                </span>
              </div>
            </div>

            {/* Right overlapping phone frames */}
            <div className="sm:col-span-6 flex items-center justify-center relative h-52">
              {/* Phone 1: Map radar */}
              <div className="absolute left-2 top-2 w-36 h-48 bg-[#eef2fc] rounded-2xl border-2 border-white shadow-lg p-2 flex flex-col justify-between">
                <div className="text-[9px] font-mono font-bold text-[#444]">Paris 11e · 3 chats</div>
                {/* Radar points */}
                <div className="relative h-24 bg-white/70 rounded-xl border border-indigo-100 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-indigo-200 animate-ping absolute" />
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center z-10">
                    🐾
                  </div>
                </div>
                <div className="bg-white rounded-lg p-1.5 shadow-sm text-[8px] border border-indigo-50">
                  <div className="font-bold text-indigo-900">Miel (150m)</div>
                  <div className="text-[#888]">Rare · Pelage roux</div>
                </div>
              </div>

              {/* Phone 2: Active Camera View (Overlapping) */}
              <div className="absolute right-2 bottom-0 w-36 h-48 bg-[#0d1017] rounded-2xl border-2 border-white shadow-2xl p-2 flex flex-col justify-between text-white z-20">
                <div className="flex items-center justify-between text-[8px] font-mono text-white/60">
                  <span>SCANNER</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Reticle camera viewfinder */}
                <div className="relative h-24 rounded-lg bg-gradient-to-t from-black/80 to-indigo-950 flex flex-col items-center justify-center border border-white/20">
                  <div className="text-2xl">🐱</div>
                  <div className="text-[8px] font-mono bg-black/60 px-1.5 py-0.5 rounded text-indigo-300 mt-1">
                    ✦ Analyse IA
                  </div>
                </div>

                {/* Shutter button & card */}
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[8px] font-bold">#042 Découvert</div>
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full border border-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. VOXE BOOSTER MOCKUP (Matching Voxe Booster screenshot & website)
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] flex items-center justify-center p-3 sm:p-5 bg-[#0b0d10] overflow-hidden rounded-2xl border border-white/10 group-hover:border-amber-500/40 transition-all duration-500">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Window matching Voxe landing screenshot */}
      <div className="relative w-full max-w-[540px] bg-[#fffaf3] text-[#111] rounded-xl shadow-2xl overflow-hidden border border-white/20 transition-transform duration-500 group-hover:scale-[1.01]">
        {/* Nav */}
        <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-[#f2e7d5]">
          <div className="flex items-center gap-2">
            <span className="font-black text-base tracking-tighter text-[#1e2338]">voxe</span>
            <span className="text-[#e2542a] text-xs font-bold">×</span>
            <span className="font-black text-xs uppercase tracking-wider bg-[#1e2338] text-white px-1.5 py-0.5 rounded">
              BOOSTER
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium text-[#444]">
            <span className="hidden sm:inline">Booster</span>
            <span className="hidden sm:inline">Les programmes</span>
            <span className="bg-[#facc15] text-[#111] font-bold px-2.5 py-1 rounded-full text-[10px] shadow-sm">
              Faire le point
            </span>
          </div>
        </div>

        {/* Main Banner (Vibrant Terracotta / Orange) */}
        <div className="bg-[#e45427] text-white p-4 sm:p-6 space-y-3">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black italic tracking-tight uppercase leading-tight font-display">
              BOOSTER, LE BILAN DE COMPÉTENCES DES FEMMES LIKE U.
            </h4>
            <p className="text-[11px] text-amber-100 font-medium italic">
              SUBLIME TA VIE PRO AVEC LA PREMIÈRE MÉTHODE POUR LES FEMMES LIKE U.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="bg-[#facc15] text-black font-bold text-[10px] px-3 py-1.5 rounded-full shadow-sm">
              Faire le point gratuitement
            </span>
            <span className="bg-[#fff5eb] text-black font-semibold text-[10px] px-3 py-1.5 rounded-full">
              Voir le programme détaillé
            </span>
          </div>
        </div>

        {/* 4 Pillars White Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-white border-b border-[#f0e4d2] text-[10px] text-[#333]">
          <div className="flex items-center gap-1.5 p-1">
            <span className="text-sm">💰</span>
            <span className="font-medium leading-tight">Payable en 3x sans frais</span>
          </div>
          <div className="flex items-center gap-1.5 p-1">
            <span className="text-sm">💻</span>
            <span className="font-medium leading-tight">En ligne (visio + e-learning)</span>
          </div>
          <div className="flex items-center gap-1.5 p-1">
            <span className="text-sm">⭐</span>
            <span className="font-medium leading-tight">24h étalées sur 3 mois</span>
          </div>
          <div className="flex items-center gap-1.5 p-1">
            <span className="text-sm">👩</span>
            <span className="font-medium leading-tight">Pas de pré-requis</span>
          </div>
        </div>

        {/* Bottom Quote Strip */}
        <div className="bg-[#fffaf3] p-3 text-center border-t border-[#f7ede0]">
          <div className="text-[11px] font-black uppercase text-[#111] italic tracking-wide">
            « ON N'A PAS APPRIS À QUESTIONNER LE STATU QUO. »
          </div>
          <div className="text-[9px] text-[#777] mt-0.5">
            Plateforme apprenante & cockpit de coaching conçus par Vincent Giacalone
          </div>
        </div>
      </div>
    </div>
  );
};
