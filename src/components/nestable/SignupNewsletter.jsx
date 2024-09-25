'use client';
import RichTextDefault from './RichText';

export default function SignupNewsletter({ blok }) {
  return (
    <div className=" flex flex-col items-center pl-5 pr-5 ">
      <div className="w-30% flex flex-col items-left ">
        <div className="max-w-[400px] flex justify-center ">
          <RichTextDefault blok={blok} />
        </div>
        <form className=" flex mt-4">
          <div className="flex border-2 border-black">
            <input
              type="email"
              placeholder={'     ' + blok.input_label || 'Enter your email'}
              className="lg:border-none focus:outline-none focus:border-none lg:w-[70%] w-full p-2 max-w-[100%]"
            />
            <button className="text-black p-2 font-bold whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
