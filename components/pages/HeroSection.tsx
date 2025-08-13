// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { MapPin, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
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
                        width={800}
                        height={800}
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
              <a href="/224015E_Asry.pdf" download>
                <Button
                  size="lg"
                  className="shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
              </a>
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
  );
}
