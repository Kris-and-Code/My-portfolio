import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  Mail, Github, Linkedin, Code, Database, Server, Globe, 
  Sun, Moon, GraduationCap, Briefcase, Phone, MapPin,
  ExternalLink, ChevronDown
} from "lucide-react";

interface Project {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects: Project[] = [
    {
      name: "Project One",
      description: "A web application for task management using React and Node.js.",
      link: "#",
      icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    },
    {
      name: "Project Two",
      description: "A REST API built with Express and MongoDB.",
      link: "#",
      icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800'
    } font-sans p-4 md:p-10`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Header */}
      <header className={`text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative inline-block">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Krishnendu Saji
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">Software Developer</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="mailto:krishnendusajim@gmail.com" aria-label="Email" className="transform hover:scale-110 transition-transform">
            <Mail className="w-7 h-7 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300" />
          </a>
          <a href="https://github.com/Kris-and-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform hover:scale-110 transition-transform">
            <Github className="w-7 h-7 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300" />
          </a>
          <a href="https://www.linkedin.com/in/krishnendusaji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-7 h-7 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300" />
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <Card className={`p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-lg ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate software developer with expertise in modern web technologies. 
              I love creating elegant solutions to complex problems and am constantly learning 
              new technologies to enhance my skills. When I'm not coding, you can find me 
              exploring new technologies or contributing to open-source projects.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Code />, label: 'Frontend' },
                { icon: <Server />, label: 'Backend' },
                { icon: <Database />, label: 'Database' },
                { icon: <Globe />, label: 'Web' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 rounded-lg transform hover:scale-105 transition-all duration-200 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-purple-50 hover:bg-purple-100'
                  }`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: `w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2`
                  })}
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className={`p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <CardContent>
              <div className="flex items-start">
                <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Senior Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Tech Company • 2020 - Present</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Leading development of enterprise applications using React and Node.js.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'MongoDB'].map((skill) => (
            <Card 
              key={skill} 
              className={`text-center p-4 transform hover:scale-105 transition-all duration-200 hover:shadow-lg group ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <CardContent className="text-purple-700 dark:text-purple-400 font-medium group-hover:text-purple-900 dark:group-hover:text-purple-300 transition-colors">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project: Project, i: number) => (
            <Card 
              key={i} 
              className={`p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-lg group ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <CardContent>
                <div className="flex items-center mb-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold ml-2 text-purple-700 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>
                <Button 
                  variant="outline" 
                  asChild
                  className={`border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors`}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Contact
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className={`p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <a href="mailto:krishnendusajim@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                    krishnendusajim@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">Location, Country</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center text-sm border-t ${
        darkMode ? 'border-gray-700' : 'border-purple-200'
      } pt-6`}>
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Krishnendu Saji. All rights reserved.
        </p>
        <p className="mt-2 text-purple-600 dark:text-purple-400">
          Built with React and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio; 