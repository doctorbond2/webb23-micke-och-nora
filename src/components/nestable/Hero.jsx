import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import Image from 'next/image';
import Link from 'next/link';
import LatestProducts from '../client/LatestProducts';
export default function Hero({ blok }) {
  console.log('sxdf', blok.background_color);
  return (
    <section {...storyblokEditable(blok)}>
      <div
        className="container mx-auto flex flex-col"
        style={{
          backgroundColor: blok.background_color,
        }}
      >
        <div className="text-center mt-8">
          <RichTextDefault blok={blok} className="text-center mb-8" />
          <Link
            href={blok.button_url.cached_url}
            className="inline-block px-12 lg:px-24 py-3 mt-4 border-2 border-black text-black bg-white hover:bg-gray-100 mb-5"
          >
            {blok.button_label}
          </Link>
        </div>
        <div
          id="hero-image-wrapper"
          className=" relative w-full lg:max-w-screen-xxl mx-auto rounded-lg  overflow-hidden h-[300px] lg:h-[800px] lg:w-full"
        >
          {blok.image.filename && (
            <Image
              src={blok.image.filename}
              alt={blok.image.description}
              layout="fill"
              objectFit="contain"
              className="absolute inset-0"
            />
          )}
          {blok.latest_products.length >= 3 && (
            <LatestProducts latest_products={blok.latest_products} />
          )}
        </div>
      </div>
    </section>
  );
}
