import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree:
        'Bachelors of Science in Computer Science and Information Technology',
      institution: 'Padmakanya Multiple Campus',
      location: 'Bagbazar, Kathmandu, Nepal',
      graduation: 'Oct 2024',
      percentage: '81.52%',
    },
  ];

  const activities = [
    { activity: 'Vice President of PK IT Club' },
    { activity: 'Digital Marketing Head of PK IT Club' },
    { activity: 'Executive Member of PK IT Club' },
    { activity: 'College Representative of CSIT Association of Nepal' },
  ];

  const awards = [
    {
      name: 'Academic Excellence Award during first semester of Bachelor program',
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div>
        <motion.div className="flex items-center gap-2 mb-2" variants={item}>
          <GraduationCap className="w-5 h-5 text-gray-400" />
          <h2 className="text-xl font-semibold text-white">Education</h2>
        </motion.div>

        <motion.div
          className="border-l-2 border-gray-800 pl-6 space-y-6 relative"
          variants={item}
        >
          <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2"></div>
          {education.map((edu, index) => (
            <motion.div key={index} variants={item}>
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">{edu.degree}</h3>
                <span className="text-gray-400 text-sm">{edu.graduation}</span>
              </div>
              <p className="text-sm text-gray-500">{edu.institution}</p>
              <p className=" text-sm text-gray-500">
                Percentage: {edu.percentage}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <motion.h2 className="text-lg font-semibold text-white" variants={item}>
          Clubs & Activities
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-400 mt-2"
          variants={container}
        >
          {activities.map((act, index) => (
            <motion.li
              key={index}
              className="text-gray-400"
              variants={listItem}
            >
              {act.activity}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div>
        <motion.h2 className="text-lg font-semibold text-white" variants={item}>
          Awards
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-400 mt-2"
          variants={container}
        >
          {awards.map((award, index) => (
            <motion.li
              key={index}
              className="text-gray-400"
              variants={listItem}
            >
              {award.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Education;
