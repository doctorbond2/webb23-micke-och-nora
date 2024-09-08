import { StoryblokComponent } from '@storyblok/react/rsc';
export default function Header({ blok }) {
  console.log(blok);
  return (
    <header className="bg-black h-14 text-white">
      {blok?.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
      header
    </header>
  );
}
