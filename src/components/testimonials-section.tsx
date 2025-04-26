import { Quote } from "lucide-react"




export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Nexium transformed our online presence completely. Their SEO strategies helped us rank on the first page for our key terms, resulting in a 200% increase in organic traffic.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The e-commerce platform Nexium built for us has been a game-changer. Our conversion rates have improved by 45% and the user experience is seamless.",
      author: "Michael Chen",
      position: "CEO, RetailPlus",
      rating: 5,
    },
    {
      quote:
        "Working with Nexium on our digital marketing campaigns has been incredible. Their team is responsive, creative, and most importantly, they deliver results.",
      author: "Jessica Williams",
      position: "Brand Manager, FashionHub",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the impact of Nexium on our clients and their digital success stories. We're passionate about helping businesses thrive in the digital world.  
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-purple-400" />
                <p className="ml-2 text-gray-600">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/avatar.png"
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection