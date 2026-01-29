"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  ArrowRight,
  Accessibility,
} from "lucide-react";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { modules } from "@/data/modules";

const moduleIcons: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  Accessibility,
};

const colorClasses: Record<string, { bg: string; badge: string; button: string }> = {
  primary: {
    bg: "bg-primary-50",
    badge: "primary",
    button: "primary",
  },
  secondary: {
    bg: "bg-secondary-50",
    badge: "secondary",
    button: "secondary",
  },
  accent: {
    bg: "bg-accent-50",
    badge: "accent",
    button: "accent",
  },
  success: {
    bg: "bg-green-50",
    badge: "primary",
    button: "primary",
  },
};

export function Modules() {
  const displayedModules = modules.filter(m => m.id !== 'universite');

  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Her İhtiyaca Uygun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Çözümler
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Öğrenciden profesyonele, bireyden kuruma herkes için özel
            tasarlanmış modüller.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedModules.map((module, index) => {
            const Icon = moduleIcons[module.icon];
            const colors = colorClasses[module.color];

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="h-full flex flex-col">
                  <CardContent className="flex-1 flex flex-col">
                    <div className={`w-full ${colors.bg} rounded-xl p-6 mb-6`}>
                      <Icon className="w-12 h-12 text-primary-600 mb-4" />
                      <Badge variant={colors.badge as "primary" | "secondary" | "accent"} size="sm">
                        {module.title}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {module.name}
                    </h3>
                    <p className="text-neutral-600 mb-4 flex-1">
                      {module.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {module.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-center text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                          {feature.title}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/moduller/${module.slug}`} className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Detaylı İncele
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
