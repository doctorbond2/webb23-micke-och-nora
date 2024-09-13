import Image from 'next/image';

export default function ImageBanner({ blok }) {
  const { filename } = blok.image;
  return (
    <div className="relative w-full md:h-[70vh] lg:inline-block hidden">
      {filename ? (
        <Image
          src={filename}
          alt="Banner Image"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute"
        />
      ) : (
        "Couldn't find image"
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{blok.banner_text}</h1>
      </div>
    </div>
  );
}
