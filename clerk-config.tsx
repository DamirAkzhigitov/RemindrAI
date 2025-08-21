'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const ClerkWithRouter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigate={to => router.push(to)}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkWithRouter;
