import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import cellar54 from '../../assets/images/cellar54.png'

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: 'Cellar54',
      description: 'A wine website using HTML, CSS, and JavaScript',
      image: cellar54,
      githubLink: 'https://github.com/Kanchanbasnet/Cellar54',
      liveLink: 'https://github.com/Kanchanbasnet/Cellar54',
      techStack: ['HTML', 'CSS', 'JS'],
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.length === 0 ? (
        <div className="text-center text-xl text-gray-400 col-span-full">
          <p>Project is in progress...</p>
        </div>
      ) : (
        projects.map((project: any, index: any) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="h-full"
          >
            <Card className="overflow-hidden border-0 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/60 transition-all duration-300 h-full flex flex-col p-0">
              <div className="relative h-[200px] overflow-hidden group">
                <div className="absolute inset-0" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex gap-2 z-20">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 6).map((tech: any) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-zinc-800/80 text-xs border-zinc-700 hover:bg-zinc-700/80 text-zinc-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 6 && (
                    <Badge
                      variant="outline"
                      className="bg-zinc-800/80 text-xs border-zinc-700 hover:bg-zinc-700/80 text-zinc-300"
                    >
                      +{project.techStack.length - 6} more
                    </Badge>
                  )}
                </div>

                <div className="mt-auto ">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white border border-rounded-md bg-transparent  border-gray-800 cursor-pointer p-2 w-36 hover:bg-[#1c1c1c]"
                  >
                    View Project
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default ProjectCards;

