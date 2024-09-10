'use client';
import RichTextDefault from './RichText';

export default function SignupNewsletter({ blok }) {
  const onSignUp = (e) => {
    e.preventDefault();
    alert('You have signed up successfully, you will now be spammed.');

    alert('Dale a tu cuerpo alegría Macarena,');
    alert('Que tu cuerpo es pa darle alegría y cosa buena!');
    alert('Dale a tu cuerpo alegría, Macarena....?');
    alert('......');
    alert('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY MACARAENA!!');
  };
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
            placeholder={blok.input_label || 'Enter your email'}
            className="pl-2 lg:border-none focus:outline-none focus:border-none lg:w-[70%] w-full"
          />
          <button className=" text-black p-2 font-bold" onClick={onSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
