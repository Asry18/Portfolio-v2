"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export default function ContactSection() {
	return (
		<section id="contact" className="py-32 px-6 bg-black/10 backdrop-blur-3xl relative">
			<div className="container mx-auto max-w-4xl text-center">
				<motion.div
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8">
						Let's Work Together
					</h2>
					<p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
						Ready to bring your next project to life? I'm always excited to collaborate on
						innovative solutions and cutting-edge applications.
					</p>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className="grid md:grid-cols-3 gap-6 mb-12"
					>
						<motion.div variants={fadeInUp}>
							<a href="mailto:asryamaz000@gmail.com">
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
									<CardContent className="p-6 text-center">
										<Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
										<div className="text-white font-semibold">Email</div>
										<div className="text-white/70 text-sm">asryamaz000@gmail.com</div>
									</CardContent>
								</Card>
							</a>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<a href="https://github.com/Asry18">
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
									<CardContent className="p-6 text-center">
										<Github className="h-8 w-8 text-purple-400 mx-auto mb-4" />
										<div className="text-white font-semibold">GitHub</div>
										<div className="text-white/70 text-sm">@Asry18</div>
									</CardContent>
								</Card>
							</a>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<a href="https://www.linkedin.com/in/mohamed-asry-402a4b241/">
								<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
									<CardContent className="p-6 text-center">
										<Linkedin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
										<div className="text-white font-semibold">LinkedIn</div>
										<div className="text-white/70 text-sm">@Mohamed Asry</div>
									</CardContent>
								</Card>
							</a>
						</motion.div>
					</motion.div>

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
	);
}
