
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Zap, 
  Lock, 
  Calendar, 
  Infinity 
} from 'lucide-react';

// Use a constant for the custom element to avoid shadowing standard JSX elements
// and prevent the "Property 'a' does not exist on type 'JSX.IntrinsicElements'" errors.
// This is a more robust way to handle custom elements in some TypeScript environments.
const WistiaPlayer = 'wistia-player' as any;

// Constants
const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/zDzCEIc3B2tIxRsxGTuh";
const TESTIMONIAL_VIDEOS = ['d26a5l0mu7', '2e3i7kc4d2', 'nfduva0wh3', '3c9jex60yz'];

// Components
const CTAButton = ({ className = "", children }: { className?: string, children?: React.ReactNode }) => (
  <a 
    href={CHECKOUT_URL}
    className={`inline-flex items-center justify-center px-8 py-5 text-xl font-extrabold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg green-pulse uppercase ${className}`}
  >
    {children}
  </a>
);

const WistiaVideo = ({ mediaId, aspect = "16:9", className = "" }: { mediaId: string, aspect?: string, className?: string }) => {
  // Use the new Wistia 3.0 player for the main VSL
  if (mediaId === "u7bkfcwrlm") {
    return (
      <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-zinc-800 bg-zinc-900 ${className}`}>
        {/* Using WistiaPlayer constant to avoid JSX intrinsic element errors */}
        <WistiaPlayer media-id="u7bkfcwrlm" aspect="1.7777777777777777"></WistiaPlayer>
      </div>
    );
  }

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

const HeroSection = () => (
  <section className="relative pt-20 pb-20 px-4 overflow-hidden">
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
        Descubra o mecanismo oculto que reativa a conexão emocional e faz com que ele sinta medo de te perder, mesmo que hoje ele esteja frio e te ignorando.
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
);

const PainSection = () => (
  <section className="py-20 bg-zinc-950 px-4 border-y border-zinc-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Isso parece familiar para você?</h2>
      
      <div className="space-y-6">
        {[
          "Você envia mensagem e ele visualiza, mas não responde ou demora horas.",
          "As respostas dele são frias, curtas e sem nenhum sinal de carinho.",
          "Você sente que ele perdeu totalmente o interesse por quem você é.",
          "A ansiedade te consome toda vez que você pega o celular esperando um sinal.",
          "Quanto mais você tenta conversar ou cobrar, mais ele se afasta e foge."
        ].map((pain, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-red-900/30 transition-colors group">
            <AlertCircle className="text-red-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{pain}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-red-900/10 border border-red-900/30 rounded-3xl text-center">
        <p className="text-xl md:text-2xl font-semibold text-red-200">
          "Você não está sozinha. O que você está vivenciando é a 'Barreira de Resistência Emocional', e correr atrás só a torna mais forte."
        </p>
      </div>
    </div>
  </section>
);

const MechanismSection = () => (
  <section className="py-20 px-4 bg-black relative">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-zinc-500 text-lg uppercase tracking-widest font-bold mb-4">A Solução Científica</h2>
      <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
        Conheça o <span className="text-green-500">Protocolo de Reversão Emocional (PRE)</span>
      </h3>
      
      <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-16">
        <div className="space-y-6">
          <p className="text-xl text-zinc-300 leading-relaxed">
            Diferente de tudo que você já viu, o PRE não se trata de joguinhos ou manipulação barata. 
          </p>
          <p className="text-xl text-zinc-300 leading-relaxed">
            É um protocolo comportamental passo a passo que utiliza gatilhos de <span className="text-white font-bold">Inversão de Prioridade</span>. Nós vamos desarmar a resistência dele e forçar o cérebro de dele a reabrir a conexão emocional que ele mesmo fechou.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-green-500" />
              <span>Sem necessidade de discussões intermináveis</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-green-500" />
              <span>Resultados visíveis nos primeiros 3 dias</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-green-500" />
              <span>Funciona mesmo que ele diga que 'não sente mais o mesmo'</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold transform rotate-6 shadow-lg z-20 text-xs md:text-base">
                FÁCIL APLICAÇÃO
            </div>
            <Zap className="text-yellow-500 mb-6" size={48} fill="currentColor" />
            <h4 className="text-2xl font-bold mb-6 text-white text-center">Como Funciona o Método:</h4>
            
            <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto mb-10 rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
                alt="Mulher Fictícia - Representação do Método" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 -left-2 w-[110%] bg-red-600 p-4 md:p-5 rounded-r-2xl shadow-[10px_0_30px_rgba(220,38,38,0.4)] transform -rotate-1 border-r-4 border-red-700">
                <p className="text-white font-black text-xl md:text-2xl uppercase leading-tight tracking-tighter">MÉTODO TESTADO</p>
                <p className="text-white/90 font-bold text-[10px] md:text-xs uppercase tracking-wide">+5.000 MULHERES ATENDIDAS</p>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-2"><strong>1. Desarme:</strong> Quebramos o ciclo de cobrança e fuga.</li>
                <li className="flex gap-2"><strong>2. Escassez:</strong> Criamos um vazio que só você preenche.</li>
                <li className="flex gap-2"><strong>3. Reativação:</strong> Gatilhos de mensagens específicas que geram dopamina nele.</li>
                <li className="flex gap-2"><strong>4. Ancoragem:</strong> Selamos o novo comportamento para ele não se afastar mais.</li>
            </ul>
        </div>
      </div>
    </div>
  </section>
);

const ImageGridSection = () => (
  <section className="py-20 bg-zinc-950 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Recupere os Momentos que Você Merece</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "https://imgur.com/pyofhQd.jpg",
          "https://imgur.com/4O5J75n.jpg",
          "https://imgur.com/18sxadM.jpg",
          "https://imgur.com/gNJV2Mo.jpg"
        ].map((img, i) => (
          <div key={i} className="aspect-[9/16] overflow-hidden rounded-2xl border-2 border-zinc-800 hover:border-green-500 transition-all duration-500 group">
            <img src={img} alt={`Relationship status ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIAL_VIDEOS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIAL_VIDEOS.length) % TESTIMONIAL_VIDEOS.length);

  return (
    <section className="py-24 px-4 bg-black overflow-hidden border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tighter">O que elas conseguiram...</h2>
        <p className="text-zinc-500 text-center mb-12 font-medium">Resultados reais de quem aplicou o Protocolo</p>
        
        <div className="relative group max-w-sm mx-auto">
          <div className="transition-all duration-700 ease-in-out transform">
            <WistiaVideo mediaId={TESTIMONIAL_VIDEOS[current]} aspect="9:16" />
          </div>
          
          <button 
            onClick={prev}
            className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 text-white z-20 backdrop-blur-md transition-all group-hover:-left-10 md:group-hover:-left-16"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 text-white z-20 backdrop-blur-md transition-all group-hover:-right-10 md:group-hover:-right-16"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIAL_VIDEOS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all duration-500 rounded-full ${i === current ? 'bg-green-500 w-12' : 'bg-zinc-800 w-4'}`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Depoimentos Reais e Verificados
            </p>
        </div>
      </div>
    </section>
  );
};

const DeliverablesSection = () => (
  <section className="py-20 px-4 bg-zinc-950">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Você Recebe Imediatamente</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <CheckCircle2 className="text-green-500" />, title: "Método Passo a Passo", desc: "O guia completo da psicologia por trás da reconexão." },
          { icon: <MessageCircle className="text-green-500" />, title: "Mensagens Prontas", desc: "Copie e cole os gatilhos certos para cada situação de frieza." },
          { icon: <Calendar className="text-green-500" />, title: "Plano de 7 Dias", desc: "Um cronograma de ações diárias para você não se perder." },
          { icon: <Infinity className="text-green-500" />, title: "Acesso Vitalício", desc: "Pague uma vez e tenha o material para sempre em suas mãos." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800/50 transition-colors">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OfferSection = () => (
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
);

const GuaranteeSection = () => (
  <section className="py-16 px-4 bg-zinc-950">
    <div className="max-w-3xl mx-auto p-8 md:p-12 bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-3xl flex flex-col md:flex-row items-center gap-8">
      <div className="w-40 shrink-0">
        <div className="w-32 h-32 rounded-full bg-green-900/20 border-4 border-green-500/30 flex items-center justify-center">
            <ShieldCheck size={64} className="text-green-500" />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Risco Zero: 7 Dias de Garantia Incondicional</h2>
        <p className="text-lg text-zinc-400 leading-relaxed mb-4">
          Você tem uma semana inteira para testar o método. Se você sentir que o conteúdo não é para você ou não tiver resultados, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
        </p>
        <span className="text-green-500 font-bold flex items-center justify-center md:justify-start gap-2 uppercase tracking-wide">
            <ShieldCheck size={20} /> Compromisso com sua Felicidade
        </span>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 bg-zinc-950 text-center border-t border-zinc-900">
    <div className="max-w-3xl mx-auto space-y-12">
      <h2 className="text-[1.75rem] leading-[1.1] md:text-5xl font-extrabold">
        A Escolha é Sua: Continuar Sendo Ignorada ou <span className="text-green-500">Tornar-se Inesquecível?</span>
      </h2>
      <p className="text-xl text-zinc-400">
        Clique no botão abaixo e mude o rumo do seu relacionamento em menos de 5 minutos.
      </p>
      
      <CTAButton className="w-full max-w-lg mx-auto">
        DESBLOQUEAR ACESSO AGORA
      </CTAButton>
      
      <div className="flex justify-center items-center gap-4 text-zinc-600 font-medium">
        <Clock size={20} />
        OFERTA EXPIRA EM BREVE
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 bg-black border-t border-zinc-900 text-zinc-600 text-center text-sm">
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-center gap-8 mb-4">
        <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Políticas de Privacidade</a>
      </div>
      <p>
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais e depoimentos.
      </p>
      <p>&copy; 2024 Protocolo de Reversão Emocional - Todos os Direitos Reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-green-500 selection:text-white">
      <div className="fixed top-0 left-0 w-full bg-red-600 py-2 px-4 z-50 text-center shadow-lg">
        <p className="text-xs md:text-sm font-bold tracking-wider text-white flex items-center justify-center gap-2">
          <Clock size={16} /> ATENÇÃO: OFERTA COM 87% DE DESCONTO POR TEMPO LIMITADO
        </p>
      </div>

      <main className="pt-8">
        <HeroSection />
        <PainSection />
        <MechanismSection />
        <ImageGridSection />
        <TestimonialSlider />
        <DeliverablesSection />
        <OfferSection />
        <GuaranteeSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
