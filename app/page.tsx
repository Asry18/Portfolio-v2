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
import CertificationsSection from "@/components/pages/Certifiactions";

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

	return (
		<div
			className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden"
			id="top"
		>
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

			<CertificationsSection />
			{/* Contact Section */}
			<ContactSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}
