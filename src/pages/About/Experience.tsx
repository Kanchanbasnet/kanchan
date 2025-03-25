import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: 'Associate Software Engineer',
    company: 'Amnil Technologies Pvt. Ltd.',
    location: 'Jhamsikhel, Lalitpur, Nepal',
    duration: 'December 2023 - Present',
    techStacks: ['Node.js', 'React.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Amnil Technologies Pvt. Ltd.',
    location: 'Jhamsikhel, Lalitpur, Nepal',
    duration: 'September 2023 - December 2023',
    techStacks: ['Node.js', 'PostgreSQL', 'MongoDB', 'Jest'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const techItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Experience = () => {
  return (
    <motion.div
      className="space-y-4"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="flex items-center gap-2 mb-2" variants={item}>
        <Building2 className="w-5 h-5 text-gray-400" />
        <h2 className="text-xl font-semibold text-white">Work Experience</h2>
      </motion.div>

      <motion.div className="space-y-8" variants={item}>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="border-l-2 border-gray-700 pl-6 relative"
            variants={item}
          >
            <motion.div
              className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-1.5"
              variants={item}
            ></motion.div>
            <div className="flex justify-between items-start mb-2">
              <motion.h3 className="text-lg font-bold" variants={item}>
                {exp.title}
              </motion.h3>
              <motion.span className="text-sm text-gray-400" variants={item}>
                {exp.duration}
              </motion.span>
            </div>
            <motion.p className="text-gray-400 mb-2" variants={item}>
              {exp.company}
            </motion.p>
            <motion.p className="text-gray-400 mb-3" variants={item}>
              {exp.location}
            </motion.p>
            <motion.div className="flex flex-wrap gap-2 mt-2" variants={item}>
              {exp.techStacks.map((tech, i) => (
                <motion.span
                  key={i}
                  className="bg-[#1c1c1c] text-white text-sm px-3 py-1 rounded-full border border-gray-600"
                  variants={techItem}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
