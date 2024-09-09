"use client";
import { StoryblokCMS } from '@/utils/cms';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductGrid({ blok }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await StoryblokCMS.getProducts();
        setProducts(prod);
        // console.log("prod", prod);
      }
      catch (e) {
        console.log("e", e);
      }
    }
    fetchProducts();
  }, [blok]);

  const filteredProducts = products?.filter((product) =>
    blok?.products.includes(product.uuid)
  );

  return (
    <section className="w-full bg-blue">
      <div>
        {filteredProducts?.map((product) => {
          const { slug } = product;
          const { name, price, image } = product.content;

          return (
            <Link href={`/products/${slug}`} key={product.id}>
              <div key={product.id}>
                <Image
                  src={image?.filename}
                  alt=""
                  width={200}
                  height={200}
                />
                <h2 className="text-black">{name}</h2>
                <p className="text-black">{price}</p>
              </div>
            </Link>

          );
        })}
      </div>
    </section>
  );
}
