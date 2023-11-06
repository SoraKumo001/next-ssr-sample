'use client';
import { SSRProvider, useSSR } from 'next-ssr';

/**
 * Return time asynchronously
 */
const Test = () => {
  // The return value of async is SSRed.
  const { data } = useSSR(async () => 'Hello world!');
  return <div>{data}</div>;
};

/**
 * Page display components
 */
const Page = () => {
  return (
    <SSRProvider>
      <Test />
    </SSRProvider>
  );
};
export default Page;
