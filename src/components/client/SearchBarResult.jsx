'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { firstLetterUppercase as toUp } from '@/utils/general';
export default function SearchBarResult({ result, clearSearch }) {
  const { content, full_slug } = result;
  const { name, image, price, category } = content;
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/${full_slug}`);
    if (clearSearch) {
      clearSearch();
    }
  };

  return (
    <div
      typeof="button"
      onClick={handleNavigation}
      className="relative px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center justify-between"
    >
      <h3 className="text-xs absolute top-2 left-2">{toUp(category)}</h3>

      <div className="flex items-center space-x-4">
        <h2 className="text-sm mt-4">{name}</h2>
        <h3 className="text-sm mt-2">${price}</h3>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src={image.filename}
          alt={image.description || `Image of ${name}`}
          width={70}
          height={50}
          style={{ objectFit: 'contain' }}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
