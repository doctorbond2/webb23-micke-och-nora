import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import Image from 'next/image';

export default function Hero({ blok }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container mx-auto px-4">
        <RichTextDefault blok={blok} className="text-center mb-8" />
        <div
          id="hero-image-wrapper"
          className="relative w-full max-w-screen-lg mx-auto border-slate-600 border-4 rounded-lg overflow-hidden h-[500px]"
        >
          <Image
            src={blok.image.filename}
            alt={blok.image.description}
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
