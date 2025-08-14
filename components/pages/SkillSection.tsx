"use client";

import { motion } from "framer-motion";

// Your provided technical skills
const skills = [
	{ name: "JavaScript", category: "Programming" },
	{ name: "TypeScript", category: "Programming" },
	{ name: "Java", category: "Programming" },
	{ name: "C", category: "Programming" },
	{ name: "Python", category: "Programming" },

	{ name: "React.js", category: "Front-end" },
	{ name: "Next.js", category: "Front-end" },
	{ name: "Tailwind CSS", category: "Front-end" },
	{ name: "MUI", category: "Front-end" },
	{ name: "Bootstrap", category: "Front-end" },

	{ name: "MySQL", category: "Database" },
	{ name: "MSSQL", category: "Database" },
	{ name: "MongoDB", category: "Database" },

	{ name: "Git", category: "Version Control" },

	{ name: "Express.js", category: "Back-end" },
	{ name: "Node.js", category: "Back-end" },

	{ name: "Figma", category: "Other" },
	{ name: "ClickUp", category: "Other" },
	{ name: "Arduino", category: "Other" },
];

export default function SkillsSection() {
	const categories = [
		"Programming",
		"Front-end",
		"Database",
		"Version Control",
		"Back-end",
		"Other",
	];

	return (
		<section id="skills" className="py-32 px-6 relative">
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
				>
					Technical Skills
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{categories.map((category) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500"
						>
							<h3 className="text-xl font-bold text-white mb-6 text-center">
								{category}
							</h3>
							<div className="flex flex-wrap gap-3 justify-center">
								{skills
									.filter((skill) => skill.category === category)
									.map((skill, index) => (
										<span
											key={index}
											className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300"
										>
											{skill.name}
										</span>
									))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
