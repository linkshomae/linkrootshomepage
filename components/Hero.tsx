import React from 'react';
import { Button } from './ui/Button';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://file-s.s3.amazonaws.com/images/4fe5c00e-660c-4573-9878-838965f3f08f/img.png" 
          alt="Kobe Port Tower Background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: Darker top/bottom, lighter center, with wine red tint */}
        {/* Mobile: Stronger overlay (0.75 opacity) */}
        <div className="absolute inset-0 bg-black/75 md:hidden"></div>
        {/* Desktop: Gradient overlay */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-[25px] md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Horizontal Accent Line */}
        <div className="w-[60px] h-[4px] bg-primary mb-10 animate-fadeIn opacity-0 shadow-[0_0_15px_rgba(127,29,29,0.8)]" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}></div>

        {/* Main Headline */}
        <h1 className="font-sans font-bold text-white leading-[1.8] md:leading-[1.4] tracking-tight mb-8 animate-slideUp opacity-0 w-full max-w-[95vw] mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="block text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl whitespace-normal md:whitespace-nowrap mb-2 md:mb-4">
            英語の実践を、<span className="text-white inline-block">熱意ある若者へ。</span>
          </span>
          <span className="block text-[1.6rem] sm:text-3xl md:text-5xl lg:text-6xl whitespace-normal md:whitespace-nowrap">
            本物の体験を届け、<br className="md:hidden" />日本と世界をつなぐ。
          </span>
        </h1>

        {/* Sub Copy */}
        <div className="animate-fadeIn opacity-0 mb-12 max-w-[800px]" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <p className="font-serif font-light text-[0.9rem] md:text-lg text-white/95 leading-[2.2] tracking-wider drop-shadow-md">
              私たちは、経済的・環境的な壁を超えて、<br />
              意欲ある若者に「英語の実践」という最高の舞台を提供します。<br />
              若者が自らの言葉で語る、ガイドブックにはない「日本の真価」。<br />
              その熱量が、深い感動をゲストの心に刻み、神戸という街の魅力を最大限に響かせます。
            </p>
        </div>

        {/* Buttons - Ghost Style */}
        <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-6 animate-fadeIn opacity-0 w-full sm:w-auto" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          <Button 
            onClick={() => document.getElementById(SectionId.TOURS)?.scrollIntoView({behavior: 'smooth'})}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-white min-w-[200px] w-full sm:w-auto"
          >
            OUR SERVICES
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
            className="bg-transparent border-2 border-white text-white hover:bg-primary hover:text-white hover:border-primary min-w-[200px] w-full sm:w-auto"
          >
            CONTACT US
          </Button>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-20" onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slideUp"></div>
        </div>
      </div>
    </section>
  );
};
