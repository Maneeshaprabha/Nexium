import { section } from 'framer-motion/client'
import { ArrowRight, Icon, MessageSquare, MessageSquareText } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Button } from '@/components/ui/button';


export function  AiChatbotWhiteSection() {
    const chatbotFeatures=[
                 {
                    icon:<MessageSquareText className='h-6 w-6 text-purple-400'/>,
                    title:"Search Engine Optimization",
                    description:"Boost your website's visibility and rank higher in search results with our data-driven SEO strategies"
                 },
                 {
                    Icon:<MessageSquare className='h-6 w-6 text-purple-400'/>,
                    title:"Digital Marketing",
                    description:"Comprehensive digital marketing solutions to grow your brand and reach your target audience effectively"
                 }
             ]
    return (
        <section id="aichatbot" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovate Your Conversations</h2>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
    AI Chatbots for Modern Needs.
    </p>
    <Button variant={"outline"} className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white mt-4"> See All <ArrowRight className='ml-2 h-4 w-4/'>
    </Button>
  </div>
</div>  
</section>
    )
}
