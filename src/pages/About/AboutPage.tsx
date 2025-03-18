import HeaderNavigation from '../../components/FooterNavigation';
import { Mail, BookText } from 'lucide-react';
import profileImage from '../../assets/images/profile.jpeg';
import ProfessionalSummary from './AboutContent';
import { GithubIcon, LinkedInIcon } from '../../assets/icons/icons';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <div className="min-h-screen text-white px-4 py-8 pb-24">
        <HeaderNavigation />

        <div className="max-w-7/12 mx-auto space-y-14 mt-25">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-20">
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-6 border-gray-800">
              <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-2 border-gray-800">
                <img
                  src={profileImage}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-1.5 ">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kanchan Basnet
              </h1>
              <p className="text-xl text-gray-400">Software Engineer</p>

              <div className="flex gap-8 mt-3">
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
                  href="https://www.linkedin.com/in/kanchan-basnet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://medium.com/@kanchanbasnet5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  <BookText size={24} />
                </a>

                <a
                  href="mailto:kanchanbasnet5@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
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
