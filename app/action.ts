'use server';

import { cookies } from 'next/headers';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createTrunsaction = async () => {
  const cookieStore = await cookies();
  // NOTE: invalidate router cache by setting cookie
  // https://nextjs.org/docs/app/building-your-application/caching#invalidation-1
  cookieStore.set('id', '1234');

  await sleep(5000);

  return {
    url: 'https://example.com',
  };
};
