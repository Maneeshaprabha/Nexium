"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Users, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const benefits = [
    "2+ years of industry experience",
    "Certified React and Next.js developers",
    "Spring Boot and PHP backend specialists",
    "Customized strategies for each client",
    "Continuous support and maintenance",
    "Proven track record of success",
  ];

  const expertise = [
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      title: "2+ Years Experience",
      description:
        "Our team brings over 2 years of specialized expertise in digital solutions across various industries.",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Expert Team",
      description:
        "Our certified professionals specialize in React, Next.js, Spring Boot, PHP, and other modern technologies.",
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Rapid Delivery",
      description:
        "We pride ourselves on efficient project management and timely delivery of high-quality solutions.",
    },
  ];

  const stats = [
    { value: 50, label: "Projects Completed" },
    { value: 30, label: "Happy Clients" },
    { value: 2, label: "Years Experience" },
    { value: 5, label: "Industry Awards" },
  ];

  const fadeIn = (i = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="h-px w-8 bg-indigo-600"></span>
              <span className="text-indigo-600 uppercase text-sm font-bold tracking-wider">
                About Us
              </span>
              <span className="h-px w-8 bg-indigo-600"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We're a Team of Digital Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 2 years of experience, we've helped businesses transform
            their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              About Nexium
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nexium is a leading software company specializing in digital
              transformation solutions. We help businesses of all sizes navigate
              the digital landscape and achieve their goals through innovative
              technology solutions and strategic digital marketing.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts combines technical expertise with creative
              thinking to deliver results-driven solutions that help our clients
              stay ahead in today's competitive market.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={index + 2}
                >
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600 rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-lg opacity-20"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Nexium Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Experience Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial="hidden"
          animate="visible"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              variants={fadeIn}
              custom={index + 4}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with CountUp */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView && <CountUp end={stat.value} duration={2} suffix="+" />}
              </div>
              <div className="text-indigo-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
