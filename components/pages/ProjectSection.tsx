"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Sample projects data
const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with Next.js and TailwindCSS.",
    image: "/projects/portfolio.png",
    featured: true,
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with React and Node.js.",
    image: "/projects/ecommerce.png",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Blog Platform",
    description: "A multi-user blogging platform with authentication and CRUD features.",
    image: "/projects/blog.png",
    featured: false,
    technologies: ["Next.js", "MongoDB", "TypeScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-black/10 backdrop-blur-3xl relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.filter((p) => p.featured).map((project, index) => (
            <motion.div key={index} variants={fadeInScale}>
              <Card className="group bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <CardTitle className="text-2xl text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 mb-6 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1 group-hover:border-purple-400 transition-all"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.filter((p) => !p.featured).map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex h-full">
                  <div className="w-1/3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded-l-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-lg text-white mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-white/70 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-white/10 text-white/90 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
