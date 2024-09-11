import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react';
export default function LinkGroup({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="px-10 lg:min-w-[15%]">
      <h2 className="font-bold mb-3">{blok.label}</h2>
      <ul>
        {blok.links.map((subLink) => (
          <Link
            key={subLink._uid}
            href={`/${subLink.link.cached_url || 'home'}`}
          >
            <li className="text-gray-500">{subLink.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
