'use client';

import { startTransition, useEffect, useState } from 'react';
import { createTrunsaction } from './action';

export const SuperButton = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const onDirect = async () => {
    const { url } = await createTrunsaction();
    window.location.assign(url);
  };

  const onTransition = async () => {
    const { url } = await createTrunsaction();
    startTransition(() => {
      setRedirectUrl(url);
    });
  };

  const onWrapperTransition = () => {
    startTransition(async () => {
      const { url } = await createTrunsaction();
      setRedirectUrl(url);
    });
  };

  useEffect(() => {
    if (redirectUrl) {
      window.location.assign(redirectUrl);
    }
  }, [redirectUrl]);

  return (
    <>
      <button className="p-4 bg-slate-900 text-white" onClick={onDirect}>
        Direct example.com
      </button>
      <button className="p-4 bg-slate-900 text-white" onClick={onTransition}>
        Transition example.com
      </button>
      <button
        className="p-4 bg-slate-900 text-white"
        onClick={onWrapperTransition}
      >
        Wrapper Transition example.com
      </button>
    </>
  );
};
