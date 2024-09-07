import { StoryblokCMS } from "@/utils/cms";
import Image from "next/image";
import Link from "next/link";

export default async function ProductGrid({ blok }) {
   const products = await StoryblokCMS.getProducts();
  const filteredProducts = products.filter((product) => blok?.products.includes(product.uuid));
  return (
    <section className="w-full bg-blue">
      {/* <h1>{blok?.title}</h1>
      <p>{blok?.desc}</p> */}
      <div>
        {filteredProducts.map((product) => {
          const { slug } = product;
          const { id, name, price, prod_image } = product.content;
          return (
            <Link href={`/products/${slug}`} key={id}>
              <div key={id}>
                <Image src={prod_image?.filename} alt="" width={200} height={200} />
                <h2 className="text-white">{name}</h2>
                <p className="text-white">{price}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}