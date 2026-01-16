"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Briefcase,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Target,
  Zap,
} from "lucide-react";
import { Container, Button, Badge, Card, CardContent } from "@/components/ui";

const sampleProfile = {
  name: "Elif Demir",
  type: "ENFJ - Ilham Veren Lider",
  avatar: "E",
  topMatches: [
    { job: "UX/UI Tasarimci", match: 94, trend: "up" },
    { job: "Proje Yoneticisi", match: 89, trend: "up" },
    { job: "Egitim Danismani", match: 87, trend: "stable" },
    { job: "Icerik Stratejisti", match: 82, trend: "up" },
  ],
  skills: [
    { name: "Yaratici Dusunme", score: 95, color: "primary" },
    { name: "Iletisim", score: 92, color: "secondary" },
    { name: "Problem Cozme", score: 88, color: "accent" },
    { name: "Liderlik", score: 85, color: "primary" },
    { name: "Analitik", score: 78, color: "secondary" },
  ],
  interests: ["Tasarim", "Psikoloji", "Teknoloji", "Egitim"],
  aiInsight:
    "Elif'in guclü yaratici düşünme ve iletişim becerileri, insan odaklı tasarım rollerinde öne çıkmasını sağlıyor. UX/UI alanında %94 uyum skoru, hem teknik hem de empatik yeteneklerinin mükemmel bir kesişimini yansıtıyor.",
};

export function SampleResult() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            Ornek Sonuc
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Sonuclariniz Boyle{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Gorunecek
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            AI destekli analizimiz, kisilik profilinizi, yeteneklerinizi ve
            ilgi alanlarinizi detayli sekilde degerlendirir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent>
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                    {sampleProfile.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{sampleProfile.name}</h3>
                    <p className="text-sm text-primary-600">{sampleProfile.type}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-neutral-900 flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-primary-500" />
                    Yetenek Profili
                  </h4>
                  {sampleProfile.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">{skill.name}</span>
                        <span className="font-medium text-neutral-900">{skill.score}%</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full ${
                            skill.color === "primary"
                              ? "bg-gradient-to-r from-primary-500 to-primary-400"
                              : skill.color === "secondary"
                              ? "bg-gradient-to-r from-secondary-500 to-secondary-400"
                              : "bg-gradient-to-r from-accent-500 to-accent-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interests */}
                <div>
                  <h4 className="font-semibold text-neutral-900 flex items-center mb-3">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    Ilgi Alanlari
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sampleProfile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Matches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="gradient" className="h-full">
              <CardContent>
                <h4 className="font-semibold text-white flex items-center mb-6">
                  <Target className="w-5 h-5 mr-2" />
                  En Uygun Meslekler
                </h4>

                <div className="space-y-4">
                  {sampleProfile.topMatches.map((match, index) => (
                    <motion.div
                      key={match.job}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{match.job}</p>
                          <div className="flex items-center text-xs text-white/70">
                            {match.trend === "up" ? (
                              <>
                                <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                                Yukselis trendinde
                              </>
                            ) : (
                              <>
                                <Zap className="w-3 h-3 mr-1 text-yellow-400" />
                                Stabil talep
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{match.match}%</div>
                        <div className="text-xs text-white/70">Uyum</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex items-center text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    250+ meslek analiz edildi
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Insight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent>
                <h4 className="font-semibold text-neutral-900 flex items-center mb-4">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  AI Analiz Ozeti
                </h4>

                <div className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl mb-6">
                  <p className="text-neutral-700 leading-relaxed italic">
                    &ldquo;{sampleProfile.aiInsight}&rdquo;
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-medium text-neutral-900">Onerilen Aksiyonlar</h5>
                  {[
                    "UX/UI tasarim egitimlerine katil",
                    "Portfolio olustur ve GitHub'a yukle",
                    "Tasarim toplukluklarina katil",
                    "Staj basvurularini baslat",
                  ].map((action, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-green-700">{index + 1}</span>
                      </div>
                      <p className="text-sm text-neutral-700">{action}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Kendi Sonuclarini Gor
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
