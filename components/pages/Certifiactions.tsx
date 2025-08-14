"use client";

import { motion } from "framer-motion";

// Combined data for Awards, Achievements & Leadership, and Certifications
const highlights = [
	// Awards
	{
		name: "Code Rush 2024 – 4th Place | Secured 4th place at CodeRush 2024 organized by INTECS University of Moratuwa.",
		category: "Awards",
	},
	{
		name: "SpiritX 2025 (MoraSpirit) – Participation | Worked on two projects, building complete solutions under tight deadlines.",
		category: "Awards",
	},
	{
		name: "CodeSprint 2024 (IIT) – Participation | Our team, Developer.msi, took part in CodeSprint.",
		category: "Awards",
	},
	{
		name: "MoraXtreme 9.0 (IEEE, UOM) – Participation",
		category: "Awards",
	},

	// Achievements & Leadership
	{
		name: "Sales Manager – AIESEC in Sri Lanka, Colombo South | Guided my team throughout the term and oversaw sales strategy and execution.",
		category: "Achievements & Leadership",
	},
	{
		name: "Sales Team Member – AIESEC in Sri Lanka, Colombo South | Worked in the Winter 23.24 sales team. Gained hands-on experience in client communication, outreach via emails and calls, and enhanced professional communication skills.",
		category: "Achievements & Leadership",
	},
	{
		name: "IGT Member – AIESEC in Sri Lanka, Colombo South | Served as a panel member of the Incoming Global Talent (IGT) team.",
		category: "Achievements & Leadership",
	},
	{
		name: "Head Prefect – G/Welitha Muslim Maha Vidyalaya, Balapitiya | Led the student body, coordinated school events, and acted as a liaison between students and the staff.",
		category: "Achievements & Leadership",
	},

	// Certifications
	{
		name: "Supervised Machine Learning: Regression and Classification – DeepLearning.AI",
		category: "Certifications",
	},
	{ name: "Programming with JavaScript – Meta", category: "Certifications" },
	{ name: "AWS Cloud Training – Amazon Web Services (AWS)", category: "Certifications" },
	{
		name: "SQL for Data Science – University of California, Davis",
		category: "Certifications",
	},
	{
		name: "Introduction to Artificial Intelligence (AI) – IBM",
		category: "Certifications",
	},
	{
		name: "Fundamentals of Digital Marketing – Google Digital Garage",
		category: "Certifications",
	},
	{ name: "GitHub Foundations – GitHub", category: "Certifications" },

	{
		name: "Walmart USA - Advanced Software Engineering (Virtual) – Walmart USA",
		category: "Certifications",
	},
	{ name: "Agile Project Management – HP", category: "Certifications" },
];

export default function HighlightsSection() {
	const categories = ["Certifications", "Achievements & Leadership", "Awards"];

	return (
		<section id="highlights" className="py-32 px-6 relative">
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
				>
					Highlights
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-8">
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
								{highlights
									.filter((item) => item.category === category)
									.map((item, index) => (
										<span
											key={index}
											className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300 text-center max-w-xs"
										>
											{item.name}
										</span>
									))}
							</div>
						</motion.div>
					))}
				</div>

				{/* LinkedIn link */}
				<p className="text-center mt-12 text-white/70">
					All certifications are displayed on my{" "}
					<a
						href="https://www.linkedin.com/in/mohamed-asry-402a4b241/details/certifications/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-400 hover:underline"
					>
						LinkedIn profile (click here)
					</a>
				</p>
			</div>
		</section>
	);
}
