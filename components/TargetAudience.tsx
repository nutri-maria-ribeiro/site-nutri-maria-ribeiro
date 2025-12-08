import React from 'react';
import { Check, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const TargetAudience: React.FC = () => {
  const forYou = [
    "Você que deseja eliminar de uma vez por todas da sua vida esse ciclo de emagrece e engorda",
    "Você que deseja um acompanhamento mais próximo e que vai te ajudar ao longo do processo",
    "Você que deseja recuperar sua autoestima e reduzir as medidas das roupas no seu guarda-roupa",
    "Você que luta com a ansiedade mas que não precisa sofrer com sua alimentação para vencer isso"
  ];

  const notForYou = [
    "Você que quer resultados rápidos e milagrosos mas sem comprometimento",
    "Você que prefere seguir dietas milagrosas e super restritivas mas que não dão resultados de maneira definitiva",
    "Você que não está disposta a fazer uma reeducação alimentar e mudar sua vida e saúde",
    "Você que acredita que um remédio vai ajudar a emagrecer e resolver todos os seus problemas"
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-lightBg bg-texture-hero">
      <div className="container mx-auto px-6">
        
        {/* Main Header */}
        <div className="text-center mb-8 md:mb-12 space-y-1">
          <p className="text-lg md:text-2xl font-bold text-black">
            Tem dúvidas se o
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-teal uppercase tracking-wide drop-shadow-sm">
            ACOMPANHAMENTO
          </h2>
          <p className="text-lg md:text-2xl font-bold text-black">
             é para você?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* For You Column */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="bg-[#57a4a0] text-white py-4 px-4 md:px-6 text-center font-bold text-base md:text-lg rounded-t-xl shadow-sm">
              Então, vou te contar para QUEM é:
            </div>
            {/* Card Body */}
            <div className="bg-white border-2 border-brand-darkGreen rounded-b-xl shadow-xl p-6 md:p-8 flex-1">
              <ul className="space-y-4 md:space-y-6">
                {forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-brand-darkGreen flex items-center justify-center">
                            <Check className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                    </div>
                    <p className="text-[#253328] text-[15px] md:text-[16px] leading-tight font-medium text-left">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not For You Column */}
          <div className="flex flex-col">
             {/* Header */}
             <div className="bg-[#57a4a0] text-white py-4 px-4 md:px-6 text-center font-bold text-base md:text-lg rounded-t-xl shadow-sm">
              E para QUEM não é:
            </div>
            {/* Card Body */}
            <div className="bg-white border-2 border-brand-red rounded-b-xl shadow-xl p-6 md:p-8 flex-1">
              <ul className="space-y-4 md:space-y-6">
                {notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
                            <X className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                    </div>
                    <p className="text-[#253328] text-[15px] md:text-[16px] leading-tight font-medium text-left">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 space-y-6">
            <p className="text-[#253328] text-base md:text-xl px-2">
                Se você é essa pessoa, saiba que o <br className="hidden md:block" />
                <span className="font-bold text-brand-teal">Acompanhamento</span> é para você!
            </p>
            <div className="flex justify-center w-full">
                <WhatsAppButton className="px-6 py-4 text-base md:text-lg w-full md:w-auto" />
            </div>
        </div>

      </div>
    </section>
  );
};