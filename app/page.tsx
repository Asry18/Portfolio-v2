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
import ContactSection from "@/components/pages/ContactSection";
import Footer from "@/components/pages/FooterSection";
import Navigation from "@/components/pages/Navigation";

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
			<Navigation />
			{/* Hero Section */}

			<HeroSection />
			{/* About Section */}
			<AboutSection />

			{/* Projects Section */}

			<ProjectsSection />
			{/* Skills Section */}
			<SkillsSection />

			{/* Contact Section */}
			<ContactSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
