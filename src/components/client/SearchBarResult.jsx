'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function SearchBarResult({ result, clearSearch }) {
  const { content, full_slug } = result;
  const { name, image } = content;
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
      className="px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center justify-between"
    >
      <h2>{name}</h2>
      <div>
        <Image
          src={image.filename}
          alt={image.description || `Image of ${name}`}
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
