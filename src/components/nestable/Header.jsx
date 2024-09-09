import { StoryblokComponent } from '@storyblok/react/rsc';
import Link from 'next/link';

export default function Header({ blok }) {
  const headerBlok = blok?.find(blok => blok.component === 'header');


  return (
    <header
    // className="bg-black h-14 text-white"
    >
      {/* {blok?.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))} */}
      <nav>
        <ul className="flex justify-between">
          {headerBlok?.nav?.map((item) => {
            if (item.component === 'link') return <li key={item._uid}>{item.label}</li>
            else if (item.component === 'link_group') {
              return (
                <li key={item._uid}>
                  <Link href={`/${item.products_link.cached_url}`}>
                  <p>{item.label}</p> 
                    </Link>
                  <ul>
                    {item.links.map((subLink) => (
                      <Link key={subLink._uid} href={`/${subLink.link.cached_url}`}>
                      <li>{subLink.label}</li>
                      </Link>
                    ))}
                  </ul>
                </li>
              )
            }

          })}
        </ul>
      </nav>

    </header>
  );
}
