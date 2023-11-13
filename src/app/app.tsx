'use client';
// app/app.tsx

import { SSRProvider } from 'next-ssr';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  );
};

export default RootLayout;
