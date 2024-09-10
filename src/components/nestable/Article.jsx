import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';

export default function Article({ blok }) {
  return (
    <article {...storyblokEditable(blok)} className="px-[15vw]">
      {blok?.richtext && <RichTextDefault blok={blok} />}
    </article>
  );
}
