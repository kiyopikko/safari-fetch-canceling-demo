'use server';

import { cookies } from 'next/headers';

export const createTrunsaction = async () => {
  const cookieStore = await cookies();
  // NOTE: invalidate router cache by setting cookie
  // https://nextjs.org/docs/app/building-your-application/caching#invalidation-1
  cookieStore.set('id', '1234');

  return {
    url: 'https://example.com',
  };
};
