import Image from 'next/image';
import Link from 'next/link';
import SizeList from '../client/SizeList';
import ColourList from '../client/ColourList';

export default function ProductPage({ blok }) {
  const { name, price, image, colours, sizes, desc } = blok;

  return (
    <section
      className="flex flex-col items-center p-4 md:pt-20"
      id="product-details"
    >
      <br></br>
      <div
        id="product-container"
        className="flex flex-col md:flex-row gap-4 md:w-[60%] w-[90%]"
      >
        <div
          id="image-container"
          className="border bg-[#F6F6F6] p-2 m-auto relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
        >
          <Image
            id={image.filename + ' image'}
            src={image.filename ? image.filename : '/no-image.png'}
            alt={image.description}
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
        <div id="info-container" className="flex flex-col lg:ml-8">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3 className="text-lg text-gray-700">$ {price}</h3>
          <p className="mt-4 max-w-[20rem]">{desc}</p>
          <ColourList colours={colours} />
          <SizeList sizes={sizes} />
        </div>
      </div>
      <Link href="/products" className=" text-gray-500 mt-8">
        <h2 className="text-xl">Browse more products</h2>
      </Link>
    </section>
  );
}
