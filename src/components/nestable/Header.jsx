"use client";

import Link from "next/link";
import Image from "next/image";
import DropDownMenue from "./DropDownMenue";
import SearchBar from "../client/SearchBar";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ blok }) {
  const [isProductPage, setIsProductPage] = useState(false);
  const headerBlok = blok?.find((blok) => blok.component === "header");
  const path = usePathname();

  const regex = /^\/products\/[^\/]+\/[^\/]+$/;

  useEffect(() => {
    setIsProductPage(regex.test(path));
  }, [path]);

  console.log("path", path, "isProductPage", isProductPage);

  return (
    <header
      className={`border ${
        isProductPage ? "bg-black text-white" : "bg-white text-black"
      } pt-1 border-b-slate-800 md:h-20 h-52`}
    >
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
                {item.component === "link" ? (
                  <Link
                    href={`/${item.link.cached_url}`}
                    className={`border-b-2 border-transparent hover:${
                      isProductPage ? "border-white" : "border-black"
                    } transition duration-300 ease-in-out`}
                  >
                    <h2 className="text-[1.2rem]">{item.label}</h2>
                  </Link>
                ) : item.component === "link_group" ? (
                  <DropDownMenue blok={item} />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex-grow flex justify-left md:ml-5 items-center md:min-w-[50%] border border-black rounded-md md:border-none text-black ">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center flex-shrink-0 md:pr-[10%]">
          <Image
            className={isProductPage ? "invert" : "icon-cart"}
            src={headerBlok.icon_cart.filename}
            width={30}
            height={30}
            alt="blok icon"
          />
          <p className="text-[1.32rem] pl-[15%] translate-y-[5%]">3</p>
        </div>
      </nav>
    </header>
  );
}
