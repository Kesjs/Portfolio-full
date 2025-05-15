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
  BarChart 
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Développement Front-end",
    icon: <Laptop className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Développement Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Flutter", "iOS", "Android", "Responsive Design"],
  },
  {
    title: "Design UI/UX",
    icon: <Palette className="h-6 w-6" />,
    skills: ["Figma", "Adobe XD", "Design System", "Wireframing", "Prototyping"],
  },
  {
    title: "Backend & Bases de données",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Vercel", "Netlify", "CI/CD", "Docker", "Git"],
  },
  {
    title: "Analytics & SEO",
    icon: <BarChart className="h-6 w-6" />,
    skills: ["Google Analytics", "SEO", "Performance Web", "Lighthouse", "A/B Testing"],
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
                      <Badge key={skill} variant="secondary">
                        {skill}
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