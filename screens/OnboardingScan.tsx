import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScan: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-x-hidden font-display">
      <div className="flex items-center p-6 justify-end">
        <button onClick={() => navigate('/home')} className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors">
          <span className="text-[#a2c398] text-base font-bold leading-normal tracking-[0.015em]">تخطي</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 w-full px-6 gap-6">
        <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#1f2b1c] shadow-2xl border border-white/5">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn1qCmQDWB_-gftywexiIIbhKhNnmeNRha0P3nYca_1Q-0O2zxcBXAO1owdbM3uXXzytbv9-Kiccx0gfNr2pfmjF0mPrUth2lWOSLPho6BNrU_95SkvJP7NOdzzdu-xylij_IlE1sTiqIUce_sBlPeo67AWF6k5MN7NymxRXXjGXFuVF88DcqhJlNoXkdI1jRjVuFdOnBUgPxB-6TcaY52aQXCum3EhO334d3Idd1O6s1xnIPc7EphyiO5xhFqiMW-r-r36-zETkyI")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl border-2 border-primary/50 bg-background-dark/60 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-5xl">qr_code_scanner</span>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-2 mt-4 max-w-sm">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">
            امسح رمز QR
          </h1>
          <p className="text-gray-400 text-lg font-normal leading-relaxed">
            عند المدخل وتبرع بالضبط بما هو مفقود
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full px-6 pb-8 pt-4 gap-6">
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#344e2e]"></div>
          <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-2 w-2 rounded-full bg-[#344e2e]"></div>
        </div>
        <button onClick={() => navigate('/onboarding/3')} className="w-full h-14 bg-primary hover:bg-green-500 text-white text-lg font-bold rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_4px_20px_rgba(83,210,45,0.3)]">
          <span>التالي</span>
          <span className="material-symbols-outlined text-2xl rotate-180">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};

export default OnboardingScan;