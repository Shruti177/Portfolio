// import React from 'react';

// import { BsArrowUpRight } from 'react-icons/bs';
// import {motion} from 'framer-motion';
// import { fadeIn } from '../variants';

// const services = [
//   {
//     name:'UI/UX Design',
//     description:'lorem sjhwvcgckwhdmvbwjkhvioskncbuvjdnvvrnwbmhduvvyoiuoje',
//     link:'learn more'
//   },
//   {
//     name:'Development',
//     description:'lorem sjhwvcgckwhdmvbwjkhvioskncbuvjdnvvrnwbmhduvvyoiuoje',
//     link:'learn more'
//   },
//   {
//     name:'UI/UX Design',
//     description:'lorem sjhwvcgckwhdmvbwjkhvioskncbuvjdnvvrnwbmhduvvyoiuoje',
//     link:'learn more'
//   },
//   {
//     name:'UI/UX Design',
//     description:'lorem sjhwvcgckwhdmvbwjkhvioskncbuvjdnvvrnwbmhduvvyoiuoje',
//     link:'learn more'
//   },
// ];

// const Services = () => {
//   return (
//   <section className='section' id='services'>
//   <div className='container mx-auto'>
//     <div className='flex flex-col lg:flex-row'>
//       <motion.div 
//        variants={fadeIn('right',0.3)}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{once: false,amount:0.3 }}
//       className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
//       <h2 className='h2 text-accent mb-6'> what i do</h2>
//       <h3 className='h3 max-w-[455px] mb-16'>
//         i'am jjvskbvkbhkrbhkrskj b n
//       </h3>
//       <button className='btn btn-sm'>see my work</button>
//       </motion.div>
//       <motion.div 
//        variants={fadeIn('left',0.5)}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{once: false,amount:0.3 }}
//       className='flex-1'>
//        <div>
//         {services.map((service, index) => {
//           const { name, description, link } = service; 
//           return (
//             <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
//             <div className='max-w-[476px]'>
//             <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
//             <p className='font-secondary leading-tight'>{description}</p>
//             </div>
//           <div className='flex flex-col flex-1 items-end'>
//             <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
//               <BsArrowUpRight/>
//             </a>
//             <a href='#' className='text-gradient text-sm'>{link}</a>
//           </div>
//           </div>
//         );
//         }
//         )}
//        </div>

//       </motion.div>
//     </div>
//   </div>
  
//   </section>);
// };

// export default Services;



import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import beautifulsoup from "../assets/beautifulsoup.jpg";
import pytorch from "../assets/pytorch.jpg";
import tailwind from "../assets/tailwind.png";
import pp from "../assets/power platform.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import figma from "../assets/figma.png";



const Services = () => {
  const services = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 7,
      src: beautifulsoup,
      title: "Beautifulsoup",
      style: "shadow-gray-800",
    },
    {
      id: 8,
      src: pytorch,
      title: "Pytorch",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: pp,
      title: "Power Platform",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 11,
      src: figma,
      title: "Figma",
      style: "shadow-pink-400",
    },
  ];

  return (
    <section 
    // className='section' 
    id='services'>
    <div
      // name="experience"
      // className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-accent">
        <div>
          <p className="h2 text-accent p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {services.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;


