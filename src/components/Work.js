import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/maze.png';
import Img2 from '../assets/bookstore.jpeg';
import Img3 from '../assets/movie3.png';

const Work = () => {
  return (<section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
         variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My work.
            </h2>
            <p className='max-w-sm m-10'>
            I have a diverse technology background encompassing web scraping, website development, machine learning, Power Platform, 
            and design. I've applied these skills in various projects to deliver innovative solutions and enhance my skills in these domains</p>
           <a href='https://github.com/Shruti177?tab=repositories'>
            <button className='btn btn-sm'>View all projects</button>
           </a>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> <span className='text-gradient'>Machine Learning</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> <span className='text-3xl text-white'>Movie Recommendation</span></div>
           
          </div>
        </motion.div>

        <motion.div 
         variants={fadeIn('left',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3 }}
        className='flex-1 flex flex-col gap-y-12'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> <span className='text-gradient'>React Website</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> <span className='text-3xl text-white'>E-Bookstore</span></div>
          </div>
        {/* </div>
        <div className='flex-1 flex flex-col gp-y-10'> */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-10'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'> </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'> <span className='text-gradient'>Python-BFS algo</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> <span className='text-3xl text-white'>Maze</span></div>
          </div>
        </motion.div>
      </div>
    </div>



  </section>);
};

export default Work;
