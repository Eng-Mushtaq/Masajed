import React from 'react';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>

      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 pb-2 pt-14 px-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight text-center flex-1 ml-10">سجل تبرعاتي</h1>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col gap-6 p-4 relative z-10">
        {/* Stats */}
        <section className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-2 z-10">
              <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[20px]">savings</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-text-sub">إجمالي التبرعات</p>
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight z-10">1,250 <span className="text-base font-normal text-slate-500 dark:text-text-sub">ر.س</span></p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-2 z-10">
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-500">
                <span className="material-symbols-outlined text-[20px]">mosque</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-text-sub">المساجد</p>
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight z-10">5</p>
          </div>
        </section>

        {/* Filters */}
        <section className="w-full overflow-hidden">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 px-1 -mx-1">
            <button className="flex h-9 min-w-fit shrink-0 items-center justify-center px-5 rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-all active:scale-95">
              <span className="text-sm font-medium">الكل</span>
            </button>
            <button className="flex h-9 min-w-fit shrink-0 items-center justify-center px-5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 text-slate-600 dark:text-white transition-all active:scale-95 hover:bg-gray-50 dark:hover:bg-[#1a3626]">
              <span className="text-sm font-medium">المالية</span>
            </button>
            <button className="flex h-9 min-w-fit shrink-0 items-center justify-center px-5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 text-slate-600 dark:text-white transition-all active:scale-95 hover:bg-gray-50 dark:hover:bg-[#1a3626]">
              <span className="text-sm font-medium">العينية</span>
            </button>
          </div>
        </section>

        {/* List */}
        <section className="flex flex-col gap-4 pb-20">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white px-1">آخر العمليات</h2>
          
          <div className="group flex items-center justify-between gap-4 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 dark:bg-[#1a3626] text-primary shrink-0 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-[24px]">payments</span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">جامع الملك خالد</h3>
                <p className="text-slate-500 dark:text-text-sub text-xs mt-1 font-medium flex items-center gap-1">
                  <span>12 أكتوبر 2023</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></span>
                  <span>صيانة مكيفات</span>
                </p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1">
              <p className="text-primary font-bold text-base bg-primary/10 px-2 py-0.5 rounded-md">-200 ر.س</p>
              <span className="text-[10px] text-slate-400 dark:text-white/40 font-medium">مكتمل</span>
            </div>
          </div>

          <div className="group flex items-center justify-between gap-4 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-[#1a3626] text-orange-500 shrink-0 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">مسجد الراجحي</h3>
                <p className="text-slate-500 dark:text-text-sub text-xs mt-1 font-medium flex items-center gap-1">
                  <span>15 رمضان 1445</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></span>
                  <span>سلة غذائية</span>
                </p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1">
              <p className="text-slate-900 dark:text-white font-bold text-base">50 سلة</p>
              <span className="text-[10px] text-slate-400 dark:text-white/40 font-medium">تم التوصيل</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default History;