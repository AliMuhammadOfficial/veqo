/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "veqo | Sign Up",
  description:
    "Welcome back to veqo, login to start preparing for the dream job.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://example.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://example.com/assets/images/services.png",
      },
    ],
  },
};

export default function Signup() {
  return (
    <div className="flex flex-wrap text-slate-800">
      <div className="relative hidden select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2 md:select-auto">
        <div className="mx-auto px-8 py-16 text-white xl:w-[40rem]">
          {/* <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span> */}
          <p className="my-6 text-3xl font-semibold leading-10">
            Get the best products at best price.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
        {/* <img className="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> */}
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            veqo
          </a>
        </div>
        <div className="m-auto flex flex-col justify-center px-6 py-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using veqo?
            <Link
              href="/login"
              className="whitespace-nowrap font-semibold text-blue-700"
            >
              {" "}
              Login here
            </Link>
          </p>
          <button className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img className="mr-2 h-5" src="/images/google.svg" alt="Img" /> Get
            started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <form className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="username"
                  className="w-full shrink appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="login-email"
                  className="w-full shrink appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  className="w-full shrink appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div className="block">
              <input
                className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                type="checkbox"
                id="remember-me"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`,
                }}
              />
              <label className="inline-block" htmlFor="remember-me">
                {" "}
                I agree to the{" "}
                <Link className="underline" href="/terms-and-conditions">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
            text-white hover:bg-indigo-400 focus:bg-indigo-400"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
