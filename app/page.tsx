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
import HeroSection from "@/components/pages/HeroSection";
import AboutSection from "@/components/pages/AboutSection";

import { useEffect, useState } from "react";
import ProjectsSection from "@/components/pages/ProjectSection";
import SkillsSection from "@/components/pages/SkillSection";

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
			title: " Garage24",
			description:
				" The responsive garage management system that lets customers track vehicle status, view invoices, and make payments, while staff manage appointments, generate reports, and communicate with customers in real time.",
			image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
			technologies: ["React", "Node.js", "Express.js", "MongoDB", "MUI"],
			github: "#",
			live: "#",
			featured: true,
		},
		{
			title: "UniConnect",
			description:
				"A centralized web platform to streamline communication between students, lecturers, and administrators. Include appointment scheduling with lecturers, ticket submission for administrative issues, and announcement publishing.",
			image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
			technologies: ["Next.js (Frontend & Backend)", "Tailwind CSS", "MUI", "MongoDB"],
			github: "#",
			live: "#",
			featured: true,
		},
		{
			title: "Spirit11 Fantasy Cricket League",
			description: "A cricket league platform where users manage teams.",
			image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
			technologies: ["MongoDB", "Express.js", "React", "Node.js", "shadcn UI"],
			github: "#",
			live: "#",
			featured: false,
		},
		{
			title: "URL Shortener",
			description:
				"Created a URL shortener using Flask and MySQL with unique hashing and link usage tracking.",
			image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
			technologies: ["Flask", "MySQL", "REST APIs"],
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

			<HeroSection />
			{/* About Section */}
			<AboutSection />

			{/* Projects Section */}

			<ProjectsSection />
			{/* Skills Section */}
			<SkillsSection />

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
									<div className="text-white/70 text-sm">asryamaz000@gmail.com</div>
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
							Mohamed Asry
						</div>
						<div className="text-white/60">
							Crafting digital experiences • Building the future
						</div>
					</div>
					<div className="text-white/40 text-sm">
						© 2025 Mohamed Asry. Designed & built with passion using Next.js, Tailwind
						CSS, and Framer Motion.
					</div>
				</div>
			</footer>
		</div>
	);
}
