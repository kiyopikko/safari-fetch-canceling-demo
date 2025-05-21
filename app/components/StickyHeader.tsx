'use client';

export const StickyHeader = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-[1100] shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">商品価格設定</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          保存
        </button>
      </div>
    </header>
  );
};
