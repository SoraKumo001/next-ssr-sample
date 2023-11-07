'use client';
import { useSSR } from 'next-ssr';

/**
 * Page display components
 */
const Page = () => {
  const { data } = useSSR(async () => 'Hello world!');
  return <div>{data}</div>;
};
export default Page;
