import HeaderNavigation from "../../components/FooterNavigation"
import { Mail, BookText } from "lucide-react"
import profileImage from "../../assets/images/profile.jpeg"
import ProfessionalSummary from "./AboutContent"
import { GithubIcon, LinkedInIcon } from "../../assets/icons/icons"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <div>
      {/* Main container - added responsive padding */}
      <div className="min-h-screen text-white px-3 sm:px-4 py-6 sm:py-8 pb-20 sm:pb-24">
        <HeaderNavigation />

        {/* Adjusted top margin for better spacing on mobile */}
        <div className="max-w-7/12 mx-auto space-y-10 sm:space-y-14 mt-16 sm:mt-20 md:mt-25">
          {/* Profile section - improved responsive layout */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-20">
            {/* Profile image - adjusted sizes for different screens */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-6 border-gray-800">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-2 border-gray-800">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content - responsive text sizes */}
            <div className="space-y-1 sm:space-y-1.5 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Kanchan Basnet</h1>
              <p className="text-lg sm:text-xl text-gray-400">Software Engineer</p>

              {/* Social links - adjusted spacing and icon sizes */}
              <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-2 sm:mt-3">
                {/* For SVG icons, we wrap them in a div with controlled size */}
                <a
                  href="https://github.com/Kanchanbasnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  {/* Wrapper div to control SVG size */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/kanchan-basnet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  {/* Wrapper div to control SVG size */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <LinkedInIcon />
                  </div>
                </a>

                <a
                  href="https://medium.com/@kanchanbasnet5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  {/* Responsive icon sizing for Lucide icons */}
                  <BookText size={20} className="sm:size-6" />
                </a>

                <a
                  href="mailto:kanchanbasnet5@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  {/* Responsive icon sizing for Lucide icons */}
                  <Mail size={20} className="sm:size-6" />
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
  )
}

