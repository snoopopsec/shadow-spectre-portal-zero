
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import Contact from '@/components/Contact';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Add slight delay for dramatic effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background subtle grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] opacity-20"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
      
      {/* Content container */}
      <div className={`relative z-10 max-w-xl w-full mx-auto transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-10 py-10">
          {/* Logo */}
          <div className="w-full">
            <Logo className="mb-6" />
          </div>
          
          {/* Separator */}
          <div className="w-full max-w-xs mx-auto">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-center text-muted-foreground max-w-md leading-relaxed">
            Advanced offensive security research, red team tools development,
            and vulnerability discovery.
          </p>
          
          {/* Contact */}
          <Contact email="contact@spectrethreat.com" className="mt-4" />
          
          {/* Footer */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Spectre Threat Research. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
