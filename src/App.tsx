import { Activity, Building2, CheckCircle, ChevronRight, Cpu, Mail, MapPin, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const SERVICES = [
  {
    id: "pm",
    title: "Project Management",
    description: "Strategic oversight for large-scale industrial and construction projects.",
    icon: Building2,
  },
  {
    id: "po",
    title: "Process Optimization",
    description: "Data-driven system analysis to improve efficiency and performance.",
    icon: Activity,
  },
  {
    id: "iso",
    title: "ISO Certification",
    description: "Guiding organizations through the implementation and management of international quality standards.",
    icon: CheckCircle,
  },
  {
    id: "ds",
    title: "Digital Systems",
    description: "Customized software development and web-based technical tools.",
    icon: Cpu,
  }
];

const PROJECTS = [
  {
    title: "Scaffold Failure Investigation",
    discipline: "Root Cause Analysis",
    description: "Root Cause Analysis for scaffold failure incident investigation."
  },
  {
    title: "Chemical Processing Simulator",
    discipline: "Simulation Software",
    description: "Simulation software for control room operators of chemical processing."
  },
  {
    title: "Project Management Platform",
    discipline: "Software Development",
    description: "Custom project management software that tracks critical path, WBS, EVMS, and allows individual users and contractors to input expenses and update progress from end point devices."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col relative overflow-x-hidden">
      {/* Geometric Lattice Background Decor */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Header */}
      <header 
        className={`fixed inset-x-0 top-0 z-50 h-[60px] flex items-center transition-colors duration-300 border-b ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-lg' 
            : 'bg-slate-950/80 backdrop-blur-md border-slate-800'
        }`}
      >
        <div className="max-w-[1024px] w-full mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#home" className="text-[1.2rem] font-bold tracking-[-0.02em] text-blue-400 uppercase">
            LATTICE SYSTEMS GROUP
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[0.9rem] font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[0.9rem] font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex flex-col flex-1 max-w-[1024px] w-full mx-auto relative pt-[60px]">
        {/* Navigation spacer */}
        <div id="home" className="absolute top-0"></div>

        {/* Hero Section */}
        <section className="px-6 lg:px-10 py-12 lg:py-16 flex flex-col justify-center min-h-[240px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[700px]"
          >
            <h1 className="text-5xl lg:text-[3.5rem] leading-[1] font-extrabold tracking-[-0.03em] text-white mb-3">
              Optimizing Complex Systems.
            </h1>
            <p className="text-[1.1rem] text-slate-400 max-w-[600px] leading-[1.5] mb-8">
              Integrated Project Management and Technical Solutions for Industrial and Digital Infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
              >
                Explore Services
                <ChevronRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </section>

        {/* Two Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-10 pb-10 flex-1">
          
          {/* Services Section */}
          <section id="services" className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[0.75rem] uppercase tracking-[0.1em] text-blue-500 font-bold mb-4">Specialized Services</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} className="text-blue-500 shrink-0" />
                        <h3 className="font-bold text-[0.95rem] text-blue-400 leading-tight">{service.title}</h3>
                      </div>
                      <p className="text-[0.8rem] text-slate-400 leading-[1.4] mt-1">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[0.75rem] uppercase tracking-[0.1em] text-blue-500 font-bold mb-4">Active Projects</h2>

              <div className="flex flex-col gap-3">
                {PROJECTS.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-slate-900 border border-slate-800 p-[14px] rounded-lg flex flex-col gap-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-2">
                      <h3 className="text-[0.9rem] font-semibold text-white leading-snug">{project.title}</h3>
                      <span className="text-[0.65rem] uppercase bg-blue-500/10 text-blue-400 px-2 py-[2px] rounded font-medium border border-blue-500/20 shrink-0 tracking-wider">
                        {project.discipline}
                      </span>
                    </div>
                    {/* Kept original description content */}
                    <p className="text-[0.8rem] text-slate-400 leading-[1.4]">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

        </div>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-900 mt-auto min-h-[100px] flex items-end">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-10 py-5 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-1">
            <div className="text-[0.85rem] font-bold text-white flex items-center gap-2">
              <MapPin size={14} className="text-blue-500" /> Post Falls, ID
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[0.85rem] mb-2 md:mb-0">
              <Mail size={14} className="text-slate-500" /> info@latticesystemsgroup.com
            </div>
            <div className="text-[0.7rem] text-slate-400 max-w-[500px] leading-[1.4]">
              Lattice Systems & Consulting LLC is a professional services firm. Engineering consulting provided by a Licensed PE.
            </div>
          </div>
          
          <div className="text-left md:text-right">
            <div className="text-[0.7rem] text-slate-400 leading-[1.4]">
              &copy; {new Date().getFullYear()} Lattice Systems & Consulting LLC.
              <br className="hidden md:block" /> All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
