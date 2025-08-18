"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, User, MessageSquare, Send } from "lucide-react";

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	animate: {
		transition: { staggerChildren: 0.15 },
	},
};

export default function ContactSection() {
	const [showForm, setShowForm] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleButtonClick = () => setShowForm(true);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const form = e.currentTarget;
		const formData = {
			name: (form.elements.namedItem("name") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
		};

		try {
			const res = await fetch("http://localhost:5000/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json().catch(() => null);

			if (res.ok) {
				alert("Email sent successfully!");
				form.reset();
				setShowForm(false);
			} else {
				alert(data?.error || "Failed to send email");
			}
		} catch (err) {
			console.error(err);
			alert("Error sending email");
		} finally {
			setLoading(false);
		}
	};

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
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
								<CardContent className="p-6 text-center">
									<Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">Email</div>
									<div className="text-white/70 text-sm">asryamaz000@gmail.com</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<Github className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">GitHub</div>
									<div className="text-white/70 text-sm">@Asry18</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
								<CardContent className="p-6 text-center">
									<Linkedin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
									<div className="text-white font-semibold">LinkedIn</div>
									<div className="text-white/70 text-sm">@Mohamed Asry</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>

					<Button
						size="lg"
						onClick={handleButtonClick}
						className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl text-lg px-12 py-6 transform hover:scale-105 transition-all duration-300 mb-6"
					>
						<Mail className="mr-3 h-6 w-6" />
						Start a Conversation
					</Button>

					{showForm && (
						<motion.form
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mt-8 max-w-xl mx-auto bg-form-background backdrop-blur-xl p-8 rounded-3xl border border-form-border shadow-glass-strong"
							onSubmit={handleSubmit}
						>
							<div className="space-y-6">
								{/* Name Field */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1, duration: 0.5 }}
									className="relative group"
								>
									<div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-form-placeholder group-focus-within:text-white transition-colors duration-300">
										<User className="w-5 h-5" />
									</div>
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
										required
									/>
								</motion.div>

								{/* Email Field */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									className="relative group"
								>
									<div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-form-placeholder group-focus-within:text-white transition-colors duration-300">
										<Mail className="w-5 h-5" />
									</div>
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
										required
									/>
								</motion.div>

								{/* Message Field */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="relative group"
								>
									<div className="absolute left-4 top-6 text-form-placeholder group-focus-within:text-white transition-colors duration-300">
										<MessageSquare className="w-5 h-5" />
									</div>
									<textarea
										name="message"
										placeholder="Your Message"
										className="w-full px-4 py-3 pl-12 min-h-[120px] rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
										rows={5}
										required
									/>
								</motion.div>

								{/* Submit Button */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4, duration: 0.5 }}
								>
									<Button
										type="submit"
										className="w-full py-4 text-lg font-semibold relative overflow-hidden group"
										disabled={loading}
									>
										<div className="flex items-center justify-center gap-3">
											{loading ? (
												<motion.div
													animate={{ rotate: 360 }}
													transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
													className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
												/>
											) : (
												<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
											)}
											<span>{loading ? "Sending..." : "Send Message"}</span>
										</div>
									</Button>
								</motion.div>
							</div>
						</motion.form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
