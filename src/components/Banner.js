import React from 'react';
import Image  from  '../assets/avat.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
     <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
       <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7 }} className='text-[50px] font-bold leading-[0.7] lg:text-[110px] pb-6'> Shruti <span> Patel</span></motion.h1>
        <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase laeding-[1]'>
        <span className=' text-[#A1CAFF] mr-2'> I am a </span>
        <TypeAnimation
         sequence={['Developer',2000,
                    'Designer',2000,
                    'Engineer',2000, ]} 
                      speed={50}
                      className='text-accent'
                      wrapper='span'
                      repeat={Infinity}
                    />
       </motion.div>
       {/* <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>loremhbubudiu jdk  bjwdv tevb vsgcu</motion.p> */}
       <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
       <Link to='contact'>
        <button className='btn btn-lg'>Contact me</button>
       </Link>
        <Link to='about' className='text-gradient btn-link'>Profile</Link>
       </motion.div>
       <motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <a href='https://github.com/Shruti177'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/shrutipatel17/'><FaLinkedin/></a>
        <a href='https://www.instagram.com/17.shrutii/'><FaInstagram/></a>
       </motion.div>
       </div>

       <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'} 
      //  viewport={{once: false, amount:0.7 }} 
       className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'> 
       <img src={Image} alt='' />
       </motion.div>
     </div>

    </div>

  </section>);
};

export default Banner;