'use client';

import { useState, useRef, useEffect } from 'react';

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

  // この要素がiOS Safariの仮想キーボードで隠れるのを防ぐ
  useEffect(() => {
    const handleFocus = () => {
      // 入力フィールドがフォーカスされたとき、スクロール位置を固定せず、
      // iOS Safariが通常行う自動スクロール調整を妨げない
      // これにより、実環境の挙動に近づく
      document.body.classList.add('focused-input');
    };

    const handleBlur = () => {
      document.body.classList.remove('focused-input');
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    }

    return () => {
      if (input) {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  // 「修正ボタン」のクリックハンドラー
  const handleCorrect = () => {
    if (inputRef.current) {
      // フォーカスを一度はずして、再度当てる
      inputRef.current.blur();
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  };

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
      <button
        onClick={handleCorrect}
        className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded w-full"
      >
        カーソル位置修正
      </button>
    </div>
  );
};
