"use client";

import React from "react";
import Link from "next/link";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Comment j'ai optimisé le temps de chargement de mon site de 6s à moins d'1s",
    excerpt: "Découvrez les techniques que j'ai utilisées pour améliorer significativement les performances de mon site web.",
    date: "15 juin 2025",
    category: "Performance",
    readTime: "8 min",
    slug: "/blog/optimization-techniques",
  },
  {
    id: "post-2",
    title: "Guide complet sur les animations en React avec Framer Motion",
    excerpt: "Apprenez à créer des animations fluides et interactives dans vos applications React grâce à Framer Motion.",
    date: "2 juin 2025",
    category: "React",
    readTime: "12 min",
    slug: "/blog/react-animations",
  },
  {
    id: "post-3",
    title: "Créer un design system évolutif pour votre projet",
    excerpt: "Les principes fondamentaux pour concevoir un design system qui peut évoluer avec votre produit.",
    date: "28 mai 2025",
    category: "Design",
    readTime: "10 min",
    slug: "/blog/design-system",
  },
];

export function BlogSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Blog</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Mes réflexions sur le développement, le design et les tendances technologiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <Link href={post.slug} className="hover:underline">
                    <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime} de lecture</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={post.slug}>
                        Lire l'article
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}