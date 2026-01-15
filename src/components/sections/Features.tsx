"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Heart,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";
import { Container, Card, CardContent } from "@/components/ui";

const features = [
  {
    icon: Brain,
    title: "AI Destekli Analiz",
    description:
      "Gelismis yapay zeka algoritmalariyla kisilik, yetenek ve ilgi alanlarinizi derinlemesine analiz edin.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Hassas Eslestirme",
    description:
      "250+ meslek ve binlerce veri noktasiyla size en uygun kariyer yollarini kesfetmenizi saglariz.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Hobi-Meslek Uyumu",
    description:
      "Tutkulariniz ve hobilerinizle uyumlu meslekleri kesfederek anlamli bir kariyer insaa edin.",
    color: "accent",
  },
  {
    icon: LineChart,
    title: "Detayli Raporlama",
    description:
      "Profesyonel PDF raporlar, interaktif dashboard ve zaman icinde gelisim takibi.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "KVKK Uyumlu",
    description:
      "Verileriniz AES-256 ile sifrelenir, KVKK kapsaminda korunur ve asla ucuncu taraflarla paylasilmaz.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Hizli Sonuclar",
    description:
      "15-20 dakikalik testler, aninda AI analizi ve kisisellestirilmis kariyer onerileri.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-600",
    gradient: "from-primary-500 to-primary-600",
  },
  secondary: {
    bg: "bg-secondary-100",
    text: "text-secondary-600",
    gradient: "from-secondary-500 to-secondary-600",
  },
  accent: {
    bg: "bg-accent-100",
    text: "text-accent-600",
    gradient: "from-accent-500 to-accent-600",
  },
};

export function Features() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Neden{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Reflektif?
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Modern teknoloji ve bilimsel metodolojileri birlestirerek kariyer
            yolculugunuzda size rehberlik ediyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="bordered" hover className="h-full">
                  <CardContent>
                    <div
                      className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
                    >
                      <feature.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
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
