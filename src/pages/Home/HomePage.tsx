import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FooterNavigation from '../../components/FooterNavigation';
import Footer from '../../components/Footer';

const HomePage = () => {
  const roles = ['Kanchan Basnet', 'Software Engineer', 'Learner'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.div
        className="p-6 rounded-lg min-h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-xl text-center">
            <motion.p
              className="text-xl mb-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hello! I am
            </motion.p>
            <div className="h-16 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRoleIndex}
                  className="text-5xl md:text-6xl font-bold mb-4 text-white"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  {roles[currentRoleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Backend developer skilled in Node.js, React.js, and TypeScript. I
              enjoy building reliable and efficient applications, focusing on
              clean and maintainable code. I love tackling challenges and
              constantly learning to improve my skills. Passionate about
              exploring new techniques and turning ideas into practical
              solutions.
            </motion.p>
            <motion.div
              className="mt-5 mx-auto p-2 w-48 border rounded-md bg-white text-black hover:bg-transparent hover:text-white border-gray-500 transition-colors duration-200 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="mailto:kanchanbasnet5@gmail.com"
                className="block w-full h-full"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <FooterNavigation />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HomePage;
