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
	const categories = [
		{ key: "Certificates", icon: "🎓" },
		{ key: "Awards", icon: "🏆" },
		{ key: "Achievements", icon: "⭐" },
		{ key: "Leadership", icon: "👑" },
	];

	// pick top 3 items for each category from the highlights data
	const itemsByCategory = (cat: string) =>
		highlights.filter((h) => {
			// normalize some category names
			if (cat === "Certificates") return h.category.toLowerCase().includes("certif");
			if (cat === "Leadership") return h.category.toLowerCase().includes("leadership");
			if (cat === "Achievements") return h.category.toLowerCase().includes("achievement");
			if (cat === "Awards") return h.category.toLowerCase().includes("award");
			return h.category === cat;
		})
		.slice(0, 3);

	return (
		<section
			id="highlights"
			className="py-24 px-6 relative overflow-hidden"
			aria-label="Highlights: Certificates, Awards, Achievements, Leadership"
		>
			{/* subtle background gradient overlay */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/60 to-white/0 pointer-events-none" />

			<div className="container mx-auto max-w-6xl">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 text-center mb-12 tracking-tight"
				>
					Highlights
				</motion.h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{categories.map(({ key, icon }) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.45 }}
							className="relative bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
									<span className="text-2xl" aria-hidden>
										{icon}
									</span>
									<span>{key}</span>
								</h3>
								<span className="text-sm font-medium text-yellow-500">&nbsp;</span>
							</div>

							<div className="space-y-3">
								{itemsByCategory(key).map((item, idx) => (
									<div
										key={idx}
										className="flex items-start gap-3 bg-white dark:bg-slate-800/40 rounded-lg p-3 border-l-4 border-yellow-300/70 hover:shadow-lg transition-shadow duration-250"
									>
										<div className="flex-shrink-0 mt-1 text-xl">✔️</div>
										<div className="text-sm text-slate-800 dark:text-slate-200">
											{item.name}
										</div>
									</div>
								))}
							</div>

							<div className="mt-5 flex justify-end">
								<a
									href="#"
									className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-sky-100 to-white text-slate-900 border border-slate-200 hover:from-sky-50 hover:to-white/80 shadow-sm hover:shadow-yellow-200/20 transition-all"
								>
									View More
								</a>
							</div>
						</motion.div>
					))}
				</div>

				<p className="text-center mt-8 text-slate-600 text-sm">
					Want to see everything? Check my LinkedIn for full certifications and awards.
					<a
						href="https://www.linkedin.com/in/mohamed-asry-402a4b241/details/certifications/"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-2 font-medium text-sky-600 hover:underline"
					>
						LinkedIn
					</a>
				</p>
			</div>
		</section>
	);
}
