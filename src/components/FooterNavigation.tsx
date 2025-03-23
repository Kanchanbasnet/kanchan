
import { useState } from "react"
import { Home, Network, User, BookOpen, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { useNavigate, useLocation } from "react-router-dom"

const HeaderNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isNavigating, setIsNavigating] = useState(false)

  // Navigation items configuration
  // You can modify the icons or paths here
  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Projects", icon: Network, path: "/projects" },
    { name: "Blogs", icon: BookOpen, path: "/blogs" },
    { name: "Contact", icon: Mail, path: "mailto:kanchanbasnet5@gmail.com" },
  ]

  const handleNavigation = (path: string) => {
    if (path.startsWith("mailto:")) {
      window.location.href = path
    } else if (location.pathname !== path) {
      setIsNavigating(true)
      setTimeout(() => {
        navigate(path)
        setIsNavigating(false)
      }, 300)
    }
  }

  return (
    // HEADER POSITIONING
    // Adjust these values to change the vertical position of the header
    // top-4 = position on mobile, sm:top-5 = small screens, md:top-6 = medium screens and up
    <header className="fixed top-4 sm:top-5 md:top-6 left-0 right-0 flex justify-center z-50 px-4 sm:px-4">
      <TooltipProvider>
        {/* MAIN CONTAINER 
            - Adjust space-x-* values to change spacing between navigation items
            - Adjust px-* and py-* values to change padding inside the container
            - Modify rounded-full to change the border radius */}
        <motion.div
          className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 bg-[#1c1c1c] rounded-full px-4 sm:px-4 py-2 sm:py-2 shadow-lg border border-[#2a2a2a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                {/* NAVIGATION ITEM
                    - Adjust p-* values to change padding around each icon
                    - This affects the clickable area and spacing */}
                <motion.div
                  className={`relative p-2.5 sm:p-2.5 md:p-3 rounded-full flex items-center justify-center cursor-pointer 
                            transition-all duration-300 ${location.pathname === item.path ? "text-white" : "text-[#8b8b8b] hover:text-white"}`}
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* ACTIVE BACKGROUND INDICATOR
                      - This is the background that appears behind the active item
                      - You can change the bg-[#333] to modify its color */}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-[#333] rounded-full -z-10"
                      layoutId="activeBackground"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {/* ICON SIZE
                      - Adjust h-* and w-* values to change icon sizes
                      - Current: h-6/w-6 on mobile, larger on bigger screens */}
                  <item.icon className="h-6 w-6 sm:h-6 sm:w-6 md:h-6 md:w-6" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </TooltipProvider>

      {/* Page transition overlay - this creates the fade effect when navigating */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

export default HeaderNavigation

