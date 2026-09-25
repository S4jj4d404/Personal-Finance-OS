import React, { useState } from 'react';

interface AppLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  language?: 'en' | 'bn';
}

export const AppLogo: React.FC<AppLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  language = 'en',
}) => {
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg font-bold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
    xl: 'text-3xl font-extrabold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon: Official Personal Finance OS App Tile Matching 12647.png */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-[22%] overflow-hidden shadow-lg shadow-black/40 flex-shrink-0 group`}
      >
        {!imageError ? (
          <img
            src="/assets/logo.png"
            alt="Personal Finance OS Logo"
            className="w-full h-full object-cover rounded-[22%]"
            onError={() => setImageError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="walletGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4CE8C5" />
                <stop offset="100%" stopColor="#1DB998" />
              </linearGradient>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#55F2CE" />
                <stop offset="100%" stopColor="#24CAA7" />
              </linearGradient>
              <linearGradient id="pocketGrad" x1="40" y1="40" x2="70" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#02151D" />
                <stop offset="100%" stopColor="#082A36" />
              </linearGradient>
            </defs>

            {/* Squircle Tile */}
            <rect width="100" height="100" rx="24" fill="#04141C" />

            {/* Top Wallet Fold */}
            <path d="M28 37C28 30 33 25 40 25H64C67 25 69 27 67 30L61 37H28Z" fill="#3AE3BF" />
            <path d="M33 37H67L66 41H33V37Z" fill="#031118" />

            {/* Main Wallet Body */}
            <path d="M28 37H70C75.5 37 80 41.5 80 47V67C80 74 74 80 67 80H40C33.4 80 28 74.6 28 68V37Z" fill="url(#walletGrad)" />

            {/* Front Curved Pocket with Chart */}
            <path d="M37 52C37 45 42 40 49 40H70V67C70 74 65 78 58 78H43C39.7 78 37 75.3 37 72V52Z" fill="url(#pocketGrad)" />

            {/* 3 Rising Financial Bar Chart Bars */}
            <rect x="42" y="63" width="5.5" height="11" rx="2.75" fill="url(#barGrad)" />
            <rect x="50" y="54" width="5.5" height="20" rx="2.75" fill="url(#barGrad)" />
            <rect x="58" y="46" width="5.5" height="28" rx="2.75" fill="url(#barGrad)" />

            {/* Right Clasp Tab */}
            <path d="M68 45H77C81 45 84 48 84 52V56C84 60 81 63 77 63H68V45Z" fill="#24CAA7" />
            <circle cx="75.5" cy="54" r="3.2" fill="#04141C" />
            <circle cx="75.5" cy="54" r="1.5" fill="#1DB998" />
          </svg>
        )}
      </div>

      {showText && (
        <span className={`${textSizes[size]} text-[#F5FAFA] font-sans tracking-tight whitespace-nowrap`}>
          Personal Finance OS
        </span>
      )}
    </div>
  );
};
