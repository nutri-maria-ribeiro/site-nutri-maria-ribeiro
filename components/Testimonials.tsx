import React from 'react';

export const Testimonials: React.FC = () => {
  const images = [
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78d946849876383837348.jpg",
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78d946849876388565989.jpg",
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78d946849876387592599.jpg",
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78e506992582073486725.jpg",
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78e506992582071767447.jpg",
    "https://pages.greatpages.com.br/www.nutrimariaribeiro.com.br/1761149268/imagens/mobile/3379271_1_176107934068f7f02c78e506992582078752928.jpg"
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-teal bg-texture-top">
      <div className="container mx-auto px-6">
        <h2 className="text-[24px] md:text-[35px] font-normal text-center text-[#f3f3ff] mb-8 md:mb-12 shadow-black drop-shadow-sm leading-tight">
          Confira alguns <span className="font-bold">resultados</span>:
        </h2>
        
        {/* Responsive Masonry Layout: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-5xl mx-auto">
            {images.map((src, idx) => (
                <div key={idx} className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                     <img 
                       src={src} 
                       alt={`Resultado ${idx + 1}`} 
                       className="w-full h-auto block" 
                       loading="lazy"
                     />
                </div>
            ))}
        </div>

        <div className="mt-12 flex justify-center w-full">
             <a 
              href="https://api.whatsapp.com/send?phone=5521997514370&text=Ol%C3%A1%20Nutri%2C%20vi%20o%20seu%20v%C3%ADdeo%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho!" 
              className="bg-brand-green text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors uppercase text-sm md:text-base text-center w-full md:w-auto block md:inline-block"
             >
                QUERO SER ACOMPANHADA PELA NUTRI
             </a>
        </div>
      </div>
    </section>
  );
};