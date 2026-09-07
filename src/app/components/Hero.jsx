import React, { useEffect } from 'react';
import { Hand } from 'lucide-react';
import { motion, AnimatePresence, color  } from "motion/react"
import PropTypes from 'prop-types';

const Hero = ({data}) => {
  const [currentText, setCurrentText] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % data.att.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [data.att.length]);

  const animatedText = data.att[currentText];

  const animatedTextStyle = {
    fontWeight: 'bold',
    color: '#ffb86a',
    fontSize: '0.9em',
    display: 'inline-block',
    textTransform: 'uppercase',
  }

  const positionStyle = {
    display: 'inline-block',
    color: '#ffffff',
    fontSize: '1em',
    fontWeight: 'bold',
    position: 'relative',
    borderRadius: '4px',
    padding: '6px 9px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    transform: 'rotate(-4deg)',
  };


  return (
    <section className="w-full bg-gradient-to-bl from-sky-500 to-sky-800 h-1/2 md:h-full py-5" >
        <div className='container w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-4'>
            <motion.h3 
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex items-end gap-2 text-xl md:text-2xl mb-3 text-white font-bold'
            >
                HI! <span>{data.name}</span> <Hand color='#ffb86a'/>
            </motion.h3>
            <motion.h1 
              initial={{y: -30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-3xl sm:text-6xl lg:text-[66px]'>
                <span style={positionStyle}>{data.position}</span> Developer
            </motion.h1>
            <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='max-w-2xl mx-auto animated-text-container text-gray-200'
            >
              <span>-- I am a </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText} // Key is crucial for AnimatePresence to detect changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="animated-text"
                    style={animatedTextStyle}
                  >
                    {animatedText} 
                  </motion.span>
                </AnimatePresence>
              <span> Developer</span>
            </motion.div>
        </div>
    </section>
  )
}

Hero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    att: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default Hero
