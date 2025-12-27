import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingNeeds: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col relative overflow-hidden font-arabic">
      <div className="absolute inset-0 pointer-events-none bg-islamic-pattern z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full min-h-screen p-6 max-w-md mx-auto w-full">
        {/* Skip Button */}
        <div className="flex items-center justify-end w-full pt-2 pb-4">
          <button onClick={() => navigate('/home')} className="group flex items-center justify-center py-2 px-4 rounded-full hover:bg-white/5 transition-colors">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-normal tracking-[0.015em] group-hover:text-primary transition-colors">تخطي</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 -mt-10">
          <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
            <div className="absolute inset-0 m-4 border border-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 m-12 border border-primary/20 rounded-full"></div>
            <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-primary/5 to-transparent flex items-center justify-center">
              <div className="w-[85%] h-[85%] bg-center bg-contain bg-no-repeat z-10" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVCEkzp_Jo5BxyNYyJh-4Jf8e3Jqj_7HhjVAl1KJAkiqkKsVk2dzeh4HrZLMZR_HsPCFbpYNEqWj5YLUqQ4wdA1YGTxF1BHc9wAAd_Vfp03iQTFA68OhpruSB1hqhtFy250_oJw_-0Rt90E5-RsjdbKqYofzIdQYad7HFkTtMxxLhxIDNFQ7HpAmsEerpAImY6Y5vvAQGUKojYTNu2EwZE91busNasfhIZhVWxaoSKicMBukxzAxxkfLeeSjcei8JiPGGva6x6rC2v")',
                  opacity: 0.9
                }}>
              </div>
              <div className="absolute top-[25%] right-[25%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(83,210,45,0.8)] z-20 animate-bounce"></div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-center w-full px-2">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">
              اعرف احتياجات مسجدك <br/><span className="text-primary">في الوقت الفعلي</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed">
              تبرع بالماء، الكهرباء، أو الصيانة فوراً<br/>وساهم في عمارة بيوت الله
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-8 pb-8 pt-4 w-full">
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="h-2.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-primary/20 dark:bg-white/10"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-primary/20 dark:bg-white/10"></div>
          </div>
          <button onClick={() => navigate('/onboarding/2')} className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(83,210,45,0.3)] group">
            <span className="text-black text-lg font-bold">التالي</span>
            <span className="material-symbols-outlined text-black text-[24px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingNeeds;