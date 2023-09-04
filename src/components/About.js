// import React from 'react';
// import CountUp from 'react-countup';
// import Image  from  '../assets/re.jpeg';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// const About = () => {
//   const [ref, inView] = useInView({
//     threshold:0.5,
//   }
//   );
//   return (

//   <section className='section'  id='about' ref={ref}>
//     <div className='container mx-auto'>
//       <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
//         {/* <motion.div 
//         variants={fadeIn('right',0.5)}
//         initial='hidden'
//         whileInView={'show'}
//         // viewport={{once: false,amount:0.3 }}
//         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
//         <img src={Image} alt='' />
//         </motion.div> */}
//           <motion.div variants={fadeIn('right',0.5)} initial='hidden' whileInView={'show'} 
//       //  viewport={{once: false, amount:0.7 }} 
//        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] h-[550px]'> 
//       <img src={Image} alt='' />
//        </motion.div>
      
//         <motion.div 
//         variants={fadeIn('left',0.5)}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{once: false,amount:0.3 }}
//         className='flex-1'>
//           <h2 className='h2 text-accent'>About me:</h2>
//           <h3 className='h3 mb-4'>An Information Technology Student</h3>
//           <p className='mb-6'>I am eager to leverage my strong work ethic, collaborative nature, and passion for learning in a role where
// I can contribute to a team-oriented environment, make a positive impact, and continue to expand my
// knowledge and skills. </p>
//            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
//             {/* <div>
//               <div className='text-[40px] font-primary text-gradient mb-2' >
//               {inView ? <CountUp start={0} end={8} duration={3} /> : null}
//               </div>
//               <div className='font-primary text-sm tracking-[2px]'> years of<br/> 
//                   Experience
//               </div> */}
//             {/* </div> */}
//             <div>
//               <div className='text-[40px] font-primary text-gradient mb-2' >
//               {inView ? <CountUp start={0} end={7} duration={3} /> : null}
//               </div>
//               <div className='font-primary text-sm tracking-[2px]'> Projects<br/> 
//                   completed
//               </div>
//             </div>
//             {/* <div>
//               <div className='text-[40px] font-primary text-gradient mb-2' >
//               {inView ? <CountUp start={0} end={13} duration={3} /> : null}
//               </div>
//               <div className='font-primary text-sm tracking-[2px]'> years of<br/> 
//                   Experience
//               </div>
//             </div> */}
//            </div>
//            <div className='flex gap-x-8 items-center'>
//             <button className='btn btn-lg'> Contact me</button>
//             <a href='#' className='text-gradient btn-link'>
//               My Portfolio
//             </a>
//            </div>
//         </motion.div>
//       </div>

//     </div>
   
//   </section>
  
  
  
//   );
// };

// export default About;

import React from 'react';
import CountUp from 'react-countup';
import Image from '../assets/re.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import resume from '../assets/resume.pdf'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            //  viewport={{once: false, amount:0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] h-[550px]"
          >
            <img src={Image} alt="" />
          </motion.div> */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            //  viewport={{once: false, amount:0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] h-[550px]"
          >
            <img src={Image} alt="" />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me:</h2>
            <h3 className="h3 mb-4">An Information Technology Student</h3>
            <p className="mb-6">
              I am eager to leverage my strong work ethic, collaborative nature,
              and passion for learning in a role where I can contribute to a
              team-oriented environment, make a positive impact, and continue to
              expand my knowledge and skills.
            </p>
            <p>I gained practical skills as a React intern, 
            contributing to web development projects,
             and also worked as a data annotation analyst,
              ensuring high-quality data for machine learning tasks.</p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              {/* <div>
                <div className="text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects<br />completed
                </div>
              </div> */}
              <div>
                <div className="text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Technologies<br />known
                </div>
              </div>
              <div>
                <div className="text-[40px] font-primary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Certificates<br />earned
                </div>
              </div>
            </div>

            {/* <div className="mt-7">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul>
          {educationData.map((item, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-600">{item.marks}</p>
              <p className="text-gray-600">{item.date}</p>
            </li>
          ))}
        </ul>
      </div> */}
            <div className="flex gap-x-8 items-center">
              <a href={resume} className="text-gradient btn-link" download='Resume'>
              <button className="btn btn-lg">Resume</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default About;
