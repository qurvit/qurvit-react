

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const BookingContact = () => {
  return (
    <div className='w-full flex flex-col px-4 md:flex-row md:px-16 justify-center mt-10 items-center gap-10'>

      <motion.div
        className='md:w-1/2'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <img
          className="w-full max-w-md"
          src='/contact2.jpg'
          width={200}
          height={200}
          alt='contact-demo-image'
          title='demo-4'
        />
      </motion.div>

      <motion.div
        className='md:w-1/2'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <ContactForm />
      </motion.div>

    </div>
  );
};

export default BookingContact;
