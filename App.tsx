import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Lock 
} from 'lucide-react';

// Constantes
const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/zDzCEIc3B2tIxRsxGTuh";
const TESTIMONIAL_VIDEOS = ['d26a5l0mu7', '2e3i7kc4d2', 'nfduva0wh3', '3c9jex60yz'];

const CTAButton = ({ className = "", children }: { className?: string, children?: React.ReactNode }) => (
  <a 
    href={CHECKOUT_URL}
    className={`inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg green-pulse uppercase text-center ${className}`}
  >
    {children}
  </a>
);

const WistiaVideo = ({ mediaId, aspect = "16:9", className = "" }: { mediaId: string, aspect?: string, className?: string }) => {
  const paddingBottom = aspect === "9:16" ? "177.77%" : "56.25%";
  
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-zinc-800 bg-zinc-900 ${className}`}>
      <div style={{ paddingBottom, position: 'relative' }}>
        <div style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
          <iframe 
            src={`https://fast.wistia.net/embed/iframe/${mediaId}?videoFoam=true`} 
            title="Video Player" 
            allow="autoplay; fullscreen" 
            frameBorder="0" 
            className="wistia_embed" 
            name="wistia_embed" 
            width="100%" 
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIAL_VIDEOS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIAL_VIDEOS.length) % TESTIMONIAL_VIDEOS.length);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-green-500 selection:text-white">
      {/* Barra de Urgência Topo */}
      <div className="fixed top-0 left-0 w-full bg-red-600 py-2 px-4 z-50 text-center shadow-lg">
        <p className="text-xs md:text-sm font-bold tracking-wider text-white flex items-center justify-center gap-2">
          <Clock size={16} /> ATENÇÃO: OFERTA COM 87% DE DESCONTO POR TEMPO LIMITADO
        </p>
      </div>

      <main className="pt-12">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-900/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs md:text-sm font-semibold mb-4 animate-pulse">
              <AlertCircle size={14} />
              Acesso por Tempo Limitado
            </div>
            
            <h1 className="text-[1.75rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              O Segredo <span className="text-red-500 red-glow italic">"Invisível"</span> para Fazer Ele Te Desejar Como Se Fosse a Primeira Vez... <br className="hidden md:block" />
              <span className="block mt-3 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                Em Apenas 24 Horas
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed px-2">
              Descubra o mecanismo oculto que reativa a conexão emocional e faz com que ele sinta medo de te perder.
            </p>

            <CTAButton className="mt-4 w-full md:w-auto">
              Quero Restaurar Meu Relacionamento Agora
            </CTAButton>

            <div className="mt-12">
              <WistiaVideo mediaId="u7bkfcwrlm" aspect="16:9" />
              <p className="mt-4 text-zinc-500 text-sm italic">Assista ao vídeo acima para entender como funciona</p>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section className="py-20 bg-zinc-950 px-4 border-y border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Isso parece familiar para você?</h2>
            <div className="space-y-6">
              {[
                "Você envia mensagem e ele visualiza, mas não responde ou demora horas.",
                "As respostas dele são frias, curtas e sem nenhum sinal de carinho.",
                "Você sente que ele perdeu totalmente o interesse por quem você é.",
                "A ansiedade te consome toda vez que você espera um sinal no celular."
              ].map((pain, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 transition-colors">
                  <AlertCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-lg text-zinc-300 leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="py-24 px-4 bg-black overflow-hidden border-y border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter">O que elas conseguiram...</h2>
            <div className="relative group max-w-sm mx-auto">
              <WistiaVideo mediaId={TESTIMONIAL_VIDEOS[current]} aspect="9:16" />
              <button 
                onClick={(e) => { e.preventDefault(); prev(); }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full border border-white/20 text-white z-20 backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); next(); }}
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full border border-white/20 text-white z-20 backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section id="oferta" className="py-24 px-4 bg-black border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-600 to-green-600 mb-12">
              <div className="bg-black rounded-[14px] p-8 md:p-12">
                <h2 className="text-2xl font-bold text-zinc-400 mb-2 uppercase tracking-widest">Oferta Especial de Lançamento</h2>
                <div className="space-y-4 mb-8">
                  <p className="text-2xl text-zinc-500 line-through decoration-red-500/50">De R$ 197,00</p>
                  <div className="flex flex-col items-center">
                      <span className="text-zinc-400 text-lg">Por apenas</span>
                      <span className="text-6xl md:text-8xl font-black text-green-500 tracking-tighter">R$ 23,90</span>
                  </div>
                  <p className="text-zinc-400 font-medium">Pagamento único • Acesso Vitalício</p>
                </div>
                <CTAButton className="w-full text-2xl py-6">
                  SIM! QUERO GARANTIR MINHA VAGA
                </CTAButton>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-zinc-500 text-sm">
                  <div className="flex items-center gap-2"><Lock size={16} /> Compra 100% Segura</div>
                  <div className="flex items-center gap-2"><Zap size={16} /> Acesso Imediato</div>
                  <div className="flex items-center gap-2"><ShieldCheck size={16} /> Garantia de 7 Dias</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="max-w-3xl mx-auto p-8 md:p-12 bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-3xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-32 h-32 shrink-0 rounded-full bg-green-900/20 border-4 border-green-500/30 flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck size={64} className="text-green-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Risco Zero: 7 Dias de Garantia</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                Você tem uma semana inteira para testar o método. Se você sentir que o conteúdo não é para você, eu devolvo 100% do seu dinheiro.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-zinc-950 text-center border-t border-zinc-900">
          <CTAButton className="w-full max-w-lg mx-auto">
            DESBLOQUEAR ACESSO AGORA
          </CTAButton>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-zinc-900 text-zinc-600 text-center text-sm">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Políticas de Privacidade</a>
          </div>
          <p>&copy; 2024 Protocolo de Reversão Emocional - Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </div>
  );
}