'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/ui/Input';


export default function Try() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with API call or email logic
    alert('Thank you for contacting us!');
  };

  return (
    <div className=" w-full flex flex-col md:flex-row   px-6 py-12 sm:px-12 lg:px-24">
    
        

        <motion.div
         initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
        className="md:w-1/2 flex flex-col px-6 py-8 text-center  justify-center items-center">
          <h2 className='text-4xl font-bold text-gray-900 mb-4 '>Let&aposs Make It Happen</h2>
          <p className='text-lg text-gray-600 mb-12'>We are excited to show you how our product can add value to your business. Drop your message, and we will schedule a personalized walkthrough.</p>
          <div>

          <img src="/contact.jpg" className="w-[400px]" />
          </div>

          </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
        className=" md:w-1/2 px-6 py-8 rounded-md shadow-xl flex flex-col justify-center items-center ">
          {/* Contact Form */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12">
          We had love to hear from you. Fill out the form and we will get back to you soon.
        </p>
          <form onSubmit={handleSubmit} className="space-y-6">
           <Input 
              type={"text"}
             name={"name"}
            placeholder={"Enter Your name"}
            value={form.name}
            onChange={handleChange}
            required={true}
             />
            <Input 
              type={"email"}
             name={"email"}
            placeholder={"Enter Your Email"}
            value={form.email}
            onChange={handleChange}
            required={true}
             />
             <Input 
              type={"phone"}
             name={"phone"}
            placeholder={"Enter Your phone"}
            value={form.phone}
            onChange={handleChange}
            required={true}
             />
           
            <Input
            name={"subject"}
            placeholder={"subject"}
            value={form.subject}
            onChange={handleChange}
            required={true}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>

         
          
        </motion.div>
        
      </div>
    
  );
}
