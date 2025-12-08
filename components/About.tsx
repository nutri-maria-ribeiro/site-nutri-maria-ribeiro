import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-lightBg bg-texture-hero">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
          
          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl md:text-[33px] font-normal leading-tight">
              <span className="font-bold text-black">PRAZER, ME CHAMO</span> <br/>
              <span className="font-bold text-brand-teal">MARIA RIBEIRO</span>
            </h2>

            <div className="space-y-4 text-black text-[15px] md:text-[16px] leading-relaxed text-justify">
              <p>
                Sou nutricionista formada há 12 anos pela Universidade Federal Fluminense (UFF) e pós-graduada em nutrição clínica, esportiva e fitoterapia funcional, além de diversos cursos em modulação e saúde intestinal e mestre em nutrição e estresse pela Universidade do estado do Rio de Janeiro (UERJ).
              </p>
              <p>
                Atuo em consultório há 11 anos, e há 4 anos também de forma online. Sempre fui apaixonada por atividade física e ajudar pessoas a mudarem de vida.
              </p>
              <p>
                Alguns anos atrás descobri uma doença e câncer intestinal, com isso perdi muitos quilos e precisei me recuperar e transformar meu corpo novamente através da alimentação.
              </p>
              <p>
                Sou muito feliz e realizada com o que faço! Vivo o que acredito também na nutrição e alimentação!
              </p>
              <p className="font-bold text-black text-center md:text-left">
                E quero ser a sua última nutricionista!
              </p>
            </div>

            <div className="pt-4 flex justify-center md:justify-start w-full">
              <WhatsAppButton fullWidth={true} className="md:w-auto" />
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
             <img 
               src="https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/desktop/3379271_1_176107934068f7f02c78d26163982269.png" 
               alt="Maria Ribeiro" 
               className="relative rounded-xl shadow-[0_0_8px_rgba(87,164,160,1)] w-full max-w-[280px] md:max-w-md object-cover h-auto"
             />
          </div>

        </div>
      </div>
    </section>
  );
};