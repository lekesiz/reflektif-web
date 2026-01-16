"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList,
  Brain,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Soruları Yanıtla",
    description:
      "Kişilik, yetenek ve ilgi alanlarınızı ölçen bilimsel temelli soruları yanıtlayın. Testlerimiz Holland RIASEC ve Big Five metodolojilerine dayanır.",
    duration: "15-20 dakika",
    features: [
      "Kişilik envanteri",
      "Yetenek testleri",
      "İlgi alanı analizi",
    ],
    color: "primary",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analiz Etsin",
    description:
      "Gelişmiş yapay zeka algoritmamız cevaplarınızı analiz eder, 250+ meslek ve binlerce veri noktasıyla karşılaştırır.",
    duration: "Anlık sonuç",
    features: [
      "Derin öğrenme modelleri",
      "10.000+ kullanıcı verisi",
      "Sürekli iyileştirme",
    ],
    color: "secondary",
  },
  {
    number: "03",
    icon: Target,
    title: "Eşleşmelerini Gör",
    description:
      "Kişilik profilinize, yeteneklerinize ve tutkularınıza en uygun meslekleri ve kariyer yollarını keşfet.",
    duration: "Detaylı rapor",
    features: [
      "Meslek eşleştirme",
      "Uyum yüzdeleri",
      "Kariyer yol haritası",
    ],
    color: "accent",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Harekete Geç",
    description:
      "Kişiselleştirilmiş kariyer yol haritanız, eğitim önerileri ve aksiyon planıyla geleceğine adım at.",
    duration: "Sürekli destek",
    features: [
      "Eğitim önerileri",
      "Beceri geliştirme planı",
      "Mentor eşleştirme",
    ],
    color: "primary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-600",
    border: "border-primary-200",
    gradient: "from-primary-500 to-primary-600",
  },
  secondary: {
    bg: "bg-secondary-100",
    text: "text-secondary-600",
    border: "border-secondary-200",
    gradient: "from-secondary-500 to-secondary-600",
  },
  accent: {
    bg: "bg-accent-100",
    text: "text-accent-600",
    border: "border-accent-200",
    gradient: "from-accent-500 to-accent-600",
  },
};

export function HowItWorks() {
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
          <Badge variant="secondary" size="lg" className="mb-6">
            Basit 4 Adım
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Nasıl{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Çalışır?
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Kariyer yolculuğunuzu başlatmak için sadece birkaç adım yeterli.
            AI destekli platformumuz sizin için en uygun meslekleri belirler.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neutral-200 to-transparent z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 mt-2`}
                  >
                    <step.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium mb-4`}>
                    {step.duration}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/kayit">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Hemen Başla - Ücretsiz
            </Button>
          </Link>
          <p className="text-sm text-neutral-500 mt-4">
            Kredi kartı gerektirmez. Temel testler tamamen ücretsiz.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
