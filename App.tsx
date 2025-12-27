import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import OnboardingNeeds from './screens/OnboardingNeeds';
import OnboardingScan from './screens/OnboardingScan';
import OnboardingNoWaste from './screens/OnboardingNoWaste';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import MosqueDetail from './screens/MosqueDetail';
import DonationSelect from './screens/DonationSelect';
import PaymentOptions from './screens/PaymentOptions';
import SuccessScreen from './screens/SuccessScreen';
import History from './screens/History';
import AdminDashboard from './screens/AdminDashboard';

// A wrapper to handle theme changes based on route if necessary
const AppRoutes = () => {
  const location = useLocation();
  
  // Routes that should be light mode
  const lightModeRoutes = ['/donate', '/payment'];
  
  React.useEffect(() => {
    const html = document.documentElement;
    if (lightModeRoutes.includes(location.pathname)) {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding/1" element={<OnboardingNeeds />} />
      <Route path="/onboarding/2" element={<OnboardingScan />} />
      <Route path="/onboarding/3" element={<OnboardingNoWaste />} />
      <Route path="/home" element={<Home />} />
      <Route path="/scanner" element={<Scanner />} />
      <Route path="/mosque/:id" element={<MosqueDetail />} />
      <Route path="/donate" element={<DonationSelect />} />
      <Route path="/payment" element={<PaymentOptions />} />
      <Route path="/success" element={<SuccessScreen />} />
      <Route path="/history" element={<History />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}