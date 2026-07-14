import React from 'react';

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  className = "", 
  text = "QUERO SER ACOMPANHADA PELA NUTRI",
  fullWidth = false
}) => {
  const phoneNumber = "5521997514370";
  const message = encodeURIComponent("Olá Nutri, vi o seu vídeo e gostaria de saber mais sobre o seu trabalho!");
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        bg-brand-green hover:bg-[#45a639] text-white font-bold 
        py-3 px-6 md:py-4 md:px-8 rounded-full 
        shadow-sm transform transition-all
        text-[14px] md:text-[16px] text-center uppercase tracking-normal
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {text}
    </a>
  );
};