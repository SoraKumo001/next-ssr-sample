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
      <a href="https://github.com/SoraKumo001/next-ssr">Source Code</a>
      <hr />
      <div>
        <a href="/news">News sample</a>
      </div>
      <div>
        <a href="/weather">Weather sample</a>
      </div>
      <div>
        <a href="/simple">Simple sample</a>
      </div>
    </>
  );
};
export default Page;
