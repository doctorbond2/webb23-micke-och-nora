'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function SearchBarResult({ result }) {
  console.warn('RESULT', result);
  const { content, full_slug } = result;
  const { name, image } = content;
  console.warn(full_slug);
  return (
    <div
      className="px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center justify-between"
      onClick={() => alert(`You selected: ${result.name}`)}
    >
      <Link href={`/${full_slug}`}>
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
      </Link>
    </div>
  );
}
