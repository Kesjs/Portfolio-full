"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  // Ajoute tes projets ici
  {
    id: "project-1",
    title: "Application de finance",
    description: "Suivez facilement vos dépenses et investissements grâce à cette application mobile intuitive, qui vous aide à gérer votre budget au quotidien.",
    imageUrl: "/images/f.png", // chemin local vers ton image
    category: "mobile",
    tags: ["React", "Node Js", "Mysql"],
    link: "https://service-pret.vercel.app",
  },
  {
    id: "project-2",
    title: "Plateforme Cooking Recipe",
    description: "Découvrez et partagez des recettes gourmandes avec cette boutique en ligne qui offre une expérience complète, de la commande au paiement sécurisé.",
    imageUrl: "/images/c.png", // chemin local vers ton image
    category: "web",
    tags: ["React", "Laravel", "Mysql"],
    link: "https://greenyellow-lyrebird-238560.hostingersite.com/",
  },


  {
    id: "project-3",
    title: "Dashboard analytique",
    description: "Interface d'administration pour visualiser et analyser les données de vente et de marketing d'une entreprise.",
    imageUrl: "https://images.pexels.com/photos/7947745/pexels-photo-7947745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    tags: ["Next.js", "Recharts", "Tailwind"],
    link: "/projets/dashboard",
  },
  {
    id: "project-4",
    title: "Application de météo",
    description: "Application permettant de consulter les prévisions météorologiques avec une interface minimaliste et élégante.",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    tags: ["Flutter", "API", "Design"],
    link: "/projets/meteo-app",
  },
];

export function ProjectsSection() {
  const [category, setCategory] = React.useState("all");
  
  const filteredProjects = projects.filter((project) => {
    if (category === "all") return true;
    return project.category === category;
  });

  return (
    <section className="bg-muted/40 py-20">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Mes projets</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Découvrez une sélection de mes travaux récents, allant des applications mobiles aux sites web et interfaces utilisateur.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mx-auto">
            <TabsTrigger value="all" onClick={() => setCategory("all")}>
              Tous
            </TabsTrigger>
            <TabsTrigger value="web" onClick={() => setCategory("web")}>
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => setCategory("mobile")}>
              Mobile
            </TabsTrigger>
            <TabsTrigger value="design" onClick={() => setCategory("design")}>
              Design
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="ml-auto">
                    <Link href={project.link}>
                      Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/projets">
              Voir tous les projets
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}