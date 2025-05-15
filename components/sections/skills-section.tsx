"use client";

import React from "react";
import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  Smartphone,
  Palette,
  Database,
  Cloud,
  BarChart,
} from "lucide-react";

interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Développement Front-end",
    icon: <Laptop className="h-6 w-6" />,
    skills: [
      { name: "React", image: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", image: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "TypeScript", image: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "HTML/CSS", image: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vue.js", image: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    ],
  },
  {
    title: "Développement Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "React Native", image: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Flutter", image: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "iOS", image: "https://cdn.simpleicons.org/apple/000000" },
      { name: "Android", image: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "Responsive Design", image: "https://cdn.simpleicons.org/css3/1572B6" },
    ],
  },
  {
    title: "Design UI/UX",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "Figma", image: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Adobe XD", image: "https://cdn.simpleicons.org/adobexd/FF61F6" },
      { name: "Design System", image: "https://cdn.simpleicons.org/sketch/F7B500" },
      { name: "Wireframing", image: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Prototyping", image: "https://cdn.simpleicons.org/figma/F24E1E" },
    ],
  },
  {
    title: "Backend & Bases de données",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", image: "https://cdn.simpleicons.org/express/000000" },
      { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Firebase", image: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "GraphQL", image: "https://cdn.simpleicons.org/graphql/E10098" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "AWS", image: "https://cdn.simpleicons.org/amazonaws/232F3E" },
      { name: "Vercel", image: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Netlify", image: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "CI/CD", image: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Docker", image: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", image: "https://cdn.simpleicons.org/git/F05032" },
    ],
  },
  {
    title: "Analytics & SEO",
    icon: <BarChart className="h-6 w-6" />,
    skills: [
      { name: "Google Analytics", image: "https://cdn.simpleicons.org/googleanalytics/F4B400" },
      { name: "SEO", image: "https://cdn.simpleicons.org/yoast/FF0000" },
      { name: "Performance Web", image: "https://cdn.simpleicons.org/lighthouse/4285F4" },
      { name: "Lighthouse", image: "https://cdn.simpleicons.org/lighthouse/4285F4" },
      { name: "A/B Testing", image: "https://cdn.simpleicons.org/optimizely/652CD3" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Compétences</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Un aperçu des technologies et outils que j'utilise quotidiennement pour créer des expériences numériques exceptionnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 rounded-md bg-primary/10 p-2 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-2 px-2 py-1"
                      >
                        <img src={skill.image} alt={skill.name} className="h-4 w-4" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
