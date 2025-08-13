"use client";

import { motion } from "framer-motion";

export default function Navigation() {
	return (
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
	);
}
