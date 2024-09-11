import Link from "next/link";

export default function DropDownMenue({ blok }) {

    return (
        <div key={blok._uid} className="relative flex items-center group z-10">
            <button
                className="border-b-2 border-transparent group-hover:border-black transition duration-300 ease-in-out">
                <span className="text-[1.2rem] tracking-[-0.6px]">{blok.label}</span>
            </button>
            <div
                className="absolute top-full left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-opacity duration-300"
            >
                <ul>
                    {blok.links.map((subLink) => (
                        <li key={subLink._uid} className="block">
                            <Link
                                href={`/${subLink.link.cached_url}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition duration-200 ease-in-out"
                            >
                                {subLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
