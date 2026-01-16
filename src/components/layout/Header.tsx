"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  Accessibility,
} from "lucide-react";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

const moduleIcons: Record<string, React.ReactNode> = {
  "/moduller/ogrenci": <GraduationCap className="w-5 h-5" />,
  "/moduller/universite": <Building2 className="w-5 h-5" />,
  "/moduller/kariyer": <TrendingUp className="w-5 h-5" />,
  "/moduller/ik": <Users className="w-5 h-5" />,
  "/moduller/kurum": <School className="w-5 h-5" />,
  "/moduller/engelli-mesleki-eslestirme": <Accessibility className="w-5 h-5" />,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span
              className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-neutral-900" : "text-neutral-900"
              )}
            >
              Reflektif
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isScrolled
                          ? "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                          : "text-neutral-700 hover:text-primary-600 hover:bg-white/50"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-3 hover:bg-primary-50 transition-colors"
                            >
                              <span className="text-primary-500 mr-3">
                                {moduleIcons[child.href]}
                              </span>
                              <span className="text-sm font-medium text-neutral-700">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary-600 bg-primary-50"
                        : isScrolled
                        ? "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-white/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/giris">
              <Button variant="ghost" size="sm">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/kayit">
              <Button variant="primary" size="sm">
                Ücretsiz Başla
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-neutral-700 hover:bg-primary-50"
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center px-4 py-2 rounded-lg text-neutral-600 hover:bg-primary-50"
                                >
                                  <span className="text-primary-500 mr-3">
                                    {moduleIcons[child.href]}
                                  </span>
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg font-medium",
                          pathname === item.href
                            ? "text-primary-600 bg-primary-50"
                            : "text-neutral-700 hover:bg-primary-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-neutral-100 space-y-2">
                  <Link href="/giris" className="block">
                    <Button variant="outline" size="md" className="w-full">
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link href="/kayit" className="block">
                    <Button variant="primary" size="md" className="w-full">
                      Ücretsiz Başla
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
