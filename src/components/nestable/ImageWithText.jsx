import Link from 'next/link';
import Image from 'next/image';
import { firstLetterUppercase as toUp } from '@/utils/general';
export default function ImageWithText({ blok }) {
  const { full_slug } = blok;
  const { name, price, image, category } = blok.content;

  return (
    <Link href={`/${full_slug}`}>
      <div className="bg-white p-4 shadow hover:shadow-lg transition-shadow duration-300 relative">
        <Link href={`/products/${category}`}>
          <h2 className="absolute left-8 top-8 hover:underline hover:underline-offset-4 transition-all duration-300">
            {toUp(category)}
          </h2>
        </Link>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <Image
            src={image?.filename}
            alt={name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold mt-4 text-gray-900">{name}</h2>
        <p className="text-gray-700 mt-2">${price}</p>
      </div>
    </Link>
  );
}
