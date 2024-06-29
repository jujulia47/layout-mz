import type { Metadata } from 'next';
import './style.global.css';
import { font_body } from '@/fonts';

export const metadata: Metadata = {
  title: 'Maeztra',
  description: 'Desenvolvido por Júlia Borges',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={font_body.className}>{children}</body>
    </html>
  );
}
