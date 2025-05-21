'use client';

import { useState } from 'react';

export const StickyInput = () => {
  const [value, setValue] = useState('200');

  // iOS Safariでの数値入力フィールドのスピナーを非表示にするCSS
  const noSpinnerStyle = `
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-[1200]">
      <style jsx>{noSpinnerStyle}</style>
      <div
        className="textInputContainer__25e16a0f w-full flex items-center bg-white rounded overflow-hidden relative"
        style={{ cursor: 'text' }}
      >
        <label className="textInputPrefixLabel__25e16a0f font-bold text-xl ml-4 mr-2 text-gray-400">
          ¥
        </label>
        <input
          type="number"
          inputMode="numeric"
          min="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="0"
          name="price"
          className="merInputNode noSpinButton__25e16a0f withPrefixLabel__25e16a0f w-full p-3 text-right font-bold text-xl focus:outline-none"
          style={{
            WebkitTapHighlightColor: 'transparent',
            appearance: 'none',
            fontSize: '20px',
            lineHeight: '1.4em',
          }}
        />
      </div>
    </div>
  );
};
