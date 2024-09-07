import Image from 'next/image';
import Link from 'next/link';
import SizeList from '../client/SizeList';
import ColourList from '../client/ColourList';

export default function ProductPage({ blok }) {
  return (
    <main className="flex flex-col items-center p-4">
      <div id="product-container" className="flex flex-col md:flex-row gap-4">
        <div id="image-container" className="border border-black">
          <Image
            id={blok.prod_image.filename + ' image'}
            src={blok.prod_image.filename}
            width={300}
            height={300}
            alt={'image-' + blok.name}
            className="w-full h-auto object-cover max-w-xs md:max-w-md"
          />
        </div>
        <div id="info-container" className="flex flex-col p-4">
          <h2 className="text-xl font-bold">{blok.name}</h2>
          <h3 className="text-lg text-gray-700">$ {blok.price}</h3>
          <ColourList colours={blok.colours} />
          <SizeList sizes={blok.sizes} />
          <p className="mt-4">{blok.description}</p>
          <Link href="/products" className="mt-4 text-blue-500">
            Back to products
          </Link>
        </div>
      </div>
    </main>
  );
}
