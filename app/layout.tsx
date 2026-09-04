import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oasis - Clean Water Near You',
  description:
    'Find clean water sources and get delivery on Borewell Road, Whitefield',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
