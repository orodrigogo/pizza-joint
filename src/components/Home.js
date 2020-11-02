import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

const buttonVariants = {  
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], 
    scale: 1,
    textShadow: "0px 0px 8px rgb(255,255,255)", 
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1.5 }}
    exit={{ x: '-100vw', transition: { ease: 'easeInOut'} }}
    >
      <h2 animate={{
        fontSize: 50,
        color: '#ff2994',
        x: 100,
        y: -100
      }}>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button 
          // whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" }}
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;