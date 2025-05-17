import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import {
  Mail, Github, Linkedin, Code, Database, Server, Globe, Sun, Moon, GraduationCap, Briefcase, Phone, MapPin, ExternalLink, Star
} from "lucide-react";

const PROFILE_IMG = "/profile.jpg";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode is enabled in localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Update dark mode class on document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 futuristic-gradient font-sans p-4 md:p-10`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-primary/30 text-primary-foreground hover:bg-primary/50 hover:text-primary-foreground hover:scale-110 transition-all z-50 futuristic-border"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Profile Section */}
      <header className={`text-center mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>  
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">
            Krishnendu Saji
          </h1>
          <p className="text-lg text-foreground/80 futuristic-glow">Software Engineer | AI & Data Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="mailto:krishnendusajim@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><Mail className="w-6 h-6 text-primary hover:text-primary/80 futuristic-glow" /></a>
            <a href="https://github.com/Kris-and-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><Github className="w-6 h-6 text-primary hover:text-primary/80 futuristic-glow" /></a>
            <a href="https://www.linkedin.com/in/krishnendusaji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><Linkedin className="w-6 h-6 text-primary hover:text-primary/80 futuristic-glow" /></a>
            <a href="tel:+4917632662692" aria-label="Phone" className="hover:scale-110 transition-transform"><Phone className="w-6 h-6 text-primary hover:text-primary/80 futuristic-glow" /></a>
            <a href="https://goo.gl/maps/6Qw2Qw2Qw2Qw2Qw2A" target="_blank" rel="noopener noreferrer" aria-label="Location" className="hover:scale-110 transition-transform"><MapPin className="w-6 h-6 text-primary hover:text-primary/80 futuristic-glow" /></a>
          </div>
          <div className="mt-2 text-foreground/60 text-sm futuristic-glow">Germany</div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Skills</h2>
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
            <Card key={i} className={`text-center p-4 flex flex-col items-center gap-2 transform hover:scale-105 transition-all duration-200 futuristic-card group`}>
              <CardContent className="flex flex-col items-center">
                {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-7 h-7 text-primary mb-1 group-hover:text-primary/80 futuristic-glow' })}
                <span className="text-foreground font-medium group-hover:text-foreground/80 transition-colors futuristic-glow">{skill.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Experience</h2>
        <div className="space-y-6">
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Shopify Developer (Werkstudent)</h3>
                  <p className="text-foreground/80 futuristic-glow">Harms Nutricare GmbH, Germany • 02/2024 – 08/2024</p>
                  {/* <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Developed and deployed 5+ Shopify plugins using Liquid and JavaScript, increasing platform functionality and boosting user retention by 20%.</li>
                    <li className="futuristic-glow">Customized 10+ responsive e-commerce websites, integrating RESTful APIs and ensuring seamless UX/UI across mobile and desktop, improving page load speed by 15%.</li>
                    <li className="futuristic-glow">Optimized and debugged existing codebases, reducing error rates by 25% through regular updates and performance enhancements.</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Web Developer for Machine Learning App</h3>
                  <p className="text-foreground/80 futuristic-glow">Siemens AG, Germany • 02/2023 – 07/2023</p>
                  {/* <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Built a proof-of-concept for workflow optimization using React, TypeScript, ChakraUI and Python, boosting process efficiency by 15% for internal R&D teams.</li>
                    <li className="futuristic-glow">Engineered user-friendly React and TypeScript interfaces incorporating ChakraUI components for a machine learning application, boosting user engagement by 40% through enhanced accessibility features and intuitive design.</li>
                    <li className="futuristic-glow">Integrated back-end functionalities with RESTful APIs, enabling smooth data flow and reducing latency by 25%.</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Business Analyst</h3>
                  <p className="text-foreground/80 futuristic-glow">Fragomen, Kochi, India • 03/2021 – 10/2021</p>
                  {/* <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Led 4 cross-functional projects, implementing process improvements that reduced operational delays by 18%.</li>
                    <li className="futuristic-glow">Analyzed datasets to drive strategic decisions, cutting project costs by 12% through actionable insights.</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Data Analyst</h3>
                  <p className="text-foreground/80 futuristic-glow">Indus Towers Limited, Kochi, India • 02/2020 – 10/2021</p>
                  {/* <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Streamlined data commissioning/decommissioning workflows, enhancing data integrity and slashing SBC by 35%.</li>
                    <li className="futuristic-glow">Designed and deployed Power BI and Tableau dashboards, delivering energy usage insights that saved 10% operational costs.</li>
                    <li className="futuristic-glow">Built and maintained secure data pipelines using MongoDB and Python, ensuring 100% compliance with governance standards.</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Software Engineer</h3>
                  <p className="text-foreground/80 futuristic-glow">Fourth Ambit Technologies, Kochi, India • 08/2018 – 02/2020</p>
                  {/* <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Delivered and rigorously tested 8+ interactive web applications using HTML, JavaScript, CSS, and PHP, resulting in a stellar 98% client satisfaction rate across all project deliverables.</li>
                    <li className="futuristic-glow">Implemented scalable code solutions, cutting deployment time by 20% through structured development practices.</li>
                    <li className="futuristic-glow">Collaborated with cross-functional teams to align technical deliverables with business objectives, supporting 3 major product launches.</li>
                  </ul> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Education</h2>
        <div className="space-y-6">
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Master of Engineering, Hochschule Hof</h3>
                  <p className="text-foreground/80 futuristic-glow">Hof, Germany • 2021 – 2025</p>
                  <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Field of study: Software Engineering for Industrial Applications</li>
                    <li className="futuristic-glow">Final grade: 1.9</li>
                    <li className="futuristic-glow">Thesis: Feedback Pulse - A cloud-native sentiment and emotion detection platform to analyze product reviews in real time (LLM, Python, React, Typescript, Firebase, Pandas, Numpy, Torch, Transformers, beautifulsoup4, NLP, Docker)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Bachelor of Technology, MG University</h3>
                  <p className="text-foreground/80 futuristic-glow">Kottayam, India • 2014 – 2018</p>
                  <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Field of study: Computer Science and Engineering</li>
                    <li className="futuristic-glow">Final grade: 2.7</li>
                    <li className="futuristic-glow">Thesis: PDF Converter with OCR algorithm (Android app to convert scanned images of text or handwritten notes into editable PDF formats)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Languages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="futuristic-card">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-primary futuristic-glow">English</span>
              <span className="text-foreground/80 futuristic-glow">Fluent</span>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-primary futuristic-glow">German</span>
              <span className="text-foreground/80 futuristic-glow">B1 (Independent User)</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Recommendations</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="futuristic-card">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-primary futuristic-glow">Jürgen Heym</span>
              <span className="text-foreground/80 futuristic-glow">Fakultät Informatik (INF), Hochschule Hof</span>
              <a href="mailto:juergen.heym@hof-university.de" className="text-primary hover:text-primary/80 hover:underline mt-1 futuristic-glow">juergen.heym@hof-university.de</a>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-4 flex flex-col items-center">
              <span className="text-lg font-bold text-primary futuristic-glow">Harald Held</span>
              <span className="text-foreground/80 futuristic-glow">Senior Research Scientist, Siemens AG</span>
              <a href="mailto:harald.held@siemens.com" className="text-primary hover:text-primary/80 hover:underline mt-1 futuristic-glow">harald.held@siemens.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-primary to-primary text-transparent bg-clip-text futuristic-glow">Projects</h2>
        <div className="space-y-6">
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">Feedback Pulse - Sentiment & Emotion Analysis Platform</h3>
                  <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Cloud-native platform to analyze product/service reviews in real time.</li>
                    <li className="futuristic-glow">Technologies: LLM, Python, React, Typescript, Firebase, Pandas, Numpy, Torch, Transformers, beautifulsoup4, NLP, Docker.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-primary mt-1 futuristic-glow" />
                <div>
                  <h3 className="text-xl font-bold text-primary futuristic-glow">PDF Converter with OCR Algorithm</h3>
                  <ul className="list-disc ml-5 mt-2 text-foreground/70 text-sm">
                    <li className="futuristic-glow">Android app to convert scanned images of text or handwritten notes into editable PDF formats.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center text-sm border-t border-primary/20 pt-6`}>
        <p className="text-foreground/60 futuristic-glow">
          © {new Date().getFullYear()} Krishnendu Saji. All rights reserved.
        </p>
        <p className="mt-2 text-primary futuristic-glow">
          Built with React and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio; 