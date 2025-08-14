"use client";

export default function Footer() {
	return (
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
					© 2025 Mohamed Asry. Designed & built using Next.js, Tailwind CSS, and Framer
					Motion.
				</div>
			</div>
		</footer>
	);
}
