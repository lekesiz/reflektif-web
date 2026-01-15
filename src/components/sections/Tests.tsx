"use client";

import Link from "next/link";
import {
  Brain,
  Lightbulb,
  Languages,
  Code,
  Gamepad2,
  Theater,
  ArrowRight,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { testCategories } from "@/data/tests";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Languages: <Languages className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Theater: <Theater className="w-6 h-6" />,
};

const colorClasses: Record<string, { bg: string; text: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary-600",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-600",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-600",
  },
};

export function Tests() {
  return (
    <section className="py-20 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            30+ Test ve Değerlendirme
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Kapsamlı Test Kütüphanesi
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Kişilik envanterinden teknik testlere, oyun tabanlı değerlendirmeden
            simülasyonlara kadar geniş test yelpazesi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCategories.map((category) => {
            const colors = colorClasses[category.color] || colorClasses.primary;
            return (
              <Link key={category.id} href={`/testler/${category.slug}`}>
                <Card
                  variant="bordered"
                  hover
                  className="h-full group cursor-pointer"
                >
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {iconMap[category.icon]}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Detayları Gör
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/testler">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Tüm Testleri Keşfet
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
