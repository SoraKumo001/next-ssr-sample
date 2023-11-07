import { Fragment, useState } from 'react';
import { NextPage } from 'next';
import { useSSR } from 'next-ssr';

const FETCH_WAIT = 50;
const PAGE_SIZE = 30;

type NewsType = {
  id: number;
  title: string;
  time: number;
  url: string;
  by: String;
  score: number;
  descendants: number;
  kids: number[];
  text: string;
};

const newsFetch = async (id: number): Promise<NewsType> => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((v) => new Promise<Response>((resolve) => setTimeout(() => resolve(v), FETCH_WAIT)))
    .then((v) => v.json());
};

const News = ({ id }: { id: number }) => {
  const { data, reload } = useSSR(
    () => newsFetch(id),
    // Name of the data to be passed to the client during SSR.
    { key: `news-${id}` }
  );
  if (!data) return null;
  const { title, time, url, by, score, descendants } = data;
  return (
    <div>
      <div>
        <button onClick={reload}>Reload</button> <a href={url}>{title}</a>
      </div>
      <div>
        {score} point:{score} by {by}
        {new Date(time * 1000).toLocaleString('en-us', { timeZone: 'UTC' })} | comment:{descendants}
      </div>
    </div>
  );
};

const newsListFetch = (): Promise<number[]> => {
  return fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then((v) => new Promise<Response>((resolve) => setTimeout(() => resolve(v), FETCH_WAIT)))
    .then((v) => v.json());
};

const NewsList = () => {
  const { data, reload } = useSSR(() => newsListFetch());
  const [page, setPage] = useState(1);
  if (!data) return null;
  const maxPage = Math.floor(data?.length / PAGE_SIZE);
  return (
    <div>
      <div>
        <button onClick={reload}>Reload All</button>{' '}
        <button onClick={() => setPage(Math.max(page - 1, 1))}>Previous</button> {page}/{maxPage}{' '}
        <button onClick={() => setPage(Math.min(page + 1, maxPage))}>Next</button>
      </div>
      {data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((id) => (
        <Fragment key={id}>
          <hr />
          <News id={id} />
        </Fragment>
      ))}
    </div>
  );
};

const Page: NextPage = () => {
  return <NewsList />;
};
export default Page;
