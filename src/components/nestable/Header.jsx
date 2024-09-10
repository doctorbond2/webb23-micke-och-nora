import { StoryblokComponent } from '@storyblok/react/rsc';
import Link from 'next/link';
import DropDownMenue from './DropDownMenue';

export default function Header({ blok }) {
  const headerBlok = blok?.find((blok) => blok.component === 'header');

  return (


    <header className="border text-black bg-white p-4">
      <nav className='flex flec-col md:flex-row justify-between items-center'>

        <div className='flex items-center justify-between w-full md:w-auto mb-4 mb:mb-0' >
          <button>
            <Link href="/">
              <h1 className=' font-bold text-[20px]'>Ecommerce</h1>
            </Link>
          </button>
        

          {headerBlok?.nav?.map((item) => {
            if (item.component === 'link')
              return (
                <button key={item._uid} className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">
                  <Link href={`${item.link.cached_url}`}>
                    <h2 className='text-[20px]' >{item.label}</h2>
                  </Link>
                </button>
              );
            else if (item.component === 'link_group') return <DropDownMenue key={item._uid} blok={item} />;
            else return null;
          })}
          <div>
            Search function
          </div>
        </div>

        <div>
          <h2>3</h2>
        </div>

      </nav>
    </header>
  );
}
