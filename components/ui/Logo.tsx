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
    xl: "text-5xl md:text-6xl"
  };

  // 画像の大きさを文字のサイズに合わせて調整する設定
  const imgSizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-12 w-auto",
    xl: "h-16 w-auto"
  };

  return (
    // 「flex items-center gap-2」で、画像と文字を横並びにし、少し隙間（gap）を空けています
    <div className={`flex items-center gap-2 select-none ${className}`}>
      
      {/* 1. 左側のロゴ画像 */}
      <img 
        src="https://file-s.s3.amazonaws.com/images/2237667a-1152-4740-9f5b-551046180373/linkroots-logo.jpg" 
        alt="LinkRoots Logo" 
        className={`object-contain ${imgSizeClasses[size]}`}
      />

      {/* 2. 右側の会社名の文字 */}
      <span className={`font-serif font-bold tracking-tight text-primary leading-none ${textSizeClasses[size]}`}>
        合同会社LinkRoots
      </span>

    </div>
  );
};
