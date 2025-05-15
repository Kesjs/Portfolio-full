"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ScrollDownIndicator } from "../ui/ScrollDownIndicator";

const name = "ken kennedy";

export function HeroSection() {
  // Animation de chaque lettre : apparition en fondu + translation y
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="container relative px-4 py-24 md:px-8 md:py-32 min-h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-5xl w-full">
        {/* Texte à gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left md:max-w-lg flex flex-col items-center md:items-start"
        >
          <div className="flex items-center justify-center mb-4 text-2xl font-semibold gap-2">
            <motion.span
              animate={{
                rotate: [0, 20, -10, 10, -5, 5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="inline-block origin-bottom"
            >
              👋
            </motion.span>
            <h1 className="mb-0 text-2xl font-bold leading-tight tracking-tight md:text-2xl">
              <span className="block mb-2">
                I&apos;m{" "}
                <motion.span
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-blue-500"
                >
                  {name.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={child}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>
          </div>

          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
  Je crée des sites et applis modernes, performants et intuitifs.  
  Polyvalent, je maîtrise tout le cycle de développement pour booster vos projets.
</p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/projets">
                Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden text-white transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </span>

              {/* Effet de remplissage */}
              <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        {/* Animation Lottie à droite */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0 w-full max-w-[300px] mx-auto md:ml-8 h-[300px]"
        >
          <DotLottieReact
            src="https://lottie.host/f3f3deef-bdf0-472f-a2eb-cd068b228c7b/e33G5DmHvg.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <ScrollDownIndicator />
    </section>
  );
}
