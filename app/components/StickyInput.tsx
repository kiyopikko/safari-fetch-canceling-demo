'use client';

import { useState } from 'react';

export const StickyInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ここに入力してください..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};
