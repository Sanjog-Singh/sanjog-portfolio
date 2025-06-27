
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Mail, Phone, Linkedin } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "My Recommender Web App",
      description: "Recommender system for Movies, Music, and Books",
      link: "https://github.com/Sanjog-Singh/My-Recommender-Web-App.git"
    },
    {
      title: "NLP Fusion",
      description: "A 3-in-1 NLP application for sentiment, similarity & spam detection",
      link: "https://github.com/Sanjog-Singh/NLP-Fusion.git"
    },
    {
      title: "WhatsApp Chat Analyzer",
      description: "Analyzes WhatsApp chats using graphs and stats",
      link: "https://github.com/Sanjog-Singh/WhatsApp-Chat-Analyzer.git"
    },
    {
      title: "Olympics Data Analysis",
      description: "Interactive breakdown of Olympics event data",
      link: "https://github.com/Sanjog-Singh/Olympics-Data-Analysis.git"
    },
    {
      title: "Voice Agent",
      description: "AI voice assistant with Zoho CRM and Twilio integration",
      link: "https://github.com/Sanjog-Singh/Voice-Agent.git"
    }
  ];

  const technicalSkills = [
    "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", 
    "scikit-learn", "SQL", "Streamlit", "LLMs", "Flask"
  ];

  const softSkills = [
    "Teamwork and Collaboration", "Effective Communication", 
    "Continuous Learning", "Problem Solving", "Time Management", "Consistency"
  ];

  const languages = [
    { lang: "Hindi", level: "Full Professional Proficiency" },
    { lang: "Gujarati", level: "Full Professional Proficiency" },
    { lang: "English", level: "Professional Working Proficiency" }
  ];

  const certifications = [
    "Industrial Artificial Intelligence with Cloud Computing – Edunet Foundation",
    "Applied Artificial Intelligence – Edunet Foundation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/10 to-electric-blue/10 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Sanjog Singh" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-deep-blue mb-4">
            Sanjog Singh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Aspiring Data Scientist & Python Developer
          </p>
          <p className="text-lg md:text-xl text-electric-blue font-medium mb-8 italic">
            "Tech is Love, So I'm Techie!"
          </p>
          <Button 
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-deep-blue mb-4">Personal Bio</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tech is Love, So I'm Techie! I'm currently pursuing Computer Science Engineering with specialization in Data Science at ITM Vocational University, Vadodara.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I completed a one-month Internship at Sparks To Ideas, focusing on Python (basic to advanced), including libraries like Pandas, NumPy, and Matplotlib.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My interests include Data Science, Machine Learning, and Python Programming.
              </p>
            </div>

            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-deep-blue mb-4">Education</h3>
              <Card className="mb-4 border-l-4 border-l-electric-blue">
                <CardHeader>
                  <CardTitle className="text-lg">Bachelor of Technology</CardTitle>
                  <CardDescription>Computer Science Engineering with Specialization in Data Science</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">ITM Vocational University, Vadodara (2021–2025)</p>
                  <p className="font-semibold text-electric-blue">CGPA: 9.78</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-teal">
                <CardHeader>
                  <CardTitle className="text-lg">SSC & HSC (Science)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Shreyas Vidyalaya, Vadodara (2018–2021)</p>
                  <p className="font-semibold text-teal">Percentage: 85%</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-scale-in">
              <h3 className="text-xl font-semibold text-deep-blue mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="text-xl font-semibold text-deep-blue mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-teal/10 text-teal hover:bg-teal/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="text-xl font-semibold text-deep-blue mb-4">Languages</h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-deep-blue">{lang.lang}</span>
                    <span className="text-gray-600 ml-2">– {lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-electric-blue transition-colors duration-300">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      {project.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Experience</h2>
          <Card className="max-w-4xl mx-auto border-l-4 border-l-electric-blue shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-deep-blue">Python Developer</CardTitle>
              <CardDescription className="text-lg">Hybrid Workforces, Vadodara</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Feb 2025 – May 2025 | Hybrid</p>
              <p className="text-gray-700 leading-relaxed">
                Developed a Voice Agent using Python, Flask, Twilio, Ultravox.ai, and Zoho CRM. 
                The agent responds to client queries, schedules meetings, sends emails, and updates CRM records.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 px-4 bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Blogs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((blog, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-gray-500">Coming Soon</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-teal shadow-lg animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🏆</div>
                    <p className="text-gray-700 font-medium">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Contact Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">(+91) 9662578018</p>
            </div>
            <div className="animate-fade-in">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:singhsanjog197@gmail.com" 
                className="text-lg hover:underline transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                singhsanjog197@gmail.com
              </a>
            </div>
            <div className="animate-fade-in">
              <Linkedin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/singhsanjog" 
                className="text-lg hover:underline transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/singhsanjog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-deep-blue text-white text-center">
        <p className="text-gray-300">
          © 2025 Sanjog Singh. Built with passion and React. ⚡
        </p>
      </footer>
    </div>
  );
};

export default Index;
