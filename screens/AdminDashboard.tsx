import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 font-body min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      {/* App Bar */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/home')} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-tight">مسجد الراجحي</h1>
              <span className="text-xs text-gray-500 dark:text-gray-400">لوحة التحكم</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 overflow-hidden">
              <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTtfJCFH2LKvodRAp47hWobCFJKx4lyuUFEHpZ-olw4zMJo7Fkha8rxMj85OgMZcmDHendYw4mPdrC_lUvlTHMjFMesFd86MZpcvuacv0MwDLm1hRwFmmPn6Q4meeRLnGfIe8ja9wlJEewJOkeQXyrZ-Ua91ljWic7oobBTtGaQsqKGWjicgm7C05BOcvzpYOVd4-EU0MN-71HF89np0y3MF9zGR9LPuWWIyaC_5YRuvMk5_3M8L2aJM7aasypZQsfE2rlVsuLFQ5"/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden pb-24">
        {/* Stats */}
        <section className="p-4">
          <div className="flex flex-nowrap gap-4 overflow-x-auto hide-scrollbar pb-2">
            <div className="flex min-w-[160px] flex-1 flex-col justify-between gap-3 rounded-2xl p-5 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-white/5">
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1" dir="ltr">
                  %١٥+ <span className="material-symbols-outlined text-sm">trending_up</span>
                </span>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">تبرعات الشهر</p>
                <p className="text-2xl font-bold tracking-tight">٥,٠٠٠ <span className="text-sm font-normal text-gray-400">ر.س</span></p>
              </div>
            </div>
            <div className="flex min-w-[160px] flex-1 flex-col justify-between gap-3 rounded-2xl p-5 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-white/5">
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <span className="text-orange-500 text-xs font-bold bg-orange-500/10 px-2 py-0.5 rounded-full">عاجل</span>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">الأكثر احتياجاً</p>
                <p className="text-2xl font-bold tracking-tight">مياه شرب</p>
              </div>
            </div>
          </div>
        </section>

        {/* QR Banner */}
        <section className="px-4 mb-2">
          <div className="bg-gradient-to-r from-card-dark to-[#162b20] dark:from-[#15281e] dark:to-background-dark rounded-xl p-4 flex items-center justify-between border border-primary/20 shadow-sm relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-white p-1 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-black text-2xl">qr_code_2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">رمز QR للمسجد</span>
                <span className="text-xs text-gray-300">إدارة أو طباعة الرمز</span>
              </div>
            </div>
            <button className="text-primary hover:text-white hover:bg-primary/20 p-2 rounded-full transition-colors relative z-10">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </section>

        {/* Needs Management */}
        <section className="mt-2">
          <div className="flex items-center justify-between px-4 py-3">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">list_alt</span>
              إدارة الاحتياجات
            </h3>
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">عرض الكل</button>
          </div>
          <div className="flex flex-col gap-3 px-4">
            {/* Item 1 */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <span className="material-symbols-outlined text-2xl">water_bottle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight">كرتون مياه (٣٣٠ مل)</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">المستهدف: ٥٠ كرتون</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">نشط</div>
              </div>
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center bg-gray-50 dark:bg-black/20 rounded-lg p-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-card-dark shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-10 text-center font-bold text-lg tabular-nums">٢٠</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-card-dark shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 text-primary transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-primary text-white text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>تم الاستلام</span>
                </button>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    <span className="material-symbols-outlined text-2xl">ac_unit</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight">صيانة تكييف</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">المستهدف: ٥ وحدات</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">نشط</div>
              </div>
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center bg-gray-50 dark:bg-black/20 rounded-lg p-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-card-dark shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-10 text-center font-bold text-lg tabular-nums">٢</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-card-dark shadow-sm hover:bg-gray-100 dark:hover:bg-white/10 text-primary transition-all active:scale-95">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>تم الاستلام</span>
                </button>
              </div>
            </div>

            <button className="w-full mt-2 py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 dark:text-gray-400 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              إضافة احتياج جديد
            </button>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 w-full bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/10 pb-5 pt-3 px-6 z-40">
        <ul className="flex items-center justify-between">
          <li>
            <a className="flex flex-col items-center gap-1 text-primary" href="#">
              <span className="material-symbols-outlined text-[28px] fill-current">dashboard</span>
              <span className="text-[10px] font-bold">الرئيسية</span>
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" href="#">
              <span className="material-symbols-outlined text-[28px]">history</span>
              <span className="text-[10px] font-medium">السجل</span>
            </a>
          </li>
          <li>
            <div className="relative -top-6">
              <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-105 transition-transform" onClick={() => navigate('/scanner')}>
                <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
              </button>
            </div>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" href="#">
              <span className="material-symbols-outlined text-[28px]">mosque</span>
              <span className="text-[10px] font-medium">المسجد</span>
            </a>
          </li>
          <li>
            <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" href="#">
              <span className="material-symbols-outlined text-[28px]">settings</span>
              <span className="text-[10px] font-medium">الإعدادات</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;