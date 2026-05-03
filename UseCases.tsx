import { useEffect, useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { supabase } from "@/integrations/supabase/client";
import caseClinica from "@/assets/case-clinica.jpg";
import caseImobiliaria from "@/assets/case-imobiliaria.jpg";
import caseArtesanato from "@/assets/case-artesanato.jpg";

interface UseCaseRow {
  id: string;
  category: string;
  name: string;
  description: string;
  image_url: string | null;
  image_alt: string | null;
  display_order: number;
}

const fallbackImages = [caseClinica, caseImobiliaria, caseArtesanato];

export const UseCases = () => {
  const [cases, setCases] = useState<UseCaseRow[]>([]);

  useEffect(() => {
    supabase
      .from("use_cases")
      .select("*")
      .order("display_order", { ascending: true })
      .then(({ data }) => {
        if (data) setCases(data);
      });
  }, []);

  return (
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
          {cases.map((p, i) => {
            const image = p.image_url ?? fallbackImages[i % fallbackImages.length];
            const alt = p.image_alt ?? p.name;
            return (
              <article
                key={p.id}
                className={`reveal reveal-d${(i % 3) + 1} group bg-surface border border-border/50 hover:border-brand-soft rounded-2xl overflow-hidden transition-all hover:-translate-y-1`}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-surface-2">
                  <img
                    src={image}
                    alt={alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-[hsl(var(--brand-bg)/0.7)] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-[hsl(var(--brand-blue-soft))] tracking-wider uppercase border border-brand-soft px-3.5 py-1.5 rounded-full bg-brand/10">
                      Caso de uso
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] text-[hsl(var(--brand-blue-soft))] font-semibold tracking-[0.08em] uppercase mb-1.5">
                    {p.category}
                  </div>
                  <h3 className="font-display text-base font-bold mb-1.5 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-faint leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
