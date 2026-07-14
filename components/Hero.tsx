import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top Bar */}
      <div className="bg-brand-teal w-full py-3 bg-texture-top bg-center px-4 flex justify-center">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-white font-bold text-xs md:text-xl tracking-wider leading-tight">
            SUA NUTRICIONISTA NA <span className="text-brand-wine font-extrabold">TIJUCA</span> E REGIÃO
          </h2>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative bg-brand-lightBg min-h-[auto] md:min-h-[600px] flex items-center bg-texture-hero pb-12 md:pb-0">
        <div className="max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center py-8 md:py-12">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start order-2 md:order-1">
            <h1 className="text-2xl md:text-[30px] font-bold text-brand-teal leading-tight tracking-wide">
              Emagreça de forma definitiva com um acompanhamento nutricional que se adapta à sua rotina
            </h1>
            
            <div className="space-y-4 text-brand-text font-medium text-base md:text-[16px]">
              <p>
                Chega de sofrer com dietas que você acredita que vão te ajudar a emagrecer mas só te levam a um caminho: <b className="text-black">frustração</b>.
              </p>
              <p>
                Através do método que eu desenvolvi tenho ajudado diversas mulheres a emagrecerem de forma definitiva e sem sofrer!
              </p>
              <p className="font-bold text-black">
                Vou te ajudar a conquistar o corpo que tanto sonha!
              </p>
            </div>

            <div className="mt-4 w-full md:w-auto">
               <WhatsAppButton fullWidth={true} className="md:w-auto" />
            </div>
            
            <p className="text-xs md:text-[12px] text-gray-500 font-medium">
              Nutricionista especialista em nutrição clínica e esportiva
            </p>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 relative flex justify-center items-end mt-4 md:mt-0">
             <img 
               src="https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/desktop/3379271_1_176107934068f7f02c7a929008275933.png" 
               alt="Nutricionista Maria Ribeiro" 
               className="w-auto h-auto max-h-[300px] md:max-h-[500px] object-contain drop-shadow-xl"
             />
          </div>
        </div>
      </div>
    </section>
  );
};