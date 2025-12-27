import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased overflow-hidden h-screen flex flex-col bg-black">
      {/* Simulated Camera Feed */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL67fWihPkXEmJ44lW5Kq0E-nv2O5JsKFoK_Hn9YPSDMKEzpvCX71xg-6g3zG8heo9ao983co8YcUr-7UB50hW7Idw04b_eQz7NGuEfghcd89Z0dnVZ0gstvMNsRcvh6TCwiySBHiWTQhAQtKpCWD8b9eEccQs5PqyOoY6AM8_4WbGj17w8H5mJXlYVGOtumH5RTNB8y2T37LWDmGhqGYzLo4TR1OrxMitvRvvW-sUrQ8NoGl1XnWFjA6r4OSoWnzdTYdk2jPVk7Nx")'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      </div>

      {/* Top Navigation Bar */}
      <div className="relative z-20 flex w-full items-center justify-between p-6 pt-12">
        <button onClick={() => navigate(-1)} className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
          <span className="material-symbols-outlined" style={{fontSize: '28px'}}>close</span>
        </button>
        <button className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
          <span className="material-symbols-outlined" style={{fontSize: '24px'}}>flashlight_on</span>
        </button>
      </div>

      {/* Scanner Area */}
      <div className="relative z-10 flex grow flex-col items-center justify-center cursor-pointer" onClick={() => navigate('/mosque/1')}>
        <div className="relative flex size-72 items-center justify-center">
          <div className="absolute left-0 top-0 size-10 rounded-tl-3xl border-l-[6px] border-t-[6px] border-primary drop-shadow-[0_0_10px_rgba(83,210,45,0.6)]"></div>
          <div className="absolute right-0 top-0 size-10 rounded-tr-3xl border-r-[6px] border-t-[6px] border-primary drop-shadow-[0_0_10px_rgba(83,210,45,0.6)]"></div>
          <div className="absolute bottom-0 left-0 size-10 rounded-bl-3xl border-b-[6px] border-l-[6px] border-primary drop-shadow-[0_0_10px_rgba(83,210,45,0.6)]"></div>
          <div className="absolute bottom-0 right-0 size-10 rounded-br-3xl border-b-[6px] border-r-[6px] border-primary drop-shadow-[0_0_10px_rgba(83,210,45,0.6)]"></div>
          <div className="absolute inset-4 rounded-2xl border border-white/20"></div>
          <div className="scan-line absolute left-6 right-6 h-0.5 bg-primary shadow-[0_0_20px_rgba(83,210,45,1)]"></div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">مسح الرمز</h2>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-20 flex w-full flex-col items-center gap-6 pb-10 px-6">
        <div className="flex max-w-[90%] items-center justify-center gap-3 rounded-full bg-black/40 px-6 py-3 text-center backdrop-blur-xl border border-white/5 shadow-lg">
          <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>qr_code_scanner</span>
          <p className="text-sm font-medium text-white/90">وجه الكاميرا نحو رمز QR الخاص بالمسجد</p>
        </div>
        <button className="group flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-white/10 border border-white/10 px-6 transition hover:bg-white/20 active:scale-95 backdrop-blur-md">
          <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>keyboard</span>
          <span className="text-base font-bold text-white">أدخل كود المسجد يدوياً</span>
        </button>
        <div className="mt-2 h-1.5 w-12 rounded-full bg-white/20"></div>
      </div>
    </div>
  );
};

export default Scanner;