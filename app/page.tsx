'use client';

import dynamic from 'next/dynamic';
import { SplashScreen } from '@capacitor/splash-screen'; // Added
import { useEffect } from 'react'; // Added

const App = dynamic(() => import('../components/AppShell'), {
  ssr: !!false,
});

export default function Page() {
  useEffect(() => {
    // Added
    SplashScreen.hide(); // Added
  }, []); // Added

  return <App />;
}
