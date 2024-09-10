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
      <form className="mt-8">
        <div className="flex flex-col md:flex-row lg:border-2 lg:border-black w-[60%] lg:w-[80%] justify-between">
          <input
            type="email"
            placeholder={blok.input_label || 'Enter your email'}
            className="pl-2 border-2 border-black p-3 md:p-0 lg:border-none focus:outline-none w-[50%] focus:border-none lg:w-[70%]"
          />
          <button
            className=" text-black p-2 font-bold border-2 border-black rounded-md lg:m-0 mt-2 lg:border-none w-[50%] lg:w-[30%]"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
