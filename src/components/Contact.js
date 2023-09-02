import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return(
   <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
         variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3 }}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work<br/> together</h2>
          </div>
        </motion.div>
        <motion.form 
        action='https://getform.io/f/8b6efc31-1fa0-4a12-9654-d3200122492b' method='POST'
         variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3 }}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start border-gray-200 bg-gradient-to-t from-gray-300 to-white-100  hover:shadow-xl '>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-#3A4D8F focus:border-accent transition-all' type='text' name='name' placeholder='your name'/>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-#3A4D8F focus:border-accent transition-all' type='text' name='email' placeholder='your email'/>
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-#3A4D8F focus:border-accent transition-all resize-none mb-12' name='message' placeholder='your message'></textarea>
          <button className='btn btn-lg'>Send message</button>
        </motion.form>
      

      </div>
    </div>
   </section>

  ); 
};

export default Contact;
