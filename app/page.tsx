"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowDown,
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Download,
	MapPin,
	Calendar,
	Award,
	Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypeAnimation } from "react-type-animation";

import { useEffect, useState } from "react";

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

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
	const [left, setLeft] = useState<number | null>(null);

	useEffect(() => {
		// Generate a random left position (0% to 100%) only on client
		const randomLeft = Math.random() * 100;
		setLeft(randomLeft);
	}, []);

	if (left === null) return null; // Avoid hydration mismatch

	return (
		<motion.div
			className="absolute top-0 w-[1px] h-[1px] bg-white rounded-full opacity-70"
			style={{
				left: `${left}%`,
			}}
			initial={{ y: "-5vh", opacity: 0 }}
			animate={{ y: "105vh", opacity: 1 }}
			transition={{
				duration: 5,
				delay,
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
			}}
		/>
	);
};

export default function Portfolio() {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 300], [0, -50]);
	const y2 = useTransform(scrollY, [0, 300], [0, -100]);

	const projects = [
		{
			title: "E-commerce Platform",
			description:
				"A sophisticated full-stack e-commerce solution featuring AI-powered recommendations, real-time inventory management, and advanced analytics dashboard.",
			image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
			technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "AI/ML"],
			github: "#",
			live: "#",
			featured: true,
		},
		{
			title: "Task Management Suite",
			description:
				"Enterprise-grade project management platform with real-time collaboration, advanced reporting, and seamless integrations.",
			image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
			technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
			github: "#",
			live: "#",
			featured: true,
		},
		{
			title: "Weather Intelligence Hub",
			description:
				"Advanced weather analytics platform with ML-powered forecasting, interactive maps, and climate data visualization.",
			image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
			technologies: ["Vue.js", "D3.js", "Python", "TensorFlow", "AWS"],
			github: "#",
			live: "#",
			featured: false,
		},
		{
			title: "Financial Dashboard",
			description:
				"Real-time financial analytics platform with portfolio tracking, risk assessment, and automated reporting capabilities.",
			image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
			technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
			github: "#",
			live: "#",
			featured: false,
		},
	];

	const skills = [
		{ name: "JavaScript", level: 95, category: "Frontend" },
		{ name: "TypeScript", level: 90, category: "Frontend" },
		{ name: "React", level: 95, category: "Frontend" },
		{ name: "Next.js", level: 90, category: "Frontend" },
		{ name: "Vue.js", level: 85, category: "Frontend" },
		{ name: "Node.js", level: 90, category: "Backend" },
		{ name: "Python", level: 85, category: "Backend" },
		{ name: "PostgreSQL", level: 88, category: "Database" },
		{ name: "MongoDB", level: 85, category: "Database" },
		{ name: "AWS", level: 80, category: "DevOps" },
		{ name: "Docker", level: 85, category: "DevOps" },
		{ name: "Git", level: 95, category: "Tools" },
	];

	const achievements = [
		{ icon: Award, title: "Tech Innovation Award", year: "2024" },
		{ icon: Star, title: "Top Contributor", year: "2023" },
		{ icon: Calendar, title: "5+ Years Experience", year: "2019-2024" },
	];

	return (
		<div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
			{/* Floating Particles */}
			<div className="fixed inset-0 pointer-events-none">
				{Array.from({ length: 20 }).map((_, i) => (
					<FloatingParticle key={i} delay={i * 0.5} />
				))}
			</div>

			{/* Animated Background Elements */}
			<motion.div
				style={{ y: y1 }}
				className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
			/>
			<motion.div
				style={{ y: y2 }}
				className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
			/>

			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-black/10 backdrop-blur-2xl z-50 border-b border-white/5">
				<div className="container mx-auto px-6 py-4 flex justify-between items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
					>
						Mohamed Asry
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="hidden md:flex space-x-8"
					>
						{["About", "Projects", "Skills", "Contact"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="text-white/70 hover:text-white transition-all duration-300 relative group"
							>
								{item}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
							</a>
						))}
					</motion.div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center px-6 pt-20">
				<div className="container mx-auto max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
					>
						{/* Left Column - Profile Image */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="flex justify-center lg:justify-end order-2 lg:order-1"
						>
							<div className="relative">
								{/* Glow Effect */}
								<div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

								{/* Rotating Border */}
								<div className="relative w-80 h-80 lg:w-96 lg:h-96">
									<div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full animate-spin-slow p-1">
										<div className="w-full h-full bg-slate-950 rounded-full p-4">
											{/* Profile Image Placeholder */}
											<div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
												<Image
													src="/profile.png"
													alt="Profile"
													width={800} // set width according to your needs
													height={800} // set height accordingly
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right Column - Content */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-center lg:text-left order-1 lg:order-2 space-y-8"
						>
							{/* Main Heading */}
							<div className="space-y-4">
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
								>
									<span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
										Mohamed
									</span>
									<br />
									<span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
										Asry
									</span>
								</motion.h1>

								{/* Animated Role */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 }}
									className="text-xl md:text-2xl lg:text-3xl text-purple-200 font-medium min-h-[2.5rem] flex items-center justify-center lg:justify-start"
								>
									<TypeAnimation
										sequence={[
											"Full Stack Engineer 🚀",
											2000,
											"Creative Problem Solver 🎨",
											2000,
											"Tech Visionary 🔮",
											2000,
										]}
									/>
								</motion.div>
							</div>

							{/* Location and Status */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-purple-300"
							>
								<div className="flex items-center gap-2">
									<MapPin className="h-5 w-5 text-purple-400" />
									<span>Balapitiya, Sri Lanka</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
									<span className="text-green-300">Available for work</span>
								</div>
							</motion.div>

							{/* CTA Buttons */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1 }}
								className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
							>
								<Button
									size="lg"
									className="shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
								>
									<Download className="h-5 w-5" />
									Download CV
								</Button>
								<Button variant="outline" size="lg" className="hover:bg-purple-500/10">
									<Github className="h-5 w-5" />
									GitHub
								</Button>
								<Button variant="outline" size="lg" className="hover:bg-blue-500/10">
									<Linkedin className="h-5 w-5" />
									LinkedIn
								</Button>
								<Button variant="outline" size="lg" className="hover:bg-pink-500/10">
									<Mail className="h-5 w-5" />
									Contact
								</Button>
							</motion.div>

							{/* Scroll Indicator */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.5 }}
								className="hidden lg:flex justify-start pt-8"
							>
								<div className="flex flex-col items-center gap-2 text-purple-400">
									<span className="text-sm">Scroll to explore</span>
									<motion.div
										animate={{ y: [0, 8, 0] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
									>
										<div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* About Section */}
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
								I'm a passionate full-stack engineer with over 5 years of experience
								building scalable web applications and leading development teams. I
								specialize in modern JavaScript frameworks, cloud architecture, and
								creating exceptional user experiences that drive business growth.
							</p>
							<div className="grid md:grid-cols-3 gap-8">
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
										<div className="text-white/70">Projects Completed</div>
									</CardContent>
								</Card>
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
										<div className="text-white/70">Happy Clients</div>
									</CardContent>
								</Card>
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
									<CardContent className="p-6 text-center">
										<div className="text-3xl font-bold text-blue-400 mb-2">100K+</div>
										<div className="text-white/70">Lines of Code</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="py-32 px-6 bg-black/10 backdrop-blur-3xl relative"
			>
				<div className="container mx-auto max-w-7xl">
					<motion.h2
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-20"
					>
						Featured Projects
					</motion.h2>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className="grid lg:grid-cols-2 gap-8 mb-16"
					>
						{projects
							.filter((p) => p.featured)
							.map((project, index) => (
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

					{/* Additional Projects Grid */}
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-6"
					>
						{projects
							.filter((p) => !p.featured)
							.map((project, index) => (
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
													<CardTitle className="text-lg text-white mb-2">
														{project.title}
													</CardTitle>
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
													<Button
														variant="ghost"
														size="sm"
														className="text-white/70 hover:text-white p-2"
													>
														<Github className="h-4 w-4" />
													</Button>
													<Button
														variant="ghost"
														size="sm"
														className="text-white/70 hover:text-white p-2"
													>
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

			{/* Skills Section */}
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
								<h3 className="text-xl font-bold text-white mb-6 text-center">
									{category}
								</h3>
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

			{/* Contact Section */}
			<section id="contact" className="py-32 px-6 bg-black/10 backdrop-blur-3xl relative">
				<div className="container mx-auto max-w-4xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8">
							Let's Work Together
						</h2>
						<p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
							Ready to bring your next project to life? I'm always excited to collaborate
							on innovative solutions and cutting-edge applications.
						</p>

						<div className="grid md:grid-cols-3 gap-6 mb-12">
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">Email</div>
									<div className="text-white/70 text-sm">john@example.com</div>
								</CardContent>
							</Card>
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<Github className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">GitHub</div>
									<div className="text-white/70 text-sm">@johndoe</div>
								</CardContent>
							</Card>
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<Linkedin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">LinkedIn</div>
									<div className="text-white/70 text-sm">@john-doe</div>
								</CardContent>
							</Card>
						</div>

						<Button
							size="lg"
							className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl text-lg px-12 py-6 transform hover:scale-105 transition-all duration-300"
						>
							<Mail className="mr-3 h-6 w-6" />
							Start a Conversation
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-3xl">
				<div className="container mx-auto text-center">
					<div className="mb-6">
						<div className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
							John Doe
						</div>
						<div className="text-white/60">
							Crafting digital experiences • Building the future
						</div>
					</div>
					<div className="text-white/40 text-sm">
						© 2024 John Doe. Designed & built with passion using Next.js, Tailwind CSS,
						and Framer Motion.
					</div>
				</div>
			</footer>
		</div>
	);
}
