import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  // 文字の大きさを調整する設定
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl md:text-8xl"
  };

  return (
    <div className={`font-serif font-bold tracking-tight flex items-baseline leading-none select-none text-primary ${textSizeClasses[size]} ${className}`}>
      合同会社LinkRoots
    </div>
  );
};
