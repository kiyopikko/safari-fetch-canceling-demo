import Image from 'next/image';
import { SuperButton } from './SuperButton';
import { StickyInput } from './components/StickyInput';
import { StickyHeader } from './components/StickyHeader';

export default async function Home() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ willChange: 'transform' }}
    >
      <StickyHeader />

      <div
        className="flex-1 overflow-auto pb-24"
        style={{
          transform: 'translateZ(0)',
          perspective: '1000px',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="flex flex-col items-center gap-4 p-4"
          style={{ transform: 'translateZ(0)' }}
        >
          <h1 className="text-2xl font-bold mb-4">iOSのSafariテスト</h1>
          <p className="text-gray-600 mb-4">
            下にスクロールして入力フィールドをタップしてください。
          </p>
          <Image src={data.message} alt="" width={300} height={300} />
          <SuperButton />

          {/* スクロール用のダミーコンテンツ - より多くのコンテンツを追加 */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-md p-4 my-2 bg-gray-100 rounded"
              style={{
                willChange: i % 3 === 0 ? 'transform' : 'auto',
              }}
            >
              <h2 className="text-lg font-semibold">セクション {i + 1}</h2>
              <p>
                スクロールできるようにダミーテキストを追加しています。画面を下にスクロールして、下部の入力フィールドをタップしてください。入力フィールドにフォーカスすると、キーボードが表示され、ヘッダーが隠れる可能性があります。
              </p>
            </div>
          ))}
        </div>
      </div>

      <StickyInput />
    </div>
  );
}
