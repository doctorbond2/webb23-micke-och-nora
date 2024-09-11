import Link from 'next/link';
import DropDownMenue from './DropDownMenue';
import SearchBar from '../client/SearchBar';

export default function Header({ blok }) {
  const headerBlok = blok?.find((blok) => blok.component === 'header');

  return (
    <header className="border text-black bg-white pt-1 border-b-slate-800 md:h-20 h-52">
      <nav className="flex items-center md:justify-between justify-around md:px-5 py-3">
        <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap w-[60%] md:pl-[10%] pl-10">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
            <button className="flex items-center">
              <Link href="/">
                <h1 className="font-bold text-[1.3rem] pb-6 md:pb-0">
                  Ecommerce
                </h1>
              </Link>
            </button>

            {headerBlok?.nav?.map((item) => (
              <div key={item._uid} className="flex items-center md:p-0 ">
                {item.component === 'link' ? (
                  <Link
                    href={`/${item.link.cached_url}`}
                    className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out"
                  >
                    <h2 className="text-[1.2rem]">{item.label}</h2>
                  </Link>
                ) : item.component === 'link_group' ? (
                  <DropDownMenue blok={item} />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex-grow flex justify-left md:ml-5 items-center md:min-w-[50%] border border-black rounded-md md:border-none ">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center flex-shrink-0">
          <h2 className="text-[1.32rem]">3</h2>
        </div>
      </nav>
    </header>
  );
}
