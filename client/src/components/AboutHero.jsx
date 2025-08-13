import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-[#1e293b] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20 z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            At Qurvit, we are passionate tech consultants, driven by innovation and dedicated to solving complex business problems with modern software and IT strategy.
          </p>
          <p className="text-md text-gray-400">
            With years of experience across multiple industries, our team bridges the gap between business and technology to help you scale confidently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/3]">
            <img
              src="/Hero.svg"
              alt="About Illustration"
              className="object-contain rounded-3xl shadow-2xl w-full h-full"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}