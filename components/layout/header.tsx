"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Import d'autres icônes pour toggle
import { Grid, Circle } from "lucide-react"; // Exemple : grille pour ouvrir, cercle pour fermer

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Projets", href: "/projets" },
  { title: "À propos", href: "/a-propos" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const hoverColors = [
    "hover:text-purple-500",
    "hover:text-orange-500",
    "hover:text-pink-500",
    "hover:text-blue-500",
  ];

  return (
    <header
      className={cn(
        "sticky p-3 top-0 z-40 w-full transition-all duration-300 flex justify-center border-1",
        isScrolled ? "backdrop-blur-lg shadow" : "bg-transparent fixed border-0"
      )}
    >
      <div className="w-full max-w-[850px] px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo toujours visible, à gauche */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-1 font-semibold text-primary transition hover:bg-muted/50"
          aria-label="Accueil Ken kennedy"
        >
          <Shield className="h-5 w-5" />
          <span className="hidden sm:inline text-sm text-blue-500">Ken kennedy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          {navItems.map((item, index) => (
           <Link
    key={item.href}
    href={item.href}
    className={cn(
      "text-sm font-medium rounded-md transition-all duration-200 px-3 py-2", // padding horizontal fixe 12px (px-3 = 0.75rem = 12px)
      pathname === item.href ? "text-foreground" : "text-muted-foreground",
      hoverColors[index],
      "hover:bg-white/20"
    )}
  >
    {item.title}
  </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          {/* Boutons à droite */}
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="z-50"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <Circle className="h-6 w-6" /> : <Grid className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu mobile animé qui pousse les éléments vers la droite */}
      <AnimatePresence>
  {isOpen && (
    <motion.nav
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md border-l border-white/20 text-white flex flex-col items-center pt-20 space-y-6 shadow-lg z-40"
    >
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-base font-medium px-6 py-2 rounded-xl transition-colors duration-200 hover:bg-white/10",
            pathname === item.href ? "text-white" : "text-white/80",
            hoverColors[index]
          )}
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </motion.nav>
  )}
</AnimatePresence>

      </div>
    </header>
  );
}
