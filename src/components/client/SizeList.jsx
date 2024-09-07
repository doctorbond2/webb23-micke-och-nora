'use client';
import { useEffect } from 'react';
import { sizeBoxStyle } from '@/utils/customStylings';

export default function SizeList({ sizes }) {
  const allSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', '3xl'];
  useEffect(() => {
    if (sizes) console.log('sizes', sizes);
  }, [sizes]);
  return (
    <div id="sizes-list">
      <h2
        style={{ color: 'gray', fontWeight: 'bold', fontFamily: 'sans-serif' }}
      >
        Size
      </h2>
      <ul className="flex">
        {allSizes.map((size) => (
          <li key={size} className="p-0.1 m-1">
            {sizes.includes(size) ? (
              <h3 style={{ ...sizeBoxStyle }}>{size.toUpperCase()}</h3>
            ) : (
              <h3 style={{ ...sizeBoxStyle, backgroundColor: 'lightgray' }}>
                {size.toUpperCase()}
              </h3>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
