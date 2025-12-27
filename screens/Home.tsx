import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display antialiased relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-28">
      {/* Top App Bar */}
      <header className="flex items-center justify-between p-5 pt-8 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer" onClick={() => navigate('/admin')}>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 ring-2 ring-primary/30" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh_rTaVoUTXmdrsz2vXaY7jh6_XUMBnOKB07aD-86FVyOlItVGzPQUN77XlXpRldzMBlWABxN1xVNVkS69I0XV_tQu19SZsA-tX61uUI1M8weqb2lrJpbr5WqVx_S5fLXZ7LHVJj7MK1XUzIii3uKo7EOs5jL1HaWJ5V2wTTfpd8U4AlSPpiJUOkR-RMyEVXciSWxCde_o4s0YZMIZvGBdIKUO_voLAik6DUeC21BckFdeZZObP8gH7LhNheX76lmpfO2MgWhwrN2F")'}}>
            </div>
            <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-background-dark"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-primary font-medium opacity-90">السلام عليكم</span>
            <h2 className="text-lg font-bold leading-tight">مرحباً يا فاعل الخير</h2>
          </div>
        </div>
        <button onClick={() => navigate('/history')} className="flex items-center justify-center size-10 rounded-full bg-surface-light dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined" style={{fontSize: '24px'}}>notifications</span>
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-5 mb-6">
        <div className="relative flex w-full items-center h-14 rounded-full bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm border border-transparent focus-within:border-primary/50 transition-all">
          <div className="flex items-center justify-center pr-5 pl-2 text-gray-500 dark:text-[#a2c398]">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex-1 h-full bg-transparent border-none text-base font-normal placeholder:text-gray-400 dark:placeholder:text-[#a2c398] focus:ring-0 text-gray-900 dark:text-white" placeholder="ابحث عن مسجد قريب..." type="text"/>
          <button className="h-10 w-10 ml-2 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-gray-500 dark:text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>tune</span>
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-5 mb-8">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
          <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlFJCJlK9BhRtsn4q9-lv4wq4LcdKOYDe7fCnFiJbcNGNVZkGOv9z0e33lBnjUZMUtyu-9MR73DSzQp2YXi1jun4wB_o5GGvKwH6gnllD_1Va5Yn1N9O5MqFetVKO0Fl9MwCZGPOS1QXKxkxF9uWzIEO91iq1Rk4WM8uQ_nNoCZfoMJdTqPW1MPFZYcmkiZhcE_qpgxzo0uoNrj8g_qJh9pwDEa37J6zBPJL0LzbwxU8fRTj2z8hAXlns0p3holV9eZzAX6xrnbGP8")',
              filter: 'grayscale(100%) brightness(0.7) sepia(0.2) hue-rotate(60deg) saturate(1.5)'
            }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 translate-x-1/2 flex flex-col items-center">
            <div className="bg-primary text-background-dark p-1.5 rounded-lg shadow-lg shadow-primary/40 animate-bounce">
              <span className="material-symbols-outlined block" style={{fontSize: '20px'}}>mosque</span>
            </div>
            <div className="w-2 h-1 bg-black/50 rounded-full blur-[2px]"></div>
          </div>
          <div className="absolute bottom-3 right-3 bg-surface-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/5">
            <span className="material-symbols-outlined text-primary" style={{fontSize: '16px'}}>my_location</span>
            <span className="text-xs font-bold text-white">الرياض، المملكة العربية السعودية</span>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="px-5 mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">مساجد بحاجة لدعمك</h2>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">عرض الكل</button>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4 px-5">
        <Link to="/mosque/1" className="relative flex items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark p-3 pr-3 shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group">
          <div className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb3wi3rkoNThT-eiOopVDbAQq7cE76E5SCmXfJvQF6HdfRUgX-JH58oGZ2v7uoO8JuoP-CspG3j8VUGks3uRi7INb1z0VEGSykK9C6_evszfg0rLLnHUH-WOqXJE-P_yXZH_FBLrvmazQBhGbkbpAaBYLLB580-6abhbu1vJxvbgiKY8Wg-O2lisD6k2u7a7jqv-AwJjbqiNGaMHedInAccj8CucZ1KZpezdskcLDO-zWZM9LiURUZ_k8irh1QnQeWxvim9PfH4SbM")'}}></div>
          <div className="flex flex-1 flex-col justify-between py-1 h-24">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">جامع الراجحي</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 dark:text-[#a2c398]">
                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>near_me</span>
                <p className="text-xs font-medium">0.5 كم • حي الجزيرة</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">تبرع سريع</div>
              </div>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors transform group-hover:-translate-x-1" style={{fontSize: '20px'}}>arrow_back</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 pl-1">
            <div className="relative size-12 rounded-full conic-progress flex items-center justify-center" style={{'--percent': '70%', '--color': '#53d22d'} as React.CSSProperties}>
              <div className="bg-white dark:bg-surface-dark rounded-full size-10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-900 dark:text-white">70%</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-400">مكتمل</span>
          </div>
        </Link>

        <Link to="/mosque/2" className="relative flex items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark p-3 pr-3 shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group">
          <div className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGXCXnaM4jZe1OeosrItJ1sqQ9vGQNYbv4S4aRtddJJDRDRQxJbKPD7T7-7l0txozLtQjvgPeBtEmg6BaAftvGuRUQfRtl9uFjR3yfqeu-mluVLH85gp137BZ3Iz7QQ6hPvcctUl01on3glNj1G49WP86W_5lSHpVso09dtd60LWIibtbgaY3rJ0GGVuwbhaGJqbO8ho9V23vFV-tkHc8FB-j78SHK56PlLxIiKuGkIWOOAP-OJRfxVOqAZYPTg8zlFDxEDKfN9w8d")'}}></div>
          <div className="flex flex-1 flex-col justify-between py-1 h-24">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">جامع الملك خالد</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 dark:text-[#a2c398]">
                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>near_me</span>
                <p className="text-xs font-medium">1.2 كم • أم الحمام</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">صيانة</div>
              </div>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors transform group-hover:-translate-x-1" style={{fontSize: '20px'}}>arrow_back</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 pl-1">
            <div className="relative size-12 rounded-full conic-progress flex items-center justify-center" style={{'--percent': '30%', '--color': '#53d22d'} as React.CSSProperties}>
              <div className="bg-white dark:bg-surface-dark rounded-full size-10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-900 dark:text-white">30%</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-400">مكتمل</span>
          </div>
        </Link>
        
        <Link to="/mosque/3" className="relative flex items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark p-3 pr-3 shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group">
          <div className="w-24 h-24 shrink-0 rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSFzz_eb3X9fEHLcWkPtWp1rQux47A91bpMn2CM_su2smERJLS8ADzAvnTqD8INeZ2qVHILrWj8Biv_vxsLMtmm1Mtova9eIBYnIwoFSU0Uvxa-GJB-4uPOlUQzcmTPkc_0IZwDFKGjvy_zSEZXv7wNWrB87D_UryX9dC1JlZN7ypiLulNNWsN3APYDLSH-5PPvV5V4aEZraynTAgslZ7e7RcGG25-goUPbeaT6RhAQ8UVw675nMelH1EJCzCsKFG22AbQ9uAWXy48")'}}></div>
          <div className="flex flex-1 flex-col justify-between py-1 h-24">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">مسجد قباء</h3>
              <div className="flex items-center gap-1 mt-1 text-gray-500 dark:text-[#a2c398]">
                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>near_me</span>
                <p className="text-xs font-medium">2.8 كم • العقيق</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">فواتير</div>
              </div>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors transform group-hover:-translate-x-1" style={{fontSize: '20px'}}>arrow_back</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 pl-1">
            <div className="relative size-12 rounded-full conic-progress flex items-center justify-center" style={{'--percent': '85%', '--color': '#53d22d'} as React.CSSProperties}>
              <div className="bg-white dark:bg-surface-dark rounded-full size-10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-900 dark:text-white">85%</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-400">مكتمل</span>
          </div>
        </Link>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/90 dark:via-background-dark/90 to-transparent z-30">
        <button onClick={() => navigate('/scanner')} className="flex w-full items-center justify-center gap-3 bg-primary hover:bg-[#45b026] text-background-dark font-bold text-lg h-14 rounded-xl shadow-lg shadow-primary/25 active:scale-95 transition-all">
          <span className="material-symbols-outlined">qr_code_scanner</span>
          <span>امسح رمز QR للمسجد الآن</span>
        </button>
      </div>
    </div>
  );
};

export default Home;