import Link from 'next/link';

export default function DropDownMenue({ blok }) {
  return (
    <div key={blok._uid} className="relative inline-block text-left group">
      <button className="border-b-2 border-transparent group-hover:border-black transition duration-300 ease-in-out">
        <h2 className="text-[20px] tracking-[-0.6px]">{blok.label}</h2>
      </button>

      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ul>
          {blok.links.map((subLink) => (
            <Link key={subLink._uid} href={`/${subLink.link.cached_url}`}>
              <li className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 hover:bg-black hover:text-white transition duration-200 ease-in-out">
                {subLink.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
