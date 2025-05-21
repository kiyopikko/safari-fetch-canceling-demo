'use client';

import { useEffect, useState } from 'react';

export const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  // スクロールイベントを検知して、ヘッダーの表示を調整
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-[1100] shadow-sm transition-all duration-300 ${
        scrolled ? 'transform -translate-y-1' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">商品価格設定</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          保存
        </button>
      </div>
      <div className="h-10 flex items-center mt-2">
        <span className="text-sm text-gray-500">
          {scrolled
            ? 'スクロール中...'
            : '入力フィールドまでスクロールしてタップしてください'}
        </span>
      </div>
    </header>
  );
};
