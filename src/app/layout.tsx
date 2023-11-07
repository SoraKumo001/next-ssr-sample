import { SSRProvider } from 'next-ssr';

export const metadata = {
  title: 'samples of next-ssr',
  description: 'SSR with AppRouter.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  );
}
