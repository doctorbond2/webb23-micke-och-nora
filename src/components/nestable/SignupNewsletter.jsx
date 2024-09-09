'use client';
import RichTextDefault from './RichText';

export default function SignupNewsletter({ blok }) {
  console.log('asdasdasd', blok);

  return (
    <div className="lg:w-[30%] ml-14">
      <div className="w-[60%]">
        <RichTextDefault blok={blok} />
      </div>
      <form className="flex flex-col mt-8">
        {/* Wrapper for input and button */}
        <div className="lg:flex border-2 border-black w-[60%] lg:w-[80%] justify-between">
          <input
            type="email"
            placeholder={'     ' + blok.input_label || 'Enter your email'}
            className="lg:border-none focus:outline-none focus:border-none lg:w-[70%] w-full"
          />
          <button className=" text-black p-2 font-bold">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
