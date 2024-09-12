"use client";
import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";
import ImageWithText from "./ImageWithText";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductGrid({ blok }) {
  const [products, setProducts] = useState([]);
  const path = usePathname();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await StoryblokCMS.getProducts();
        setProducts(prod);
      } catch (e) {
        console.log("e", e);
      }
    };
    fetchProducts();
  }, [blok]);

  const filteredProducts = products?.filter((product) =>
    blok?.products.includes(product.uuid)
  );

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="flex justify-center space-x-4 mb-8 flex-wrap">
        {blok?.filter_options?.map((option) => {
          const normalizedPath = path.replace(/\/$/, "");
          const normalizedCachedUrl = `/${option.link?.cached_url.replace(
            /\/$/,
            ""
          )}`;
          const isActive = normalizedPath === normalizedCachedUrl;

          return (
            <Link key={option._uid} href={`/${option.link?.cached_url}`}>
              <button
                className={`px-4 py-2 mb-4 border ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border border-black"
                } hover:bg-black hover:text-white transition-colors duration-200`}
              >
                {option.label}
              </button>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
        {filteredProducts?.map((product) => (
          <ImageWithText key={product.id} blok={product} />
        ))}
      </div>
    </section>
  );
}
