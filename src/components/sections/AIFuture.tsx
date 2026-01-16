"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  TrendingUp,
  Shield,
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Container, Button, Badge, Card, CardContent } from "@/components/ui";

const riskLevels = [
  {
    level: "Düşük Risk",
    percentage: "0-25%",
    color: "green",
    description: "Yaratıcı, stratejik ve insan ilişkisi gerektiren meslekler",
    examples: ["Psikolog", "Tasarımcı", "Öğretmen", "Avukat"],
  },
  {
    level: "Orta Risk",
    percentage: "25-50%",
    color: "yellow",
    description: "Kısmi otomasyon potansiyeli olan, hibrit beceri gerektiren roller",
    examples: ["Pazarlamacı", "Analist", "Mühendis", "Yönetici"],
  },
  {
    level: "Yüksek Risk",
    percentage: "50-75%",
    color: "orange",
    description: "Rutin görevleri ağırlıklı, otomasyon altında olan meslekler",
    examples: ["Veri Girişi", "Muhasebe", "Müşteri Hizmetleri", "Sekreterlik"],
  },
  {
    level: "Çok Yüksek Risk",
    percentage: "75-100%",
    color: "red",
    description: "Yakın gelecekte büyük ölçüde otomatize edilecek roller",
    examples: ["Kasiyerlik", "Depo İşçilik", "Çağrı Merkezi", "Montaj Hattı"],
  },
];

const colorClasses = {
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    bar: "bg-green-500",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-200",
    bar: "bg-yellow-500",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
    bar: "bg-orange-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
    bar: "bg-red-500",
  },
};

const futureSkills = [
  {
    icon: Lightbulb,
    title: "Yaratıcı Düşünme",
    description: "AI'nin taklit edemeyeceği orijinal fikirler üretme yetisi",
  },
  {
    icon: TrendingUp,
    title: "Adaptasyon",
    description: "Değişen teknolojilere hızla uyum sağlama becerisi",
  },
  {
    icon: Shield,
    title: "Duygusal Zeka",
    description: "İnsan ilişkilerini yönetme ve empati kurma yeteneği",
  },
  {
    icon: Bot,
    title: "AI İşbirliği",
    description: "Yapay zeka araçlarıyla verimli çalışabilme yetkinliği",
  },
];

export function AIFuture() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" size="lg" className="mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Yapay Zeka Çağı
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kariyerin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              AI-Proof
            </span>{" "}
            mu?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Yapay zeka iş piyasasını hızla dönüştürüyor. Bazı meslekler risk
            altındayken, bazıları daha değerli hale geliyor. Senin mesleğin
            hangi kategoride?
          </p>
        </motion.div>

        {/* Risk Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {riskLevels.map((risk, index) => {
            const colors = colorClasses[risk.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={risk.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-5 rounded-2xl border ${colors.border} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                    {risk.level}
                  </span>
                  <span className="text-lg font-bold text-white">{risk.percentage}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-white/10 rounded-full mb-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: risk.percentage.split("-")[1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${colors.bar} rounded-full`}
                  />
                </div>

                <p className="text-sm text-neutral-400 mb-3">{risk.description}</p>

                <div className="flex flex-wrap gap-1">
                  {risk.examples.map((example) => (
                    <span
                      key={example}
                      className="text-xs px-2 py-1 bg-white/10 rounded-md text-neutral-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Future-Proof Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Geleceğe Hazır Beceriler
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {futureSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-sm text-neutral-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-3xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/10">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Kariyer Risk Analizini Yap
              </h3>
              <p className="text-neutral-300 text-sm">
                AI destekli analizimizle mesleğinin gelecekteki durumunu öğren
              </p>
            </div>
            <Link href="/testler/kariyer-risk-analizi">
              <Button
                variant="white"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Ücretsiz Analiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
