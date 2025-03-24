import { motion } from 'framer-motion';
import FooterNavigation from '../../components/FooterNavigation';
import BlogCards from './BlogCards';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-black">
       <Seo
        title="Blogs | Kanchan Basnet"
        description="A collection of articles where I share insights on programming, web development, and technology trends."
        pathName="blogs"
      />
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
            Blogs
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A collection of articles where I share insights on programming, web
            development, and technology trends.
          </motion.p>
        </div>
        <div className="mt-15">
          <BlogCards />
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

export default BlogsPage;
