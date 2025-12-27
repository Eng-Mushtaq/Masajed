import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentOptions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between p-4 h-16">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-text-main dark:text-white">
            <span className="material-symbols-outlined text-2xl">arrow_forward_ios</span>
          </button>
          <h2 className="text-xl font-bold text-center flex-1 text-text-main dark:text-white">بيانات الدفع</h2>
          <div className="w-10"></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col p-4 w-full max-w-md mx-auto space-y-6 pb-32">
        {/* Progress */}
        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-2">
          <div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary-bright"></div>
        </div>

        {/* Donation Summary Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card p-5 border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#11d411 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          <div className="relative z-10 flex gap-4">
            <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img alt="Masjid" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa1sZ4iXN7W4RfKzTvbH7UDV0YVvgYT9l0qONZ9BtD_BlLaqsU6UBolwLWT7bTtkxNyTcwkpj9lidNj-e2S9m9rSjO-MAvirTAmV_--st7GTFBZwXS9a7vpI1GrrxKjR3-ZUX5C9zIPKGvBDReXOlsArwLgaYMG1Km3QsomUcWbdP34149oBrgd1SudELAuXZ5_FoW_TRIHJj1bCeW_D5_P3pLlLispK5uNV3omp-iquimfGKpFyTKoMYY2ZYwcRvQgBMA-0vs-LsF"/>
            </div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-sm text-text-sub dark:text-gray-400 mb-1">تبرع لمسجد</p>
              <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight mb-2">مسجد الراجحي</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary-bright">100</span>
                <span className="text-sm font-medium text-text-sub dark:text-gray-400">ر.س</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 px-1">اختر طريقة الدفع</h3>
          <div className="flex flex-col gap-3">
            <label className="group relative cursor-pointer">
              <input defaultChecked className="peer sr-only" name="payment_method" type="radio"/>
              <div className="flex items-center p-4 rounded-xl bg-surface-light dark:bg-surface-dark border-2 border-transparent shadow-card transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 h-20 peer-checked:border-primary-bright peer-checked:bg-green-50 dark:peer-checked:bg-primary-bright/10">
                <div className="w-12 h-8 flex items-center justify-center bg-black rounded shrink-0 ml-4">
                  <span className="text-white font-bold text-xs tracking-tighter">Pay</span>
                </div>
                <div className="flex-1">
                  <span className="text-base font-bold text-text-main dark:text-white">Apple Pay</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-all peer-checked:border-primary-bright peer-checked:bg-primary-bright">
                   <div className="w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                </div>
              </div>
            </label>
            
            <label className="group relative cursor-pointer">
              <input className="peer sr-only" name="payment_method" type="radio"/>
              <div className="flex items-center p-4 rounded-xl bg-surface-light dark:bg-surface-dark border-2 border-transparent shadow-card transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 h-20 peer-checked:border-primary-bright peer-checked:bg-green-50 dark:peer-checked:bg-primary-bright/10">
                <div className="w-12 h-8 flex items-center justify-center bg-white border border-gray-100 rounded shrink-0 ml-4 overflow-hidden">
                  <div className="text-[10px] font-bold text-[#005a9e] tracking-tighter">mada</div>
                </div>
                <div className="flex-1">
                  <span className="text-base font-bold text-text-main dark:text-white">بطاقة مدى</span>
                  <p className="text-xs text-text-sub dark:text-gray-400 mt-0.5">الدفع المباشر عبر البنك</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-all peer-checked:border-primary-bright peer-checked:bg-primary-bright">
                   <div className="w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-text-sub/70 dark:text-gray-500">
          <span className="material-symbols-outlined text-lg">lock</span>
          <span className="text-xs font-medium">عملية دفع آمنة ومشفرة 100%</span>
        </div>
      </main>

      {/* Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 z-50">
        <div className="max-w-md mx-auto w-full">
          <button onClick={() => navigate('/success')} className="w-full bg-primary-bright hover:bg-primary-dark active:scale-[0.98] transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary-bright/20 flex items-center justify-center gap-2">
            <span>إتمام التبرع</span>
            <span className="material-symbols-outlined">volunteer_activism</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;