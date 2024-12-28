/* eslint-disable @next/next/no-img-element */
// import type { Metadata } from 'next'

'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'

// export const metadata: Metadata = {
//   title: 'veqo |  Login',
//   description: 'Welcome back to veqo, login to start perparing for the dream job.',
//   twitter: {
//     card: 'summary_large_image',
//   },
//   openGraph: {
//     url: 'https://example.com/',
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: 'https://example.com/assets/images/services.png',
//       },
//     ],
//   },
// }

export default function Login() {
  return (
    <div className="flex flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            {' '}
            veqo
          </a>
        </div>
        <div className="m-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:text-5xl md:leading-tight">
            Welcome back <br />
            to <span className="text-blue-600">veqo</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>
          <button
            className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"
            onClick={() => signIn()}
          >
            <img className="mr-2 h-5" src="/images/google.svg" alt="Img" /> Get started with Google
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
                  placeholder="Password"
                />
              </div>
            </div>
            <Link href="/forgot-password" className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
            text-white hover:bg-indigo-400 focus:bg-indigo-400"
            >
              Sign in
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                {' '}
                Sign up.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2 md:select-auto">
        {/* <div className="px-8 py-16 text-white xl:w-[38rem]">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab
            totam.
          </p>
          <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">
            Learn More
          </a>
        </div> */}
        <img className="ml-8 w-11/12 max-w-lg rounded-lg object-cover" src="/images/login-banner.png" alt="Login" />
      </div>
    </div>
  )
}
