"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            custom={0}
            variants={fadeUp}
          >
            We're a Team of Digital Experts
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            custom={1}
            variants={fadeUp}
          >
            With over 2 years of experience, we've helped businesses transform
            their digital presence and achieve remarkable growth.
          </motion.p>
        </motion.div>

        {/* About + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-1">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={2}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              About Nexium
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Nexium is a leading software company specializing in digital
              transformation solutions. We help businesses of all sizes navigate
              the digital landscape and achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts combines technical expertise with creative
              thinking to deliver results-driven solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeUp}
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                >
                  <CheckCircle className="h-5 w-5 text-[#e332a8] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-[#241e58] hover:bg-[#1d1a39]">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          {/* Image with background effects */}
          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
          >
            <Image
              src="/assets/ring2 .png"
              alt="Nexium Team"
              width={400}
              height={300}
              className="w-full h-auto relative z-10 rounded-xl"
            />
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNTAgMCBMIDAgMCAwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-cover bg-no-repeat rounded-xl absolute opacity-100"
            ></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600 rounded-lg opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-lg opacity-20 z-0"></div>
          </motion.div>
        </div>

        {/* Experience Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial="hidden"
          whileInView="visible"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
              variants={fadeUp}
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

        {/* Stats Section */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-gradient-to-r from-[#ff02ab] to-purple-600 rounded-2xl p-8 text-white"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeUp}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
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
