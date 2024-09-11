import { colourBoxStyle } from '@/utils/customStylings';

export default function ColourList({ colours }) {
  return (
    <div id="colour-list-container" className="mt-4">
      <h2
        style={{
          color: 'gray',
        }}
        className="mb-2"
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
            className=" border border-black"
          ></li>
        ))}
      </ul>
    </div>
  );
}
