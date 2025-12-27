import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingNoWaste: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-islamic-pattern pointer-events-none z-0"></div>
      
      <header className="relative z-10 w-full px-6 pt-12 pb-4 flex items-center justify-between">
        <div className="w-10"></div>
        <button onClick={() => navigate('/home')} className="text-[#a2c398] hover:text-primary text-base font-bold leading-normal tracking-[0.015em] transition-colors duration-200">
          تخطي
        </button>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto">
        <div className="relative w-full aspect-square max-h-[340px] mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] transform scale-75 opacity-50"></div>
          <div className="relative w-full h-full rounded-[2.5rem] bg-[#1e2a1b]/50 border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-end p-6 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-90" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARbPZgfMRcykti7H2nH8KR1iiPxHKxKTfTywP4R6qZCDj74zeGcVuz1F_w9bzo8pKsisxpJ1wQZkEosv9ZD6uj009QfW4MocMLd5GNRNF2ahFeeXFdhtj9Zn4PcBM5sQz0cWIp2ifJRIDpZsxz6vSvfjoHQshU1c5GJz8ObkhvWPbSOWPERqDaSrJb_Do9Ua-I3LuQZmki0hs9v6NpJIPRkRhRkKFCWSiL0xvgvrMSt-XYQl4q6Z2SOjhpwSTZ10NoO-AuLy57kUzA")'}}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#152012] via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#152012] p-6 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(83,210,45,0.2)]">
              <span className="material-symbols-outlined text-primary text-5xl">mosque</span>
            </div>
          </div>
        </div>

        <div className="w-full text-center space-y-4 relative">
          <h1 className="text-primary text-[36px] font-extrabold leading-tight tracking-tight">
            بدون هدر
          </h1>
          <h2 className="text-white text-[22px] font-bold leading-tight px-4 tracking-[-0.015em]">
            ساهم في صيانة بيوت الله
          </h2>
          <p className="text-[#a2c398] text-base font-normal leading-relaxed px-4 mx-auto max-w-xs opacity-90">
            تبرعك يذهب مباشرة للاحتياجات الفعلية للمسجد، لنضمن استدامة بيوت الله بأعلى كفاءة.
          </p>
        </div>
      </main>

      <footer className="relative z-10 w-full px-6 pb-10 pt-4 max-w-md mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#2a3825]"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#2a3825]"></div>
          <div className="h-2.5 w-10 rounded-full bg-primary shadow-[0_0_10px_rgba(83,210,45,0.4)] transition-all duration-300"></div>
        </div>
        <button onClick={() => navigate('/home')} className="group w-full bg-primary hover:bg-[#45b823] active:bg-[#3da51f] text-background-dark font-bold text-lg h-14 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_20px_rgba(83,210,45,0.25)] hover:shadow-[0_6px_25px_rgba(83,210,45,0.35)] transform active:scale-[0.98]">
          <span>ابدأ الآن</span>
          <span className="material-symbols-outlined text-2xl rtl:rotate-180 group-hover:translate-x-1 transition-transform">
            arrow_right_alt
          </span>
        </button>
      </footer>
    </div>
  );
};

export default OnboardingNoWaste;