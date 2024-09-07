import { StoryblokComponent } from '@storyblok/react/rsc';
import Image from 'next/image';
import Link from 'next/link';
import SizeList from '../client/SizeList';
import ColourList from '../client/ColourList';
export default function ProductPage({ blok }) {
  console.log(blok);
  return (
    <main className="flex flex-col">
      <div id="product-container" className="flex">
        <div id="image-container" className="border border-black">
          <Image
            id={blok.prod_image.filename + ' image'}
            src={blok.prod_image.filename}
            width={300}
            height={200}
            alt={'image-' + blok.name}
          />
        </div>
        <div id="info-container" className="flex-col">
          <h2>{blok.name}</h2>
          <h3>$ {blok.price}</h3>
          <ColourList colours={blok.colours} />
          <SizeList sizes={blok.sizes} />

          <br />
          <p>{blok.description}</p>
          <Link href="/products"></Link>
        </div>
      </div>
    </main>
  );
}
