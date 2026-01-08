"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaGlobe,
  FaPaintBrush,
  FaCog,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  link: string;
}

interface SocialLink {
  icon: ReactNode;
  link: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  bgColor: string;
}

interface Skill {
  name: string;
  color: string;
  level: number;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Developer"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      typed.destroy();
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook style={{ color: "#1877F2" }} />, link: "https://www.facebook.com/rehanalianjum" },
    { icon: <FaLinkedin style={{ color: "#0A66C2" }} />, link: "https://www.linkedin.com/in/rehan-ali-anjum" },
    { icon: <FaWhatsapp style={{ color: "#25D366" }} />, link: "https://wa.me/923268715535" },
    { icon: <FaGithub style={{ color: "#FFFFFF" }} />, link: "https://github.com/rehanalianjum16-dev" },
  ];

  const services: Service[] = [
    {
      icon: <FaGlobe style={{ fontSize: "3rem", color: "#06B6D4" }} />,
      title: "Full Stack Development",
      desc: "Building responsive, fast, and scalable web applications tailored to your needs.",
      bgColor: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaPaintBrush style={{ fontSize: "3rem", color: "#F59E0B" }} />,
      title: "Frontend Development",
      desc: "Crafting intuitive and user-friendly designs with modern tools and practices.",
      bgColor: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaCog style={{ fontSize: "3rem", color: "#6B7280" }} />,
      title: "Backend Development",
      desc: "Creating robust, secure, and scalable server-side applications and APIs.",
      bgColor: "from-gray-500 to-gray-700",
    },
    {
      icon: <FaGithub style={{ fontSize: "3rem", color: "#FFFFFF" }} />,
      title: "Version Control",
      desc: "Managing repositories, version control, and collaborative development.",
      bgColor: "from-gray-800 to-black",
    },
  ];

  const skills: Skill[] = [
    { name: "HTML", color: "#E34F26", level: 90 },
    { name: "CSS", color: "#1572B6", level: 85 },
    { name: "JavaScript", color: "#F7DF1E", level: 80 },
    { name: "React", color: "#61DAFB", level: 75 },
    { name: "Next.js", color: "#000000", level: 70 },
    { name: "Node.js", color: "#339933", level: 75 },
    { name: "Python", color: "#3776AB", level: 70 },
    { name: "MongoDB", color: "#47A248", level: 65 },
    { name: "GitHub", color: "#F05032", level: 80 },
  ];

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    const element = document.querySelector<HTMLElement>(link);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // apna CV path
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="font-sans from-gray-900 via-black to-gray-900 text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Rehan Ali Anjum</h1>

          <ul className="hidden md:flex gap-6 text-gray-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(item.link)}
                  className={`hover:text-cyan-400 transition ${
                    activeSection === item.link.substring(1) ? "text-cyan-400 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 text-2xl focus:outline-none hover:text-cyan-400 transition"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 shadow-md transition font-semibold"
          >
            Contact Me
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-gray-300">
              {navItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick(item.link)}
                    className={`block hover:text-cyan-400 transition ${
                      activeSection === item.link.substring(1) ? "text-cyan-400 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen pt-28 gap-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jfif')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 space-y-6 max-w-xl">
          <h3 className="text-lg text-cyan-300">👋 Hello It's Me</h3>
          <h1 className="text-5xl font-extrabold text-cyan-400">Rehan Ali Anjum</h1>
          <h3 className="text-2xl text-gray-200">
            And I am a <span className="text-cyan-400 text"></span>
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-xl">
            I am a Full Stack Developer passionate about building dynamic web applications. I focus on clean UI, strong UX, and reliable backends.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button onClick={() => handleNavClick("#about")} className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 shadow-lg transition font-semibold">
              More About Me
            </button>
            <motion.button onClick={handleDownloadCV} className="bg-green-500 px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-green-600 shadow-lg transition font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaDownload /> Download CV
            </motion.button>
          </div>

          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, i) => (
              <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition bg-gray-800 p-3 rounded-full hover:bg-cyan-900 shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.5 }}>
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image src="/rehan3.jpeg" alt="Huzaifa" width={384} height={384} className="rounded-full object-cover border-4 border-cyan-600 shadow-lg w-full h-full" priority />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-20 bg-gray-950 text-white">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              I am <span className="text-cyan-400 font-semibold">Rehan Ali Anjum</span>, a passionate Full Stack Developer with expertise in building modern, responsive web applications using the latest technologies.
            </p>
            <p>
              I specialize in creating seamless user experiences and robust server-side architectures, turning ideas into functional, scalable applications.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 md:px-16 py-20 bg-gray-900">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition text-center hover:-translate-y-2 duration-300 border border-gray-700">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gray-700">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 md:px-16 py-20 bg-gray-950">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-center">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skills.map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-cyan-400/20 transition group border border-gray-700">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-semibold text-lg text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}></div>
                </div>
                <span className="text-right text-sm text-cyan-400 mt-1 font-semibold">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-6 md:px-16 py-20 bg-gray-800">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h4 className="text-2xl mb-6 text-cyan-400">Let's work together ✨</h4>
              <p className="text-gray-300 text-lg mb-6">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3 text-lg">
                  <FaEnvelope style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>rehanalianjum16@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <FaPhone style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>03008715535/ 0326-8715535</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <FaMapMarkerAlt style={{ color: "#06B6D4", fontSize: "1.5rem" }} />
                  <span>Pakistan (Chunian)</span>
                </li>
              </ul>
              <div className="flex gap-4 text-2xl mt-8">
                {socialLinks.map((social, i) => (
                  <motion.a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition bg-gray-700 p-3 rounded-full hover:bg-cyan-900 shadow-lg" whileHover={{ scale: 1.2, rotate: 5 }}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <input type="text" placeholder="Enter your Name" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" required />
              <input type="email" placeholder="Enter your Email" className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" required />
              <textarea placeholder="Your Message" rows={5} className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none transition text-white placeholder-gray-400" required></textarea>
              <button type="submit" className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 shadow-lg transition font-semibold mt-2">Send Message</button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
