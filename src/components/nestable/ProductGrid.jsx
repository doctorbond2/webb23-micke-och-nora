export default async function ProductGrid({ blok }) {
//    const products = await CMS.getProducts();
//   const filteredProducts = products.filter((product) => blok?.products.includes(product.uuid));
  return (
    <section className="w-full bg-blue">
      {/* <h1>{blok?.title}</h1>
      <p>{blok?.desc}</p>
      <div>
        {filteredProducts.map((product) => {
          const { slug } = product;
          const { id, title, text, image } = product.content;
          return (
            <Link href={`/products/${slug}`} key={id}>
              <div key={id}>
                <Image src={image?.filename} alt={title} width={200} height={200} />
                <h2 className="text-white">{title}</h2>
                <p className="text-white">{text}</p>
              </div>
            </Link>
          )
        })}
      </div> */}
    </section>
  )
}