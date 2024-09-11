import { StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import DropDownMenue from "./DropDownMenue";
import SearchBar from "../client/SearchBar";

export default function Header({ blok }) {
  const headerBlok = blok?.find((blok) => blok.component === "header");

  return (
    <header className="border text-black bg-white pt-2 border-b-slate-800">
      <nav className="flex items-center justify-between px-5 py-3">
        <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap w-[60%] pl-[10%]">
          <div className="flex items-center space-x-10">
            <button className="flex items-center">
              <Link href="/">
                <h1 className="font-bold text-[1.3rem]">Ecommerce</h1>
              </Link>
            </button>

            {headerBlok?.nav?.map((item) => (
              <div key={item._uid} className="flex items-center">
                {item.component === "link" ? (
                  <Link
                    href={`/${item.link.cached_url}`}
                    className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out"
                  >
                    <h2 className="text-[1.2rem]">{item.label}</h2>
                  </Link>
                ) : item.component === "link_group" ? (
                  <DropDownMenue blok={item} />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex-grow flex justify-left ml-5 items-center min-w-[50%]">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center flex-shrink-0">
          <h2 className="text-[1.32rem]  ">3</h2>
        </div>
      </nav>
    </header>
  );
}
