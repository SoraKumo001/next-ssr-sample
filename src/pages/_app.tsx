import type { AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

// Create getInitialProps that do nothing to prevent Next.js optimisation.
App.getInitialProps = () => ({});

export default App;
