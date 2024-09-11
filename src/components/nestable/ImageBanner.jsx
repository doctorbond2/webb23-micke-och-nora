import Image from 'next/image';

export default function ImageBanner({ blok }) {
    const { filename } = blok.image

    return (
        <div>
            {filename ? <Image
                src={filename}
                layout="fill"
                objectFit="contain"
                className='Absolute' />
                : "Couldn't find image"}
        </div>
    )
}
