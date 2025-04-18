import Image from "next/image"
import Link from "next/link"

import { Button } from '@/components/ui/button';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-pink-100 via-orange-50 to-cyan-100">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNTAgMCBMIDAgMCAwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="mr-4">
                {/* <div className="flex">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full -ml-4"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full -ml-4"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full -ml-4"></div>
                </div> */}
              </div>
              <div className="w-full max-w-[500px]">
              <Image
  src="/assets/nexium.png"
  alt="nexium"
  width={120}
  height={30}// Aspect ratio maintained
  // sizes="18vw"
  // className="h-auto w-auto"
/>
</div>

            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-medium text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/about" className="font-medium text-gray-800 hover:text-gray-600">
                About
              </Link>
              <Link href="/services" className="font-medium text-gray-800 hover:text-gray-600">
                Services
              </Link>
              <Link href="/portfolio" className="font-medium text-gray-800 hover:text-gray-600">
                Portfolio
              </Link>
              <Link href="/blog" className="font-medium text-gray-800 hover:text-gray-600">
                Blog
              </Link>
              <Link href="/contact" className="font-medium text-gray-800 hover:text-gray-600">
                Contact
              </Link>
            </nav>

          </header>

          {/* Hero Section */}
          <div className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6">
                  Digital Solutions for Business Growth
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-md">
                  Specialized in  E-Commerce, Software Development , SEO and Digital Marketing, to help your business
                  thrive.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button  className="bg-indigo-600 hover:bg-indigo-700">
                    Get Started
                  </Button>
                  <Link href="/services">
                    <Button
               
                      variant="outline"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
                  <div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="font-bold text-2xl">4.8</span>
                    </div>
                    <p className="text-sm text-gray-600">from 15+ Reviews</p>
                  </div>

                  <div>
                    <div className="flex">
                      <Image
                        src="/placeholder.svg?height=30&width=120"
                        alt="Trustpilot"
                        width={120}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="flex text-green-500 mt-1">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-right">
                  <p className="text-gray-500 mb-2">Digital success stories</p>
                  <p className="text-gray-500 mb-6">delivered in the last 8 years</p>

                  <div className="text-8xl md:text-9xl font-bold text-gray-800">
                    50<span className="text-indigo-600">+</span>
                  </div>

                  <div className="flex justify-end space-x-6 mt-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <span className="sr-only">Dribbble</span>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.95 10.87c-.32-.91-1.22-1.31-2.32-1-1.1.3-7.14 2.09-7.14 2.09-1.1.3-1.1.3-1.1 1.4 0 1.1 0 6.05 0 6.05 0 1.1.61 1.5 1.71 1.2 1.1-.3 6.13-1.59 6.13-1.59 1.1-.3 1.71-.7 2.12-1.5.41-.8 1.91-5.55 1.91-5.55.3-1.1-.01-1.1-.31-1.1z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <span className="sr-only">Behance</span>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613-.24.458-.569.833-.974 1.127-.408.296-.877.51-1.399.641-.524.136-1.067.201-1.629.201H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.103-.189-.242-.335-.416-.436-.174-.104-.369-.176-.597-.213-.223-.039-.457-.058-.697-.058H3.76v2.878h3.692zm.209 5.239c.27 0 .519-.023.752-.07.237-.05.441-.119.621-.22.18-.101.32-.241.427-.421.109-.181.162-.401.162-.661 0-.526-.162-.902-.48-1.124-.322-.219-.75-.33-1.293-.33H3.76v2.826h3.901zM18.203 5.277c.7 0 1.332.103 1.882.311.551.206 1.019.499 1.391.878.374.38.661.837.853 1.368.197.531.295 1.115.295 1.741 0 .598-.066 1.111-.199 1.543-.133.428-.309.778-.521 1.052-.217.273-.457.47-.717.593-.262.122-.52.214-.773.275.691.3 1.152.798 1.389 1.496h-2.894c-.116-.265-.28-.479-.486-.639-.205-.159-.49-.238-.85-.238H15.6v.877h-2.631V5.277h5.234zm-.285 4.58c.438 0 .78-.11 1.022-.326.244-.219.365-.55.365-.993 0-.246-.038-.451-.115-.619-.08-.17-.188-.305-.327-.408-.143-.104-.308-.178-.495-.223-.19-.044-.388-.068-.593-.068h-2.045v2.637h2.188zM15.599 12.201h2.018c.135 0 .264.014.387.04.124.026.233.078.334.151.099.078.179.184.236.322.058.135.087.313.087.536 0 .328-.104.597-.31.803-.21.208-.486.312-.83.312h-1.922v-2.164zM24 8.341v7.604h-2.549V8.341H24z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <span className="sr-only">Medium</span>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  )
}

