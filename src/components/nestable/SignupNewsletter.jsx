"use client";
import RichTextDefault from "./RichText";

export default function SignupNewsletter({ blok }) {
  console.log("asdasdasd", blok);

  return (
    <div className="lg:ml-14 flex flex-col items-center">
      {/* RichTextDefault centreras nu korrekt */}
      <div className="max-w-[400px] flex justify-center">
        <RichTextDefault blok={blok} />
      </div>
      {/* Input och knapp, även dessa centrerade */}
      <form className=" flex mt-4">
        <div className="flex border-2 border-black">
          <input
            type="email"
            placeholder={"     " + blok.input_label || "Enter your email"}
            className="lg:border-none focus:outline-none focus:border-none lg:w-[70%] w-full p-2"
          />
          <button className="text-black p-2 font-bold whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
