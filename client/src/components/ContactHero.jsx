
import { motion } from "framer-motion";
import Image from "next/image";



export default function ContactHero({ title, description, info, url }) {
  return (
    <section className="relative h-full bg-[#0f172a] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[180px] opacity-100 z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">{description}</p>
          <p className="text-md text-gray-400">{info}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.8 }}
          whileHover={{ rotate: 4, scale: 1.05, transition: { duration: 0.3 } }}
          className="w-full relative  h-full flex justify-center"
        >
          <div className="absolute animate-pulse top-24 left-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-100 z-0" />

          <Image
            src={url ?? "/Hero.svg"}
            width={200}
            height={200}
            alt="IT Consulting Illustration"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
