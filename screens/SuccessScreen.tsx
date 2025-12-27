import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col relative overflow-x-hidden text-gray-900 dark:text-white group/design-root">
      {/* Top Nav */}
      <div className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark sticky top-0 z-20">
        <button onClick={() => navigate('/home')} className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark text-gray-900 dark:text-white shadow-sm hover:opacity-80 transition">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-10">تأكيد التبرع</h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center w-full max-w-md mx-auto px-4 pt-4 pb-8">
        
        {/* Success Animation */}
        <div className="flex flex-col items-center justify-center mb-8 w-full">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-[#1173d4]/30 rounded-full blur-2xl animate-pulse-slow w-24 h-24 m-auto"></div>
            <div className="relative z-10 bg-background-light dark:bg-background-dark rounded-full p-2">
              <span className="material-symbols-outlined text-[#1173d4] text-[64px] material-symbols-filled">verified</span>
            </div>
          </div>
          <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center mb-2">
            جزاك الله خيرًا
          </h1>
          <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal text-center">
            تم استلام تبرعك بنجاح، تقبل الله منك
          </p>
        </div>

        {/* Digital Receipt Card */}
        <div className="w-full relative group">
          <div className="relative flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Header Image */}
            <div className="h-32 w-full bg-center bg-no-repeat bg-cover relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9u9i7PjNiG16uFTf0GvhryHZnkE0s4QZ7fSIeR4wdVBUzvYtHZl7Kbj7YdAn-FfHYwFC8LQty4KOl_xI_bpamD9AkRpqxWaT5vMIWvS8_vJcBIcQ3a1LcXJtGvJgLhKFDkuLiWSQ2kiI-IxYLCTSNgH9x9SDByuCrG_-18YIklk-02EcoRXRqzzdDv6sLer79CJ_EQQQzngoaWbImisqQw_oBDZNcM2fWgWwlGdoQOmQRYhprk95jKj4u8h5wgVoZiwgnqk8tZBeC")'}}>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 to-transparent"></div>
              <div className="absolute bottom-3 right-3 text-white">
                <p className="text-xs opacity-80 font-medium">إيصال تبرع #992831</p>
                <h3 className="text-lg font-bold leading-tight">مسجد الراجحي - الرياض</h3>
              </div>
            </div>
            
            {/* Details */}
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 dark:text-[#92adc9]">مجال التبرع</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#1173d4] text-lg">water_drop</span>
                    <span className="text-gray-900 dark:text-white font-bold text-base">سقيا الماء للمصلين</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs text-gray-500 dark:text-[#92adc9]">التاريخ</span>
                  <span className="text-gray-900 dark:text-white font-mono text-sm" dir="ltr">23 Oct, 2023</span>
                </div>
              </div>
              
              <div className="w-full border-t-2 border-dashed border-gray-200 dark:border-[#344d65] my-2 relative flex justify-between items-center">
                <div className="absolute -left-[26px] -top-[11px] w-5 h-5 rounded-full bg-background-light dark:bg-background-dark"></div>
                <div className="absolute -right-[26px] -top-[11px] w-5 h-5 rounded-full bg-background-light dark:bg-background-dark"></div>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 dark:text-[#92adc9]">طريقة الدفع</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400 text-lg">credit_card</span>
                    <span className="text-sm dark:text-gray-300">Apple Pay</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 dark:text-[#92adc9] mb-1">المبلغ الإجمالي</span>
                  <span className="text-[#1173d4] text-3xl font-extrabold tracking-tight">١٠٠ ر.س</span>
                </div>
              </div>
            </div>
            
            {/* Branding Footer */}
            <div className="bg-gray-50 dark:bg-[#111a22] p-3 flex items-center justify-center gap-2 border-t border-gray-100 dark:border-gray-800">
              <span className="material-symbols-outlined text-gray-400 text-lg">mosque</span>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">منصة مساجدنا</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="sticky bottom-0 w-full p-4 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-t border-transparent dark:border-white/5 z-30">
        <div className="w-full max-w-md mx-auto flex flex-col gap-3">
          <button className="w-full bg-[#1173d4] hover:bg-blue-600 active:bg-blue-700 text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#1173d4]/25 transition-all transform active:scale-[0.98]">
            <span className="material-symbols-outlined">ios_share</span>
            <span>شارك الأجر</span>
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full bg-white dark:bg-surface-dark text-gray-900 dark:text-white font-medium h-12 rounded-xl flex items-center justify-center gap-2 border border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-[#203040] transition">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="text-sm">حفظ الإيصال</span>
            </button>
            <button onClick={() => navigate('/home')} className="w-full bg-transparent text-gray-500 dark:text-[#92adc9] font-medium h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <span className="text-sm">العودة للرئيسية</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;