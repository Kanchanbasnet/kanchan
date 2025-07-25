import HeaderNavigation from "../../components/FooterNavigation";
import { Mail, BookText } from "lucide-react";
import profileImage from "../../assets/images/profile3.png";
import ProfessionalSummary from "./AboutContent";
import { GithubIcon, LinkedInIcon } from "../../assets/icons/icons";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

export default function About() {
  return (
    <div>
      <Seo
        title="Kanchan Basnet | Software Engineer | Portfolio | About"
        description="Backend developer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code."
        pathName="about"
      />
      <div className="min-h-screen text-white px-4 py-6 pb-20">
        <HeaderNavigation />

        <div className="max-w-4xl mx-auto space-y-10 mt-20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
           <div className="relative aspect-square w-32 md:w-48 overflow-hidden rounded-full border-2 border-gray-800">
  <img
    src={profileImage || "/placeholder.svg"}
    alt="Profile picture"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>


            <div className="space-y-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Kanchan Basnet
              </h1>
              <p className="text-lg text-gray-400">
                Software Engineer
              </p>

              <div className="flex justify-center md:justify-start gap-7 mt-3">
                <a
                  href="https://github.com/Kanchanbasnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/kanchanbasnet01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://medium.com/@kanchanbasnet.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  <BookText size={20} className="size-5 sm:size-6" />
                </a>

                <a
                  href="mailto:kanchanbasnet.dev@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} className="size-5 sm:size-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <ProfessionalSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}