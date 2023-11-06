import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};
export async function generateMetadata() {
  return {
    title: 'Home',
    description: 'Welcome to Next.js',
  };
}
/**
 * Page display components
 */

const Page = () => {
  return (
    <>
      <h1>samples of next-ssr</h1>
      <a href="https://github.com/SoraKumo001/next-ssr">Source Code</a>
      <hr />
      <h2>Pages Router</h2>
      <div>
        <a href="/news">News sample</a>
      </div>
      <div>
        <a href="/weather">Weather sample</a>
      </div>
      <div>
        <a href="/simple">Simple sample</a>
      </div>
      <h2>App Router</h2>
      <div>
        <a href="/app-router/news">News sample</a>
      </div>
      <div>
        <a href="/app-router/weather">Weather sample</a>
      </div>
      <div>
        <a href="/app-router/simple">Simple sample</a>
      </div>
    </>
  );
};
export default Page;
