import { Search, Megaphone, ShoppingCart, Code, BarChart3, Globe, ArrowRight, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: <Search className="h-6 w-6 text-purple-400" />,
      title: "Search Engine Optimization",
      description:
        "Boost your website's visibility and rank higher in search results with our data-driven SEO strategies.",
    },
    {
      icon: <Megaphone className="h-6 w-6 text-purple-400" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to grow your brand and reach your target audience effectively.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-purple-400" />,
      title: "E-Commerce Solutions",
      description:
        "Custom e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
    },
    {
      icon: <Code className="h-6 w-6 text-purple-400" />,
      title: "Software Development",
      description:
        "Tailored software solutions designed to streamline your business operations and enhance productivity.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and reporting tools.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Web Development",
      description: "Responsive, user-friendly websites that represent your brand and convert visitors into customers.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-[#1d1a39] text-white">
      <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
    Comprehensive digital solutions to help your business grow and
    thrive in today's competitive market.
  </p>
  <div className="mt-6">
    {/* <Button variant="outline" className="text-white border-white hover:bg-white/10">
      See All <ArrowRight className="ml-2 h-4 w-4" />
    </Button> */}
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="rounded-2xl overflow-hidden h-full">
              <Image
                src="/assets/goble.jpg?height=600&width=400"
                alt="Services Visualization"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start pb-2">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-gray-200 mt-4 mb-6">{service.description}</p>
                  <Button className="bg-purple-700 hover:bg-purple-00 text-white">
                    Get This <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

