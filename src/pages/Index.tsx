import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
    {
      title: "Industrial Artificial Intelligence with Cloud Computing – Edunet Foundation",
      image: "/lovable-uploads/125158e1-5356-4f14-9d43-b942b6dba444.png"
    },
    {
      title: "Applied Artificial Intelligence – Edunet Foundation",
      image: "/lovable-uploads/5c5e99e3-e5e1-447b-b4ee-4c0aa5528577.png"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-deep-blue">
            Sanjog's Portfolio
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Me', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Experience', id: 'experience' },
              { name: 'Blogs', id: 'blogs' },
              { name: 'Certifications', id: 'certifications' },
              { name: 'Contact Me', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Part - Profile Picture */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/1f2eaee7-1a2b-41a7-8971-b018e8f26944.png" 
              alt="Sanjog Singh" 
              className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl animate-float object-cover"
            />
          </div>
          
          {/* Right Part - Content */}
          <div className="text-center md:text-left">
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
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-l-4 border-l-electric-blue">
              <CardHeader>
                <CardTitle className="text-deep-blue">Personal Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tech is Love, So I'm Techie! I'm currently pursuing Computer Science Engineering with specialization in Data Science at ITM Vocational University, Vadodara.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I completed a one-month Internship at Sparks To Ideas, focusing on Python (basic to advanced), including libraries like Pandas, NumPy, and Matplotlib.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My interests include Data Science, Machine Learning, and Python Programming.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-l-4 border-l-teal">
              <CardHeader>
                <CardTitle className="text-deep-blue">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="border-l-4 border-l-electric-blue bg-gradient-to-r from-electric-blue/5 to-transparent hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Bachelor of Technology</CardTitle>
                    <CardDescription>Computer Science Engineering with Specialization in Data Science</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">ITM Vocational University, Vadodara (2021–2025)</p>
                    <p className="font-semibold text-electric-blue">CGPA: 9.78</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-teal bg-gradient-to-r from-teal/5 to-transparent hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">SSC & HSC (Science)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">Shreyas Vidyalaya, Vadodara (2018–2021)</p>
                    <p className="font-semibold text-teal">Percentage: 85%</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-deep-blue">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-deep-blue">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-teal/10 text-teal hover:bg-teal/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-deep-blue">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-deep-blue">{lang.lang}</span>
                      <span className="text-gray-600 block text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-0 shadow-lg bg-white/90 backdrop-blur-sm">
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
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Experience</h2>
          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-electric-blue shadow-lg animate-fade-in bg-gradient-to-r from-electric-blue/5 to-transparent">
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
      <section id="blogs" className="py-20 px-4 bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Blogs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((blog, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in bg-white/90 backdrop-blur-sm">
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
      <section id="certifications" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deep-blue mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-teal shadow-lg animate-fade-in bg-gradient-to-r from-teal/5 to-transparent cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🏆</div>
                        <p className="text-gray-700 font-medium">{cert.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <div className="flex justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-auto max-w-full rounded-lg shadow-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Contact Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-lg text-white/90">(+91) 9662578018</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <a 
                  href="mailto:singhsanjog197@gmail.com" 
                  className="text-lg hover:underline transition-all duration-300 text-white/90 hover:text-white break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  singhsanjog197@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/singhsanjog" 
                  className="text-lg hover:underline transition-all duration-300 text-white/90 hover:text-white break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/singhsanjog
                </a>
              </CardContent>
            </Card>
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
