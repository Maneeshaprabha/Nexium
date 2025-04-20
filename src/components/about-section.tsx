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
      icon: <Briefcase className="h-8 w-8 text-[#e332a8]" />,
      title: "2+ Years Experience",
      description:
        "Our team brings over 2 years of specialized expertise in digital solutions across various industries.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#e332a8]" />,
      title: "Expert Team",
      description:
        "Our certified professionals specialize in React, Next.js, Spring Boot, PHP, and other modern technologies.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#e332a8]" />,
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

          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We're a Team of Digital Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 2 years of experience, we've helped businesses transform
            their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-1">
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
                  <CheckCircle className="h-5 w-5 text-[#e332a8] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
             
              <Button   size="lg" className="bg-[#5c50d2] hover:bg-[#5527d3]">
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
  {/* Main image */}
  <Image
    src="/assets/ring2 .png"
    alt="Nexium Team"
    width={400}
    height={300}
    className="w-full h-auto relative z-10 rounded-xl "
  />

  {/* SVG Background Pattern */}
  <div className="absolute inset-0 z-0 bg-cover opacity-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNTAgMCBMIDAgMCAwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-cover bg-no-repeat rounded-xl absolute inset-0 z-0 opacity-30"></div>

  {/* Colored overlays */}
  <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600 rounded-lg opacity-20 z-0"></div>
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-lg opacity-20 z-0"></div>
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
              <div className="w-16 h-16 bg-[#ffeef9] rounded-lg flex items-center justify-center mb-6">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-gradient-to-r from-[#ff02ab] to-purple-600 rounded-2xl p-8 text-white"
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
