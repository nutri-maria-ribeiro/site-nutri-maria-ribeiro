import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Onde fica localizado o seu consultório?",
      answer: "Tijuca - Rua Engenheiro Enaldo Cravo Peixoto, 105, sala 508"
    },
    {
      question: "Você atende plano de saúde?",
      answer: "Visando oferecer a melhor experiência e os melhores resultados aos meus pacientes, os atendimentos são particulares e 100% individualizados. Mas eu emito recibo em todas as consultas para você solicitar um possível reembolso junto ao seu plano."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "PIX, Cartão de crédito, Débito ou Link de pagamento."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-brand-teal relative bg-texture-top">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        
        {/* Left Side: Title */}
        <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[35px] md:text-[50px] font-normal leading-[1.3] text-[#f2f2f2]">
            <b className="font-bold">Ainda ficou com<br/>alguma dúvida?</b>
          </h2>
          <div className="h-0.5 w-40 md:w-60 bg-brand-wine my-4 md:my-6"></div>
          <p className="text-[20px] md:text-[22px] text-[#f2f2f2] mb-2 leading-none">
            Perguntas<br/>frequentes
          </p>
          <p className="text-[14px] text-white mt-4">
             Talvez a resposta esteja aqui ao lado
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-5 text-left focus:outline-none hover:bg-gray-50"
                onClick={() => toggleFAQ(idx)}
              >
                <span className={`font-medium text-[15px] md:text-[16px] pr-4 ${openIndex === idx ? 'text-brand-teal' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="text-brand-teal shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 md:p-5 pt-0 text-black text-sm md:text-base border-t border-transparent mt-0">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};