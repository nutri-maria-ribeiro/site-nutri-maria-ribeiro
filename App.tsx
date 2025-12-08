import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TargetAudience } from './components/TargetAudience';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-brand-text bg-white">
      <main>
        <Hero />
        <About />
        <TargetAudience />
        <Methodology />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5521997514370&text=Ol%C3%A1%20Nutri%2C%20gostaria%20de%20agendar%20uma%20consulta!"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          fixed bottom-6 right-6 z-50 
          bg-green-500 text-white p-4 rounded-full shadow-2xl 
          transform transition-all duration-500 ease-in-out hover:scale-110 hover:bg-green-600
          flex items-center justify-center
          ${showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-green-500" />
      </a>
    </div>
  );
};

export default App;