import type React from "react"
import { Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
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
                  height={30} // Aspect ratio maintained
                  // sizes="18vw"
                  // className="h-auto w-auto"
                />
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <button className="p-2 rounded-full border border-gray-200 bg-white md:hidden">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </header>
  
  

      {/* Page content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  )
}

