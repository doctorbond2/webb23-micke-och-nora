import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
export default function Article({ blok }) {
  console.log(blok);
  return (
    <article {...storyblokEditable(blok)}>
      {blok?.title && <h1>{blok.title}</h1>}
      {blok?.richtext && <RichTextDefault blok={blok} />}
    </article>
  );
}
