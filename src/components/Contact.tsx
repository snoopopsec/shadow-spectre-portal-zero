
import React, { useState } from 'react';
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
  email: string;
}

const Contact: React.FC<ContactProps> = ({ className, email }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div 
        className="flex items-center space-x-2 cursor-pointer group transition-all duration-300 ease-in-out"
        onClick={copyToClipboard}
      >
        <Mail className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
        <span className="text-muted-foreground group-hover:text-white transition-colors">
          {email}
        </span>
      </div>
      {isCopied && (
        <div className="text-xs text-primary/70 mt-1 animate-fade-in">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default Contact;
