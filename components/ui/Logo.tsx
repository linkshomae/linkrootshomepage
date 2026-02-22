import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  // Text-based sizing
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl"
  };

  // 画像のサイズ調整用（追加）
  const imgSizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16"
  };

  return (
    // 全体を横並び（中央揃え）にするための枠
    <div className={`flex items-center select-none group ${className}`}>
      
      {/* 🌟ここが追加された「画像を表示する」部分です */}
      <img 
        src="/linkrootshomepage/logo.jpg" 
        alt="LinkRoots Logo" 
        className={`object-contain mr-3 ${imgSizeClasses[size]}`}
      />
      
      {/* ここから下は、元の美しい文字デザインをそのまま活かしています */}
      <div className={`flex items-baseline leading-none ${textSizeClasses[size]}`}>
        {/* Japanese part */}
        <span className="font-serif font-medium text-[#722F37] mr-2 text-[0.45em] self-center tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
          合同会社
        </span>
        {/* English part */}
        <span className="font-display font-semibold text-[#722F37] tracking-wider -mt-1 group-hover:tracking-widest transition-all duration-500">
          LinkRoots
        </span>
      </div>
      
    </div>
  );
};
