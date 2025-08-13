
import { motion } from 'framer-motion';


export default function HeroSection() {
  return (
    <section className="relative bg-[#214392] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
   
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-100 z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
      
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once: false }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Empowering <span className="text-blue-400">Innovation</span> Through Expert IT Consulting
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Unlock your company’s potential with cutting-edge tech strategies, custom software solutions, and expert IT guidance tailored to your goals.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition"
            >
              Get a Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white font-medium py-3 px-6 rounded-xl hover:bg-white hover:text-[#0f172a] transition"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.8 }}
          whileHover={{ rotate: 4, scale: 1.05, transition: { duration: 0.3 } }}
          
          className="w-full relative  h-full flex justify-center"
        >
            <div className="absolute top-24 left-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-100 z-0" />
            
          <img
            src="/Hero.svg"
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
