import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/1');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark font-display">
      {/* Decorative Background */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] rounded-[100%] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none blur-3xl opacity-30"></div>
      
      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 px-4 animate-gentle-pulse">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center justify-center w-32 h-32 bg-background-light dark:bg-[#1A2617] rounded-xl border border-primary/20 shadow-xl">
            <span className="material-symbols-outlined text-6xl text-primary">mosque</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center mt-4">
          <h1 className="text-gray-900 dark:text-white tracking-tight text-[40px] font-bold leading-tight px-4 pb-1">
            مسجدنا
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-normal leading-normal px-4">
            منصة دعم مساجد الرياض
          </p>
        </div>
      </div>

      {/* Loading */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4 z-20">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_infinite_100ms]"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_infinite_200ms]"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-[bounce_1s_infinite_300ms]"></div>
        </div>
        <p className="text-xs text-primary/60 font-medium tracking-widest uppercase">Loading</p>
      </div>

      {/* Background Silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-[35vh] opacity-10 dark:opacity-20 pointer-events-none z-0">
        <div className="w-full h-full bg-contain bg-bottom bg-no-repeat" style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaq31qYBcU3HbVfA1Q74rhMZ4svV8UmPeTfsXa5-958ZpkrWbMrm4dv0-8A_BfH9zW2TJLa2TiJ77-wsoOLfOpNT4FEeIdlZ60oakDknNBaRQgzBKAqlSmNAvATK8owJaP5EGsKWq87tWnuIME2PAnszBkbJPAttt4JZPlZqCCx18IQqfEsFFEyVfTtvGaCSbQewa1eYD5e38GeZhYc7U2EispFOxU7sVGBWP2kk1mqgM3iU6TQCR-HArEPMBKGp3GfXZ7eNpzIjOw")',
            maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
        }}>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;