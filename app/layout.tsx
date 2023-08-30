import type { Metadata } from 'next';
import './scss/styles.scss';
import NavBar from './Components/NavBar';

export const metadata: Metadata = {
  title: 'Akilah Davis',
  description: 'Created by Akilah Davis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
