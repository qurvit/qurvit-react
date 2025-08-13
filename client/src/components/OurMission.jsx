"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Award, Shield, TrendingUp } from "lucide-react";



function OurMission() {
  const values = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
      icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Quality",
      description:
        "We maintain the highest standards in every project, ensuring excellence in every detail.",
      icon: <Award className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Reliability",
      description:
        "Our clients trust us to deliver on time and exceed expectations consistently.",
      icon: <Shield className="h-10 w-10 text-green-400" />,
    },
    {
      title: "Growth",
      description:
        "We focus on solutions that scale with your business and drive long-term success.",
      icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Our Mission & Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            {`We're driven by a simple mission: to empower businesses with innovative digital solutions that create lasting impact and drive meaningful growth.`}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}

      className="px-4"
    >
      <motion.div className="group relative text-center border-2 border-gray-200 py-6 rounded-2xl h-full w-full transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-900 to-blue-300">
        <div className="pt-6">
          <div className="mb-4 animate-bounce flex justify-center transition-transform duration-300 group-hover:scale-110 text-white">
            {value.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
          <p className="text-sm px-2 text-white">{value.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default OurMission;
