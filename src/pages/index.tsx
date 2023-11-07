/**
 * Page display components
 */

import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>samples of next-ssr</title>
      </Head>
      <h1>samples of next-ssr</h1>
      <a href="https://github.com/SoraKumo001/next-ssr">Source Code</a>
      <hr />
      <h2>App Router</h2>
      <div>
        <a href="/news">News sample</a>
      </div>
      <div>
        <a href="/weather">Weather sample</a>
      </div>
      <div>
        <a href="/simple">Simple sample</a>
      </div>
      <h2>Pages Router</h2>
      <div>
        <a href="/pages-router/news">News sample</a>
      </div>
      <div>
        <a href="/pages-router/weather">Weather sample</a>
      </div>
      <div>
        <a href="/pages-router/simple">Simple sample</a>
      </div>
    </>
  );
};
export default Page;
