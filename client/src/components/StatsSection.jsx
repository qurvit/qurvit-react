"use client"
import { motion } from 'framer-motion';
import StatsCard from '@/ui/StatsCard';

const stats = [
  { label: 'Clients Served', target: 120 },
  { label: 'Projects Delivered', target: 85 },
  { label: 'Years of Experience', target: 12 },
  { label: 'Certifications', target: 7 },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-10"
        >
          Trusted by Leading Businesses
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} label={stat.label} target={stat.target} />
          ))}
        </div>
      </div>
    </section>
  );
}