import { ArrowRight, MessageSquareText, MoreVertical } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function AiChatbotWhiteSection() {
  const chatbotFeatures = [
    {
      icon: <MessageSquareText className="h-6 w-6 text-purple-400" />,
      title: "Search Engine Optimization",
      description:
        "Boost your website's visibility and rank higher in search results with our data-driven SEO strategies.",
    },
    {
      icon: <MessageSquareText className="h-6 w-6 text-purple-400" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to grow your brand and reach your target audience effectively.",
    },
  ];

  return (
    <section id="aichatbot" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovate Your Conversations</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            AI Chatbots for Modern Needs.
          </p>
          <Button
            variant="outline"
            className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white mt-4"
          >
            See All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1 ">
            <div className="rounded-2xl relative overflow-hidden w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
              <Image
                src="/assets/goble.jpg"
                alt="AI Chatbot Visualization"
                width={200}
                height={300}
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {chatbotFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden h-full flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start pb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-gray-600 mt-4 mb-6">{feature.description}</p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Get This <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}