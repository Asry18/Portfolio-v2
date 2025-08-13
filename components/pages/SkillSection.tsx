"use client";

import { motion } from "framer-motion";

// Sample skills data inside component
const skills = [
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "Tailwind", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Express.js", category: "Backend", level: 80 },
  { name: "MongoDB", category: "Database", level: 75 },
  { name: "PostgreSQL", category: "Database", level: 70 },
  { name: "Docker", category: "DevOps", level: 60 },
  { name: "GitHub Actions", category: "DevOps", level: 55 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Frontend", "Backend", "Database", "DevOps"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/90 text-sm">{skill.name}</span>
                        <span className="text-purple-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
