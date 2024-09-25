'use client';
import { useEffect } from 'react';
import { sizeBoxStyle } from '@/utils/customStylings';

export default function SizeList({ sizes }) {
  const allSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', '3xl'];

  return (
    <div id="sizes-list" className="flex-col mt-4">
      <h2 style={{ color: 'gray' }} className="mb-2">
        Size
      </h2>
      <ul className="flex flex-wrap justify-start gap-2">
        {allSizes.map((size) => (
          <li
            key={size}

            // className="w-[24%] sm:w-[24%] lg:w-auto m-1 border border-black text-center flex items-center justify-center aspect-square"
          >
            {sizes.includes(size) ? (
              <h3
                className="font-sans border border-solid border-black hover:border-white hover:bg-green-200"
                style={{ ...sizeBoxStyle }}
              >
                {size.toUpperCase()}
              </h3>
            ) : (
              <h3
                style={{
                  ...sizeBoxStyle,
                  backgroundColor: 'lightgray',
                  cursor: 'not-allowed',
                }}
              >
                {size.toUpperCase()}
              </h3>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
