import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const StatsCard = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <p className="text-gray-700 mt-2 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatsCard;
