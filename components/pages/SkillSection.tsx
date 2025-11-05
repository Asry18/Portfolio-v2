"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
	const categories = ["All", "Programming", "Front-end", "Database", "Version Control", "Back-end", "Other"];
	const [selected, setSelected] = useState<string>("All");
	const visibleSkills = selected === "All" ? skills : skills.filter((s) => s.category === selected);

	// design tokens (kept inline for now)
	const designVars: any = {
		'--color-primary': '#2563EB',
		'--color-accent': '#FACC15',
		'--bg-offwhite': '#F9FAFB',
		'--text-slate': '#1F2937',
	};

	return (
		<section id="skills" className="py-20 px-6 relative" style={designVars}>
			{/* subtle background gradient overlay (matches other main sections) */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/60 to-white/0 pointer-events-none" />
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
				>
					Technical Skills
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center text-slate-700 max-w-2xl mx-auto mb-8"
				>
					Core technologies, tools and frameworks I use regularly.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{/* Categories - sidebar on md+ screens, top tabs on small screens */}
					<nav className="col-span-1 md:col-span-1">
						<ul className="flex md:flex-col gap-2 overflow-auto">
							{categories.map((cat) => {
								const active = selected === cat;
								return (
									<li key={cat}>
										<button
											onClick={() => setSelected(cat)}
											className={`inline-block px-4 py-2 rounded-md w-full text-sm font-medium transition-colors ${active ? 'bg-[#2563EB] text-white' : 'bg-white text-[#1F2937] border border-transparent hover:bg-white/60'}`}
											aria-pressed={active}
										>
											{cat}
										</button>
									</li>
								);
							})}
						</ul>
					</nav>

					{/* Skills grid */}
					<div className="col-span-1 md:col-span-3">
						<motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
							{visibleSkills.map((s) => (
								<motion.div
									key={s.name}
									initial={{ opacity: 0, y: 8 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
								>
									<div className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-semibold text-white" style={{ background: 'var(--color-primary)' }} aria-hidden>
										{s.name.charAt(0).toUpperCase()}
									</div>
									<div className="text-sm text-white font-medium">{s.name}</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
