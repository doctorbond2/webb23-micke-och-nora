'use client';
import { StoryblokCMS } from '@/utils/cms';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductGrid({ blok }) {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await StoryblokCMS.getProducts();
        setProducts(prod);
      } catch (e) {
        console.log('e', e);
      }
    };
    fetchProducts();
  }, [blok]);

  const filteredProducts = products?.filter((product) =>
    blok?.products.includes(product.uuid)
  );

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="flex justify-center space-x-4 mb-8 flex-wrap">
        {blok?.filter_options?.map((option) => {
          return (
            <Link key={option._uid} href={`/${option.link?.cached_url}`}>
              <button
                onClick={() => setActiveFilter(option.label)}
                className={`px-4 py-2 mb-4 ${
                  activeFilter === option.label
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border border-black'
                } hover:bg-black hover:text-white transition-colors duration-200`}
              >
                {option.label}
              </button>
            </Link>
          );
        })}
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
        {filteredProducts?.map((product) => {
          const { full_slug } = product;
          const { name, price, image } = product.content;

          return (
            <Link href={`/${full_slug}`} key={product.id}>
              <div className="bg-white p-4 shadow hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <Image
                    src={image?.filename}
                    alt={name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-4 text-gray-900">
                  {name}
                </h2>
                <p className="text-gray-700 mt-2">${price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
