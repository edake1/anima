import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { StarField } from '@/components/visualization/StarField';
import { OnboardingModal } from '@/components/layout/OnboardingModal';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'SYNTHESIS | AI Evolution Timeline',
  description: 'An interactive journey through the age of AI - from LLMs to AGI to Superintelligence. Explore expert predictions, discover concepts, and navigate the future of artificial intelligence.',
  keywords: ['AI', 'AGI', 'ASI', 'artificial intelligence', 'machine learning', 'future', 'timeline', 'predictions'],
  authors: [{ name: 'SYNTHESIS' }],
  openGraph: {
    title: 'SYNTHESIS | AI Evolution Timeline',
    description: 'An interactive journey through the age of AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="cosmic-bg" />
        <StarField />
        <Navigation />
        <main className="relative min-h-screen">
          {children}
        </main>
        <OnboardingModal />
      </body>
    </html>
  );
}
