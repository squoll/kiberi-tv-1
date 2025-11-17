import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import VideoBackground from '../components/VideoBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiberi TV - Русское IPTV в Латвии и Риге',
  description: 'Более 500 русских каналов в Full HD и 4K. Быстро, стабильно, без переплат.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
