import React from 'react';
import './styles.css';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

interface Project {
  name: string;
  description: string;
  link: string;
}

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-4 md:p-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Krishnendu Saji</h1>
        <p className="text-lg text-gray-600">Software Developer</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:krishnendusajim@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 text-gray-600 hover:text-black" />
          </a>
          <a href="https://github.com/Kris-and-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-600 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/krishnendusaji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-black" />
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'MongoDB'].map((skill) => (
            <Card key={skill} className="text-center p-4">
              <CardContent>{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Project One",
              description: "A web application for task management using React and Node.js.",
              link: "#"
            },
            {
              name: "Project Two",
              description: "A REST API built with Express and MongoDB.",
              link: "#"
            }
          ].map((project: Project, i: number) => (
            <Card key={i} className="p-4">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4 text-gray-700">{project.description}</p>
                <Button variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Krishnendu Saji. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio; 