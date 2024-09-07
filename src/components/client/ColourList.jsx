import { colourBoxStyle } from '@/utils/customStylings';
export default function ColourList({ colours }) {
  return (
    <>
      {' '}
      <h2
        style={{ color: 'gray', fontWeight: 'bold', fontFamily: 'sans-serif' }}
      >
        Colour
      </h2>
      <ul className="flex">
        {colours.map((colour) => (
          <li
            key={colour}
            id={'colour-' + colour}
            style={{
              ...colourBoxStyle,
              backgroundColor: colour,
            }}
          ></li>
        ))}
      </ul>
    </>
  );
}
