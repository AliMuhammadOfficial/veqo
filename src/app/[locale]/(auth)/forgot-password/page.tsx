/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'veqo |  Login',
  description: 'Welcome back to veqo, login to start preparing for the dream job.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://example.com/',
    images: [
      {
        width: 1200,
        height: 630,
        url: 'https://example.com/assets/images/services.png',
      },
    ],
  },
}

export default function ForgotPassword() {
  return (
    <>
      <section className="flex h-screen flex-col items-center md:flex-row">
        <div className="hidden h-screen w-full bg-indigo-600 md:w-1/2 lg:block xl:w-2/3">
          <img src="https://source.unsplash.com/random" alt="" className="h-full w-full object-cover" />
        </div>
        <div
          className="flex h-screen w-full items-center justify-center bg-white px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
      lg:px-16 xl:w-1/3 xl:px-12"
        >
          <div className="h-100 w-full">
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">Forgot your password?</h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="mt-2 w-full rounded-lg border bg-[#e8f3fa] px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>
              <div className="mt-2 text-right">
                <p>
                  <Link href="/login" className="text-blue-500 hover:text-blue-700">
                    Return to login
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
            text-white hover:bg-indigo-400 focus:bg-indigo-400"
              >
                Send reset link
              </button>
            </form>
            <hr className="my-6 w-full border-gray-300" />
            <p className="mt-8">
              Need an account?{' '}
              <Link href="/signup" className="font-semibold text-blue-500 hover:text-blue-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
