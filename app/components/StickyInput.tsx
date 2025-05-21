'use client';

import { useState, useRef } from 'react';

export const StickyInput = () => {
  const [value, setValue] = useState('200');
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-[1200]"
      style={{
        transform: 'translateZ(0)', // 問題を引き起こす可能性のある transform
        willChange: 'transform', // Safari でカーソル残像を引き起こす
        perspective: '1000px', // 3D変換の文脈を作成
      }}
    >
      <style jsx>{noSpinnerStyle}</style>
      <div
        className="textInputContainer__25e16a0f w-full flex items-center bg-white rounded overflow-hidden relative"
        style={{
          cursor: 'text',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        <label className="textInputPrefixLabel__25e16a0f font-bold text-xl ml-4 mr-2 text-gray-400">
          ¥
        </label>
        <input
          ref={inputRef}
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
