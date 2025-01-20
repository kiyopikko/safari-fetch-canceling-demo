import Image from 'next/image';
import { SuperButton } from './SuperButton';

export default async function Home() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-4">
        <Image src={data.message} alt="" width={300} height={300} />
        <SuperButton />
      </div>
    </div>
  );
}
