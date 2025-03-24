
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FooterNavigation from "../../components/FooterNavigation"
import Footer from "../../components/Footer"
import Seo from "../../components/Seo"

const HomePage = () => {
  const roles = ["Kanchan Basnet", "Software Engineer", "Learner"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Kanchan Basnet | Software Engineer | Portfolio"
        description="Backend developer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code."
        pathName=""
      />
      <motion.div
        className="p-4 sm:p-6 flex-grow flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="w-full max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full max-w-xl text-center">
            <motion.p
              className="text-lg sm:text-xl mb-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hello! I am
            </motion.p>
            <div className="h-12 sm:h-16 mb-3 sm:mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRoleIndex}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {roles[currentRoleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <motion.p
              className="text-sm sm:text-base text-gray-300 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Backend developer skilled in Node.js, React.js, and TypeScript. I enjoy building reliable and efficient
              applications, focusing on clean and maintainable code. I love tackling challenges and constantly learning
              to improve my skills. Passionate about exploring new techniques and turning ideas into practical
              solutions.
            </motion.p>
            <motion.div
              className="mt-4 sm:mt-5 mx-auto p-2 w-full max-w-[12rem] border rounded-md bg-white text-black hover:bg-transparent hover:text-white border-gray-500 transition-colors duration-200 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="mailto:kanchanbasnet5@gmail.com" className="block w-full h-full text-sm sm:text-base">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-6 sm:mt-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <FooterNavigation />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default HomePage

