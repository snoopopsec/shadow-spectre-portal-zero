
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("relative text-center", className)}>
      <div className="text-4xl md:text-6xl font-bold tracking-tighter relative inline-block">
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-pulse-slow">
          SPECTRE
        </span>
        <div className="absolute -bottom-1 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
      <div className="text-sm md:text-base text-muted-foreground tracking-wider mt-1">
        THREAT RESEARCH
      </div>
    </div>
  );
};

export default Logo;
