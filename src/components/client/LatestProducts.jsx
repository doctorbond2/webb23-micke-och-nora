import { StoryblokCMS } from '@/utils/cms';

const getData = async () => {
  try {
    return await StoryblokCMS.getProducts();
  } catch (err) {
    console.error(err);
  }
};
export default function LatestProducts({ latest_products }) {
  const products = getData();
  console.log('PRODUCTS!', latest_products);
  //   const latestProducts = products.filter((product) =>
  //     blok?.products.includes(product.uuid)
  //   );
  //   console.log('LATEST!', latestProducts);
  return (
    <>
      {/* {latestProducts.map((product, index) => {
        return <div key={index}>{index}</div>;
      })} */}
      null
    </>
  );
}
