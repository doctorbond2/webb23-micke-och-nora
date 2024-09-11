import { StoryblokComponent } from '@storyblok/react/rsc';

export default function Page({ blok }) {
  return (
    <main className="flex flex-col min-h-[100vh]">
      {blok?.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
