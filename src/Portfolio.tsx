import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Mail, Github, Linkedin, Code, Database, Server, Globe, Sun, Moon, GraduationCap, Briefcase, Phone, MapPin, ExternalLink, Download, Star
} from "lucide-react";

const PROFILE_IMG = "/profile.jpg";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-cyan-100'
        : 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-cyan-100'
    } font-sans p-4 md:p-10`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-cyan-900/30 text-cyan-400 hover:bg-cyan-800/50 hover:text-cyan-300 hover:scale-110 transition-all z-50 border border-cyan-500/30"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Profile Section */}
      <header className={`text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>  
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
            Krishnendu Saji
          </h1>
          <p className="text-lg text-cyan-200/80">Software Engineer | AI & Data Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:krishnendusajim@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><Mail className="w-6 h-6 text-cyan-400 hover:text-cyan-300" /></a>
            <a href="https://github.com/Kris-and-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><Github className="w-6 h-6 text-cyan-400 hover:text-cyan-300" /></a>
            <a href="https://www.linkedin.com/in/krishnendusaji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><Linkedin className="w-6 h-6 text-cyan-400 hover:text-cyan-300" /></a>
            <a href="tel:+4917632662692" aria-label="Phone" className="hover:scale-110 transition-transform"><Phone className="w-6 h-6 text-cyan-400 hover:text-cyan-300" /></a>
            <a href="https://goo.gl/maps/6Qw2Qw2Qw2Qw2Qw2A" target="_blank" rel="noopener noreferrer" aria-label="Location" className="hover:scale-110 transition-transform"><MapPin className="w-6 h-6 text-cyan-400 hover:text-cyan-300" /></a>
          </div>
          <div className="mt-2 text-cyan-300/60 text-sm">Germany</div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { label: 'Python', icon: <Code /> },
            { label: 'TypeScript', icon: <Code /> },
            { label: 'React', icon: <Code /> },
            { label: 'Reactflow', icon: <Code /> },
            { label: 'HTML', icon: <Code /> },
            { label: 'Tailwind CSS', icon: <Code /> },
            { label: 'Bootstrap', icon: <Code /> },
            { label: 'NoSQL', icon: <Database /> },
            { label: 'JavaScript', icon: <Code /> },
            { label: 'LLM', icon: <Star /> },
            { label: 'Transformers', icon: <Star /> },
            { label: 'Pandas', icon: <Star /> },
            { label: 'NumPy', icon: <Star /> },
            { label: 'Torch', icon: <Star /> },
            { label: 'NLP', icon: <Star /> },
            { label: 'Git', icon: <Github /> },
            { label: 'Firebase', icon: <Server /> },
            { label: 'Docker', icon: <Server /> },
            { label: 'REST APIs', icon: <Server /> },
            { label: 'Kubernetes', icon: <Server /> },
            { label: 'Adaptability', icon: <Star /> },
            { label: 'Collaboration', icon: <Star /> },
            { label: 'Creativity', icon: <Star /> },
            { label: 'Problem Solving', icon: <Star /> },
          ].map((skill, i) => (
            <Card key={i} className={`text-center p-4 flex flex-col items-center gap-2 transform hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group bg-slate-800/50 border border-cyan-500/20`}>
              <CardContent className="flex flex-col items-center">
                {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-7 h-7 text-cyan-400 mb-1 group-hover:text-cyan-300' })}
                <span className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{skill.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Experience</h2>
        <div className="space-y-6">
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Shopify Developer (Werkstudent)</h3>
                  <p className="text-cyan-200/80">Harms Nutricare GmbH, Germany • 02/2024 – 08/2024</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Developed and deployed 5+ Shopify plugins using Liquid and JavaScript, increasing platform functionality and boosting user retention by 20%.</li>
                    <li>Customized 10+ responsive e-commerce websites, integrating RESTful APIs and ensuring seamless UX/UI across mobile and desktop, improving page load speed by 15%.</li>
                    <li>Optimized and debugged existing codebases, reducing error rates by 25% through regular updates and performance enhancements.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Web Developer for Machine Learning App</h3>
                  <p className="text-cyan-200/80">Siemens AG, Germany • 02/2023 – 07/2023</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Built a proof-of-concept for workflow optimization using React, TypeScript, ChakraUI and Python, boosting process efficiency by 15% for internal R&D teams.</li>
                    <li>Engineered user-friendly React and TypeScript interfaces incorporating ChakraUI components for a machine learning application, boosting user engagement by 40% through enhanced accessibility features and intuitive design.</li>
                    <li>Integrated back-end functionalities with RESTful APIs, enabling smooth data flow and reducing latency by 25%.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Business Analyst</h3>
                  <p className="text-cyan-200/80">Fragomen, Kochi, India • 03/2021 – 10/2021</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Led 4 cross-functional projects, implementing process improvements that reduced operational delays by 18%.</li>
                    <li>Analyzed datasets to drive strategic decisions, cutting project costs by 12% through actionable insights.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Data Analyst</h3>
                  <p className="text-cyan-200/80">Indus Towers Limited, Kochi, India • 02/2020 – 10/2021</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Streamlined data commissioning/decommissioning workflows, enhancing data integrity and slashing SBC by 35%.</li>
                    <li>Designed and deployed Power BI and Tableau dashboards, delivering energy usage insights that saved 10% operational costs.</li>
                    <li>Built and maintained secure data pipelines using MongoDB and Python, ensuring 100% compliance with governance standards.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Software Engineer</h3>
                  <p className="text-cyan-200/80">Fourth Ambit Technologies, Kochi, India • 08/2018 – 02/2020</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Delivered and rigorously tested 8+ interactive web applications using HTML, JavaScript, CSS, and PHP, resulting in a stellar 98% client satisfaction rate across all project deliverables.</li>
                    <li>Implemented scalable code solutions, cutting deployment time by 20% through structured development practices.</li>
                    <li>Collaborated with cross-functional teams to align technical deliverables with business objectives, supporting 3 major product launches.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Education</h2>
        <div className="space-y-6">
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Master of Engineering, Hochschule Hof</h3>
                  <p className="text-cyan-200/80">Hof, Germany • 2021 – 2025</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Field of study: Software Engineering for Industrial Applications</li>
                    <li>Final grade: 1.9</li>
                    <li>Thesis: Feedback Pulse - A cloud-native sentiment and emotion detection platform to analyze product reviews in real time (LLM, Python, React, Typescript, Firebase, Pandas, Numpy, Torch, Transformers, beautifulsoup4, NLP, Docker)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Bachelor of Technology, MG University</h3>
                  <p className="text-cyan-200/80">Kottayam, India • 2014 – 2018</p>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Field of study: Computer Science and Engineering</li>
                    <li>Final grade: 2.7</li>
                    <li>Thesis: PDF Converter with OCR algorithm (Android app to convert scanned images of text or handwritten notes into editable PDF formats)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Languages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-cyan-300">English</span>
              <span className="text-cyan-200/80">Fluent</span>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-cyan-300">German</span>
              <span className="text-cyan-200/80">B1 (Independent User)</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Recommendations</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-cyan-300">Jürgen Heym</span>
              <span className="text-cyan-200/80">Fakultät Informatik (INF), Hochschule Hof</span>
              <a href="mailto:juergen.heym@hof-university.de" className="text-cyan-400 hover:text-cyan-300 hover:underline mt-1">juergen.heym@hof-university.de</a>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-cyan-300">Harald Held</span>
              <span className="text-cyan-200/80">Senior Research Scientist, Siemens AG</span>
              <a href="mailto:harald.held@siemens.com" className="text-cyan-400 hover:text-cyan-300 hover:underline mt-1">harald.held@siemens.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Projects</h2>
        <div className="space-y-6">
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Feedback Pulse - Sentiment & Emotion Analysis Platform</h3>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Cloud-native platform to analyze product/service reviews in real time.</li>
                    <li>Technologies: LLM, Python, React, Typescript, Firebase, Pandas, Numpy, Torch, Transformers, beautifulsoup4, NLP, Docker.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border border-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">PDF Converter with OCR Algorithm</h3>
                  <ul className="list-disc ml-5 mt-2 text-cyan-100/70 text-sm">
                    <li>Android app to convert scanned images of text or handwritten notes into editable PDF formats.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center text-sm border-t border-cyan-500/20 pt-6`}>
        <p className="text-cyan-200/60">
          © {new Date().getFullYear()} Krishnendu Saji. All rights reserved.
        </p>
        <p className="mt-2 text-cyan-400">
          Built with React and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio; 