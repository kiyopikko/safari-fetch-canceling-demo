'use client';

import { useState } from 'react';

export const StickyInput = () => {
  const [value, setValue] = useState('200');

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="0"
        className="w-full p-3 text-right text-xl border border-gray-300 rounded"
      />
    </div>
  );
};
