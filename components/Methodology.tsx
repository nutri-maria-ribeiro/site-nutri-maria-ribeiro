import React from 'react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      title: "Avaliação e planejamento",
      description: "Para iniciar sua transformação, será definido o protocolo conforme seu objetivo e individualidade. Antes mesmo da consulta será enviado um formulário para avaliar seu histórico clínico e alimentar. Nesta fase, faremos um estudo sobre seus hábitos, análise da composição corporal e identificaremos os fatores que estão impedindo de conquistar os resultados que deseja.",
    },
    {
      title: "Ajuste metabólico",
      description: "Um plano alimentar totalmente personalizado para destravar os seus resultados. A dieta será calculada durante a consulta e entregue na mesma hora, podendo iniciar imediatamente seu protocolo. Nessa fase, a meta é começar a habituar o corpo a um padrão alimentar mais saudável e sem restrições, reduzindo inflamações e iniciando o processo de queima de gordura.",
    },
    {
      title: "Evolução",
      description: "A partir do plano personalizado, começamos a aprimorar ainda mais suas escolhas alimentares para evoluir seus resultados. Iremos ajustar o plano alimentar com nutrientes que irão potencializar o emagrecimento e o ganho de massa muscular. Nesta fase, o foco é maximizar a definição muscular enquanto continua a queima de gordura.",
    },
    {
      title: "Manutenção dos resultados",
      description: "A fase final é dedicada à manutenção dos resultados obtidos, evitando o “efeito sanfona” que impede de manter os resultados a longo prazo. A dieta é ajustada para um plano de manutenção e os alimentos continuam sendo variados e dentro das suas preferências e individualidades, evitando a monotonia alimentar e te ensinando a ter mais autonomia para fazer boas escolhas.",
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-teal relative overflow-hidden bg-texture-top">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 text-white">
          <h2 className="text-[26px] md:text-[35px] font-bold leading-tight drop-shadow-md">
            Conheça as fases do meu <br className="hidden md:block" /> acompanhamento
          </h2>
          <div className="w-32 md:w-48 h-0.5 bg-white mx-auto mt-4 opacity-70"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="flex flex-col space-y-8 md:space-y-0">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // Left side on desktop
              return (
                <div key={idx} className="relative w-full md:min-h-[250px] flex items-center group">
                  
                  {/* Desktop Center Icon (Target style) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 items-center justify-center z-20">
                     <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center bg-brand-teal">
                        <div className="w-full h-0.5 bg-white/60 absolute"></div>
                        <div className="h-full w-0.5 bg-white/60 absolute"></div>
                     </div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:ml-auto md:justify-start md:pl-16'}`}>
                    
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl relative w-full md:max-w-md mx-auto md:mx-0">
                      
                      {/* Triangle Arrow - Desktop Only */}
                      <div 
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent
                        ${isEven 
                          ? 'right-[-15px] border-l-[15px] border-l-brand-wine' 
                          : 'left-[-15px] border-r-[15px] border-r-brand-wine'
                        }`}
                      ></div>

                      {/* Mobile Arrow (Top center) */}
                      <div className="md:hidden absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-b-[10px] border-b-brand-wine"></div>

                      <h3 className="text-lg md:text-2xl font-bold mb-3 text-brand-wine text-center md:text-left">
                        {step.title}:
                      </h3>
                      <p className="text-black text-[14px] md:text-[16px] leading-relaxed text-left font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 flex justify-center w-full">
             <a 
              href="https://api.whatsapp.com/send?phone=5521997514370&text=Ol%C3%A1%20Nutri%2C%20vi%20o%20seu%20v%C3%ADdeo%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho!" 
              className="bg-brand-green text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors uppercase text-sm md:text-base tracking-wide w-full md:w-auto text-center block md:inline-block"
             >
                QUERO SER ACOMPANHADA PELA NUTRI
             </a>
        </div>

      </div>
    </section>
  );
};