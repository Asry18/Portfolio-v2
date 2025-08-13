// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
	return (
		<section id="about" className="py-32 px-6 relative">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8">
						About Me
					</h2>
					<div className="max-w-4xl mx-auto">
						<p className="text-xl text-white/80 leading-relaxed mb-8">
							A passionate problem solver and tech enthusiast with foundational
							programming knowledge in C, TypeScript, JavaScript, Java, and Python. Have a
							basic understanding of solid principles and am actively improving my time
							management and attention to detail. I am seeking a Software Engineering
							Internship to further develop my technical abilities and contribute to
							impactful projects.
						</p>

						<div className="grid md:grid-cols-3 gap-8">
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<div className="text-3xl font-bold text-purple-400 mb-2">19+</div>
									<div className="text-white/70">Certifications</div>
								</CardContent>
							</Card>

							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<div className="text-3xl font-bold text-pink-400 mb-2">3/3</div>
									<div className="text-white/70">Dean's List Awards</div>
								</CardContent>
							</Card>

							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<div className="text-3xl font-bold text-blue-400 mb-2">3.9</div>
									<div className="text-white/70">Current GPA</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
