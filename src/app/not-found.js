import Image from 'next/image';
import Link from 'next/link';
export default function NotFound() {
  //Fetch the 404 page from storyblok (this component works as server component aswell)
  //update this component to render a 404 page
  return (
    <section>
      <div
        className="container mx-auto flex flex-col"
        style={{
          backgroundColor: '#f0f0f0', // A light gray background for the not-found page
        }}
      >
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg mb-8">
            Oops! The page youre looking for doesnt exist.
          </p>
          <Link
            href="/home"
            className="inline-block px-12 lg:px-24 py-3 mt-4 border-2 border-black text-black bg-white hover:bg-gray-100 mb-5"
          >
            Go Back Home
          </Link>
        </div>
        <div
          id="hero-image-wrapper"
          className="relative w-full lg:max-w-screen-xxl mx-auto rounded-lg overflow-hidden h-[300px] lg:h-[800px] lg:w-full"
        >
          <Image
            src="/404-banner.jpg"
            alt="Not Found Image"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
