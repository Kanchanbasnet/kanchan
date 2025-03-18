import { Card } from "../../components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import mediumImage from "../../assets/images/medium1.png";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: "Building a Simple CRUD API with Node.js and PostgreSQL",
      description:
        "Learn how to build a RESTful API with Node.js and PostgreSQL for managing users with CRUD operations. This guide covers database connection, API setup, and custom error handling.",
      image: mediumImage,
      blogLink:
        "https://medium.com/@kanchanbasnet5/building-a-simple-crud-api-with-node-js-and-postgresql-9197da28d8cf",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs?.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="h-full"
        >
          <Card className="overflow-hidden border-0 bg-zinc-900/50 backdrop-blur-sm">
            <div className="relative h-[200px] overflow-hidden group">
              <div className="absolute inset-0" />
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-white">
                {blog.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 flex-grow">
                {blog.description}
              </p>

              <a
                href={blog.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-white border border-rounded-md bg-transparent  border-gray-800 cursor-pointer p-2 w-36 hover:bg-[#1c1c1c]"
              >
                View Blog
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
