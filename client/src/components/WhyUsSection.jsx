"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { JSX, useRef } from "react"
import { Users, Target, Heart } from "lucide-react"



export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience and cutting-edge expertise to every project.",
      icon: <Users className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Proven Results",
      description:
        "Track record of successful projects and satisfied clients across various industries.",
      icon: <Target className="h-12 w-12 text-green-600" />,
    },
    {
      title: "Client-Focused",
      description:
        "We prioritize your needs and work closely with you throughout the entire development process.",
      icon: <Heart className="h-12 w-12 text-red-600" />,
    },
  ]

  return (
    <section className="py-20">
      <div className=" px-6 md:px-16">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            We combine technical excellence with creative innovation to deliver solutions that exceed expectations.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}



function ReasonCard({ reason, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="group h-full border-2 border-gray-300 rounded-2xl text-center transition-all duration-300 hover:shadow-lg">
        <div className="p-8">
          <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
            {reason.icon}
          </div>
          <h3 className="mb-4 text-2xl font-bold">{reason.title}</h3>
          <p className="text-muted-foreground">{reason.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
