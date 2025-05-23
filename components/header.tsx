"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AgenceCréative</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button size="sm">Contactez-nous</Button>
          </div>
        </nav>

        {/* Mobile navigation buttons */}
        <div className="flex items-center space-x-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <div className="space-y-1 px-4 py-3 bg-background text-foreground border-t border-border shadow-md rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-muted ${
                  pathname === item.path
                    ? "bg-muted text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
