import { SSRProvider } from 'next-ssr';
import type { AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }) => (
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
);

// Create getInitialProps that do nothing to prevent Next.js optimisation.
App.getInitialProps = () => ({});

export default App;
