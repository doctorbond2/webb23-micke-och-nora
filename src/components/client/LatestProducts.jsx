'use client';
import { StoryblokCMS } from '@/utils/cms';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { firstLetterUppercase as toUp } from '@/utils/general';

export default function LatestProducts({ latest_products }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, [latest_products]);

  const getData = async () => {
    try {
      const response = await StoryblokCMS.getProducts();
      setProducts(response);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const latestProducts = products.filter((product) =>
    latest_products.includes(product.uuid)
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-4 overflow-auto md:overflow-hidden">
        {latestProducts.length > 0 ? (
          latestProducts.map((product, index) => {
            const { content } = product;
            const { image, name, price, category } = content;
            const { filename, description } = image;
            return (
              <div
                key={index}
                className={`w-[60%] md:w-[30%] lg:w-[30%] ${
                  index === 1 ? 'md:-translate-y-10' : 'md:translate-y-10'
                }`}
              >
                <div
                  id="hero-image-wrapper"
                  className="relative w-full border-slate-600 overflow-hidden h-[300px] lg:h-[700px]"
                >
                 
                  <Image
                    src={filename}
                    alt={description || `Image of ${name}`}
                    layout="fill"
                    objectFit="contain"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
