import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonationSelect: React.FC = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ water: 1, tissues: 0, rug: 0 });

  const updateCount = (key: keyof typeof counts, delta: number) => {
    setCounts(prev => ({ ...prev, [key]: Math.max(0, prev[key] + delta) }));
  };

  const total = (counts.water * 15) + (counts.tissues * 10) + (counts.rug * 45);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200 relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32 max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-gray-100 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-white/10 transition-colors text-text-main dark:text-white">
          <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold leading-tight">تبرع للمسجد</h1>
          <span className="text-xs font-medium text-text-sub">خطوة ١ من ٣</span>
        </div>
        <div className="size-10"></div>
      </header>

      {/* Mosque Info Card */}
      <div className="px-4 pt-6 pb-2">
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-sm border border-gray-100 dark:border-white/5">
          <div className="flex flex-col justify-center gap-1 flex-[2_2_0px]">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-bright uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">mosque</span>
              مسجد مستفيد
            </span>
            <p className="text-text-main dark:text-white text-lg font-bold leading-tight">مسجد الرحمة</p>
            <p className="text-text-sub text-sm font-normal leading-normal flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              الرياض، حي العليا
            </p>
          </div>
          <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 shadow-inner" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASXWw5vSzDHEyPpti8ebhD7nwaziK1yqKBOZgdGatm7HGiBJCnS_LE7CObeG2c6A4xjHxFhta6BuO_oCTrsmFRPBNNcf9z57d31WTj6IGdlaNWIJTw3fhYDA1NYvnGU6uhOYX2h1biTn-FyGVoH1SF2e4ixWUoyixO5M3oWTRjhP9DcL_fpGsZoUjekmiqQva55DlKo7W4tqMB-DATfBYmicci3XXtuNTtzgpFCyYq5t9AZlCvpZMYDa4LJBwXnxSK1xM2QiAUbQ5-")'}}></div>
        </div>
      </div>

      {/* Section: Select Items */}
      <div className="px-4 pt-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-bright">inventory_2</span>
          اختر العناصر
        </h2>
        <div className="flex flex-col gap-3">
          {/* Item 1 */}
          <div className="group flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-transparent hover:border-primary-bright/20 transition-all">
            <div className="bg-gray-100 dark:bg-white/5 bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQEme2MFabOPHmyjL-FWr8fBg7F_kFqpPKPLUzZCqJmwh1hGYgYMZ1fCqdiWquNea2W0am8SIvv2CKIEY3DXpY8le7zJUlz7RFODHFgw5zS0orKmy3s2cGMHCwaPAwk3cgr5OMZ5KIYlgzVomidaqFNdabSYvAJ_UhJKEDvS73q51uk6uIV8uyQi-4mXsUr32gtC34cDS7kgeWaVsnldGm3ir_a26yGtuuas1AbQqHuFf3-TWApenbAjiGPZ7kGYwMdw9sbZqYM5IR")'}}></div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-base font-bold text-text-main dark:text-white line-clamp-1">كرتون مياه (٤٠ عبوة)</p>
              <p className="text-primary-bright font-medium text-sm">١٥ ر.س / كرتون</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-full p-1 border border-gray-100 dark:border-white/5">
              <button onClick={() => updateCount('water', -1)} className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input className="w-6 p-0 text-center bg-transparent font-bold text-lg border-none focus:ring-0 text-text-main dark:text-white" readOnly type="number" value={counts.water}/>
              <button onClick={() => updateCount('water', 1)} className="size-8 flex items-center justify-center rounded-full bg-primary-bright text-black shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
          </div>
          {/* Item 2 */}
          <div className="group flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-transparent hover:border-primary-bright/20 transition-all">
            <div className="bg-gray-100 dark:bg-white/5 bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrQnZtm08HVlN0DPZqp9ElQcmtDQzk8ML50vLUD3yZ7N2oT3-_JdDjt6J7GMxFA4przSH1S5TiMXsnGbu8PRqYT2_NX_WbZdf8gSiUiJZ5hUkyyQgk3e2XIRZhRe3qxBbgRClUoa1cIGhnovYd613y8Y0I3hDgL-EtGJVR6iO0Hrgrg3O4LWQm7PyhgKE08LtXOYGCK4xCC5NWwu2H2qjc-qHngI5ewjmjH6FpkPTIDpUFSj9ymJrI3oV25HCBPwUDZBJkE3sM49Vo")'}}></div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-base font-bold text-text-main dark:text-white line-clamp-1">مناديل ورقية فاخرة</p>
              <p className="text-primary-bright font-medium text-sm">١٠ ر.س / علبة</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-full p-1 border border-gray-100 dark:border-white/5">
              <button onClick={() => updateCount('tissues', -1)} className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">remove</span>
              </button>
              <input className="w-6 p-0 text-center bg-transparent font-bold text-lg border-none focus:ring-0 text-text-main dark:text-white" readOnly type="number" value={counts.tissues}/>
              <button onClick={() => updateCount('tissues', 1)} className="size-8 flex items-center justify-center rounded-full bg-primary-bright text-black shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Delivery Method */}
      <div className="px-4 pt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-bright">local_shipping</span>
          طريقة التوصيل
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <label className="relative cursor-pointer">
            <input defaultChecked className="peer sr-only" name="delivery" type="radio"/>
            <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary-bright bg-primary-bright/5 dark:bg-primary-bright/10 transition-all">
              <div className="size-12 rounded-full bg-primary-bright/20 flex items-center justify-center text-primary-dark dark:text-primary-bright">
                <span className="material-symbols-outlined text-[28px]">local_shipping</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-text-main dark:text-white text-lg">التوصيل عبر المنصة</p>
                <p className="text-sm text-text-sub">نقوم بتوصيل تبرعك للمسجد مباشرة</p>
              </div>
              <div className="size-6 rounded-full border-2 border-primary-bright flex items-center justify-center">
                <div className="size-3 rounded-full bg-primary-bright"></div>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#1a2e1a] border-t border-gray-100 dark:border-white/10 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-base text-gray-500 dark:text-gray-300 font-medium">المجموع التقريبي</span>
          <span className="text-2xl font-bold text-text-main dark:text-white">{total} ر.س</span>
        </div>
        <button onClick={() => navigate('/payment')} className="w-full h-14 bg-primary-bright hover:bg-primary-dark active:scale-[0.98] text-black font-bold text-xl rounded-xl shadow-lg shadow-primary-bright/30 transition-all flex items-center justify-center gap-2">
          <span>التالي: تأكيد الطلب</span>
          <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default DonationSelect;