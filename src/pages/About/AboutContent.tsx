import { useState } from "react"
import { FileText, Building2, GraduationCap } from "lucide-react"
import About from "./About"
import Experience from "./Experience"
import Education from "./Education"

export default function ProfessionalSummary() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="overflow-hidden rounded-lg bg-black border border-gray-800">
      <div className="grid grid-cols-3 divide-x divide-gray-800">
        <button
          onClick={() => setActiveTab("about")}
          className={`flex items-center justify-center gap-2 py-3 px-4 transition-colors cursor-pointer 
            ${activeTab === "about" ? "text-white bg-[#1c1c1c]" : "text-gray-400 hover:text-gray-300"}
          `}
        >
          <FileText className="w-5 h-5" />
          <span className="font-medium">About</span>
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center justify-center gap-2 py-3 px-4 transition-colors cursor-pointer 
            ${activeTab === "experience" ? "text-white bg-[#1c1c1c]" : "text-gray-400 hover:text-gray-300"}
          `}
        >
          <Building2 className="w-5 h-5" />
          <span className="font-medium">Experience</span>
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center justify-center gap-2 py-3 px-4 transition-colors cursor-pointer 
            ${activeTab === "education" ? "text-white bg-[#1c1c1c]" : "text-gray-400 hover:text-gray-300"}
          `}
        >
          <GraduationCap className="w-5 h-5" />
          <span className="font-medium">Education</span>
        </button>
      </div>

      <hr className="border-t border-gray-800 w-full m-0" />

      <div className="p-4">
        <div className="text-gray-400">
          {activeTab === "about" && <About />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
        </div>
      </div>
    </div>
  )
}