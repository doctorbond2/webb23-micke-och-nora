import Image from 'next/image';
import Link from 'next/link';
import SizeList from '../client/SizeList';
import ColourList from '../client/ColourList';


export default function ProductPage({ blok }) {
  const { name, price, image, colours, sizes, desc } = blok;

  return (
    <main className="flex flex-col items-center p-4">
      <div id="product-container" className="flex flex-col md:flex-row gap-4">
        <div
          id="image-container"
          className="border border-black p-2  m-auto bg-slate-500 relative w-[400px] h-[400px]"
        >
          <Image
            id={image.filename + ' image'}
            src={
              image.filename
                ? image.filename
                : '/no-image.png'
            }
            layout="responsive"
            alt={'image-' + name}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div id="info-container" className="flex flex-col p-4 m-10">
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-lg text-gray-700">$ {price}</h3>
          <ColourList colours={colours} />
          <SizeList sizes={sizes} />
          <p className="mt-4">{desc}</p>
          <Link href="/products" className="mt-4 text-blue-500">
            Back to products
          </Link>
        </div>
      </div>
    </main>
  );
}
