import { StoryblokComponent } from '@storyblok/react/rsc';

//Fixa ProductPage component
export default function ProductPage({ blok }) {
  return (
    <main className="flex flex-col">
      {blok?.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
