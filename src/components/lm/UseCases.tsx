import { Eyebrow } from "./Eyebrow";

const cases = [
  {
    cat: "Site + SEO",
    name: "Clínica de saúde",
    desc: "Site institucional com blog, agendamento online e SEO local pode gerar até +180% de visitas orgânicas em 3 meses.",
  },
  {
    cat: "Automação + Chatbot",
    name: "Imobiliária",
    desc: "Atendimento automatizado via WhatsApp com agente de IA que qualifica leads e agenda visitas — economizando até 4h por dia da equipe.",
  },
  {
    cat: "Conteúdo + Imagens IA",
    name: "Loja de artesanato",
    desc: "Estratégia de conteúdo completa: posts, stories e imagens de produtos gerados com IA podem dobrar engajamento em 45 dias.",
  },
];

export const UseCases = () => (
  <section id="casos" className="py-24 bg-background">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="reveal">
        <Eyebrow>Casos de uso</Eyebrow>
        <h2 className="font-display font-extrabold leading-tight tracking-tight mb-5 text-[clamp(30px,4vw,46px)]">
          O que dá pra fazer com{" "}
          <em className="font-serif-italic font-normal text-brand">IA bem aplicada</em>
        </h2>
        <p className="text-[17px] text-muted-brand leading-[1.75] max-w-[600px] mb-14 font-light">
          Cenários reais de aplicação para diferentes tipos de negócio. Cada projeto
          é desenhado sob medida para o seu objetivo — esses são exemplos do que
          a IA pode entregar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((p, i) => (
          <article
            key={p.name}
            className={`reveal reveal-d${i + 1} group bg-surface border border-border/50 hover:border-brand-soft rounded-2xl overflow-hidden transition-all hover:-translate-y-1`}
          >
            <div className="aspect-[16/9] bg-surface-2 p-3.5 flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="flex items-center gap-1.5 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]/60" />
                <div className="flex-1 h-1 bg-border/50 rounded ml-1" />
              </div>
              <div className="flex-1 flex flex-col gap-1 relative z-10">
                <div className="h-1 w-3/5 bg-brand rounded" />
                <div className="h-1 w-2/5 bg-border/50 rounded" />
              </div>
              <div className="flex gap-1.5 flex-[2] relative z-10">
                <div className="flex-[2] bg-brand/10 rounded" />
                <div className="flex-1 bg-border/50 rounded" />
                <div className="flex-1 bg-border/50 rounded" />
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--brand-bg)/0.7)] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[11px] font-semibold text-[hsl(var(--brand-blue-soft))] tracking-wider uppercase border border-brand-soft px-3.5 py-1.5 rounded-full bg-brand/10">
                  Caso de uso
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="text-[10px] text-[hsl(var(--brand-blue-soft))] font-semibold tracking-[0.08em] uppercase mb-1.5">
                {p.cat}
              </div>
              <h3 className="font-display text-base font-bold mb-1.5 tracking-tight">{p.name}</h3>
              <p className="text-[13px] text-faint leading-relaxed font-light">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
