import { motion } from 'framer-motion';
import FooterNavigation from '../../components/FooterNavigation';
import { useState } from 'react';
import ProjectCards from './ProjectCards';
import Footer from '../../components/Footer';

const ProjectPage = () => {
  const projectCategory = ['All'];
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="min-h-screen bg-black">
      <motion.section
        className="container mx-auto px-4 py-24 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto mt-5">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A collection of projects showcasing my work in generative AI and web
            development.
          </motion.p>
        </div>
        <div className="mt-15 ml-5">
          <motion.div
            className="flex flex-wrap gap-3 mb-8 "
            variants={item}
            initial="hidden"
            animate="show"
          >
            {projectCategory.map((category, i) => (
              <motion.button
                key={i}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-[#1c1c1c] text-white border border-gray-600 hover:bg-[#1c1c1c] cursor-pointer'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div>
          <ProjectCards />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <FooterNavigation />
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
