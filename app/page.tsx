import Image from 'next/image';
import { SuperButton } from './SuperButton';
import { StickyInput } from './components/StickyInput';

export default async function Home() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  return (
    <div className="min-h-screen pb-20">
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold mb-4">iOSのSafariテスト</h1>
        <Image src={data.message} alt="" width={300} height={300} />
        <SuperButton />

        {/* スクロール用のダミーコンテンツ */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="w-full max-w-md p-4 my-2 bg-gray-100 rounded">
            <h2 className="text-lg font-semibold">セクション {i + 1}</h2>
            <p>
              スクロールできるようにダミーテキストを追加しています。画面を下にスクロールして、下部の入力フィールドをタップしてください。
            </p>
          </div>
        ))}
      </div>
      <StickyInput />
    </div>
  );
}
