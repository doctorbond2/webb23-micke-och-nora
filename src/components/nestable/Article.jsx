import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from "./RichText";

export default function Article({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="px-[15vw] flex flex-col items-center mt-[150px] mb-[70px]"
    >
      <div className="flex flex-col items-center">
        {blok?.title && (
          <h1 className="font-public-sans text-[56px] font-semibold leading-[62px] tracking-[-2.4px] text-center mb-[45px]">
            {blok.title}
          </h1>
        )}
        {blok?.richtext && <RichTextDefault blok={blok} />}
      </div>
      <hr className="w-full mt-4" />
    </article>
  );
}
