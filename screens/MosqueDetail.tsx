import React from 'react';
import { useNavigate } from 'react-router-dom';

const MosqueDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white pb-32">
      {/* Top App Bar */}
      <div className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
          </button>
        </div>
        <div className="flex gap-2">
          <button className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">share</span>
          </button>
          <button className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="@container mb-4">
        <div className="@[480px]:px-4">
          <div className="relative w-full h-64 md:h-80 bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl shadow-lg" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUc22ZZSRTRsBYnJoL2lt59gJwRsbTWrG5NqLPXxNseWtHGzyDDxx0hdftCMyWEYDz7ot3xPu-eZ4a6TBXoICV9UqvYMLClx5a51c-j1YbOzRD2GCCsiWlC4A_GD2_XoJYWEYar3FMgz_5EwfVddyCEHvMVkU2pCEad2ySbHXRYlJ_BK9Ig1rPxmQsQG3SvcEcvgP-SGQni_seW_E6pj1YmnB-c2aDawpj3kWocRjyWiI10ZEnVb3Mw9c1MaMsKwE6oK4OIf6Q5DCe")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
          </div>
        </div>
      </div>

      {/* Mosque Info Header */}
      <div className="px-4 relative -mt-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight flex items-center gap-2">
              جامع الراجحي
              <span className="material-symbols-outlined text-primary text-[24px]" title="تم التحقق">verified</span>
            </h1>
            <div className="flex items-center gap-1 mt-2 text-slate-500 dark:text-[#9fc992]">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <p className="text-sm font-medium leading-normal">الرياض، حي الجزيرة</p>
            </div>
          </div>
          <div className="bg-surface-dark border border-white/10 rounded-lg p-2 flex flex-col items-center justify-center min-w-[70px]">
            <span className="text-xs text-gray-400">المسافة</span>
            <span className="text-sm font-bold text-white">1.2 كم</span>
          </div>
        </div>
      </div>

      {/* Global Progress Section */}
      <div className="px-4 mt-8">
        <div className="bg-surface-dark border border-white/5 rounded-xl p-5 shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-white text-base font-medium leading-normal">احتياجات هذا الشهر</p>
              <div className="flex items-baseline gap-1">
                <span className="text-primary text-2xl font-bold">68%</span>
                <span className="text-gray-400 text-sm">مغطاة</span>
              </div>
            </div>
            {/* Enhanced Progress Bar */}
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full relative" style={{width: '68%'}}>
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">ساهم في تغطية المبلغ المتبقي لإكمال احتياجات المسجد.</p>
          </div>
        </div>
      </div>

      {/* Specific Needs List */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">list_alt</span>
          قائمة الاحتياجات
        </h2>
        <div className="flex flex-col gap-4">
          {/* Card 1: Water */}
          <div onClick={() => navigate('/donate')} className="bg-surface-dark border border-white/5 p-4 rounded-xl flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer group">
            <div className="size-14 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-blue-400 text-[28px]">water_drop</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg truncate">ماء زمزم</h3>
                <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-md">75%</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">45/60 كرتون</p>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="shrink-0">
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors rtl:-scale-x-100">chevron_left</span>
            </div>
          </div>

          {/* Card 2: Tissues */}
          <div className="bg-surface-dark border border-white/5 p-4 rounded-xl flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer group">
            <div className="size-14 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-orange-400 text-[28px]">dry_cleaning</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg truncate">مناديل ورقية</h3>
                <span className="text-orange-400 text-sm font-bold bg-orange-400/10 px-2 py-0.5 rounded-md">10%</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">10/100 كرتون</p>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
            <div className="shrink-0">
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors rtl:-scale-x-100">chevron_left</span>
            </div>
          </div>

          {/* Card 3: Maintenance (Completed) */}
          <div className="bg-surface-dark border border-primary/30 p-4 rounded-xl flex items-center gap-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 size-20 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
            <div className="size-14 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 z-10">
              <span className="material-symbols-outlined text-primary text-[28px]">ac_unit</span>
            </div>
            <div className="flex-1 min-w-0 z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white text-lg line-through decoration-primary/50 decoration-2">صيانة المكيفات</h3>
                  <p className="text-sm text-primary font-medium mt-1">تمت التغطية بالكامل</p>
                </div>
                <div className="size-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(70,236,19,0.4)]">
                  <span className="material-symbols-outlined text-background-dark text-[20px] font-bold">check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Success Message Area */}
      <div className="px-4 mt-8 mb-4">
        <div className="bg-gradient-to-br from-[#1d2e19] to-[#142210] border border-primary/20 p-6 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-[32px]">volunteer_activism</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">جزاك الله خيرًا</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            جميع الاحتياجات مغطاة لهذا المسجد! ولكن هناك مساجد قريبة لا تزال بحاجة للمساعدة.
          </p>
          <button className="w-full bg-white/5 hover:bg-white/10 text-primary border border-primary/30 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2">
            <span>عرض مساجد قريبة</span>
            <span className="material-symbols-outlined text-[20px] rtl:rotate-180">arrow_right_alt</span>
          </button>
        </div>
      </div>

      {/* Sticky Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/80 backdrop-blur-md border-t border-white/5 z-40 pb-8">
        <button onClick={() => navigate('/donate')} className="w-full bg-primary hover:bg-[#3bd110] text-background-dark font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(70,236,19,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">payments</span>
          تبرع الآن
        </button>
      </div>
    </div>
  );
};

export default MosqueDetail;