import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DonateModal } from '@/components/modals/DonateModal';
import { ReceiptModal } from '@/components/modals/ReceiptModal';

export const metadata: Metadata = {
  title: 'আভাস (Avash) — Open-Source Student Funding Platform',
  description: 'Your potential has no borders. Connecting talented Bangladeshi students with transparent international education funding, individual donors, and scholarships.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-transparent text-slate-900 antialiased">
        <AppProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <DonateModal />
          <ReceiptModal />
        </AppProvider>
      </body>
    </html>
  );
}
