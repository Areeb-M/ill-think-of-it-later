import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "I'll Think of it Later",
  description: 'The ADHD friendly shopping list!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-screen bg-gray-500">
          <div className="mx-auto h-full aspect-[9/16]">{children}</div>
        </div>
      </body>
    </html>
  );
}
