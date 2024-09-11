import Image from 'next/image';

export default function ImageBanner({ blok }) {
    const { filename } = blok.image

    return (
        <div>
            <Image
                src={filename}
                layout="fill"
                objectFit="contain" />
        </div>
    )
}
