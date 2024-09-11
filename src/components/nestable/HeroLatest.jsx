import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import LatestProducts from '../client/LatestProducts';
import Link from 'next/link';

export default function HeroLatest({ blok }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div
        className="mx-auto flex flex-col"
        style={{
          backgroundColor: blok.background_color,
        }}
      >
        <div className="text-center mt-14">
          <RichTextDefault blok={blok} className="text-center mb-8" />
          <Link
            href={blok.button_link.cached_url}
            className="inline-block px-12 lg:px-24 py-3 mt-4 border-2 border-black text-black bg-white mb-5 
                      hover:bg-black hover:text-white transition-colors duration-200"
          >
            <h3 className="font-bold">{blok.button_label}</h3>
          </Link>
        </div>
        <div
          id="hero-image-wrapper"
          className="relative w-full lg:max-w-screen-xxl mx-auto rounded-lg overflow-hidden h-[300px] lg:h-[800px] lg:w-full"
        >
          <LatestProducts latest_products={blok.latest_products[0].products} />
        </div>
      </div>
    </section>
  );
}
