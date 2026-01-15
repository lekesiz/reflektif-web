"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Turkiye&apos;nin Ilk AI Destekli Platformu
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Kendini Kesfet,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
                Gelecegini Sec
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl">
              AI destekli yetkinlik degerlendirme ve meslek eslestirme platformu
              ile dogru kariyer kararlarini al. Kisiligini, yeteneklerini ve
              tutkularini kesfet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/kayit">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Ucretsiz Basla
                </Button>
              </Link>
              <Button variant="outline" size="lg" leftIcon={<Play className="w-5 h-5" />}>
                Nasil Calisir?
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-neutral-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Ucretsiz temel test
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                15 dakikada sonuc
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                AI destekli analiz
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100">
                <div className="space-y-6">
                  {/* Profile Card */}
                  <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Ayse Yilmaz</p>
                      <p className="text-sm text-neutral-600">Kisilik Tipi: ENFJ</p>
                    </div>
                  </div>

                  {/* Skills Radar Preview */}
                  <div className="space-y-3">
                    <p className="font-medium text-neutral-900">Yetenek Haritasi</p>
                    {[
                      { label: "Analitik Dusunme", value: 92 },
                      { label: "Iletisim", value: 88 },
                      { label: "Yaraticilik", value: 85 },
                      { label: "Liderlik", value: 78 },
                    ].map((skill) => (
                      <div key={skill.label} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">{skill.label}</span>
                          <span className="font-medium text-neutral-900">{skill.value}%</span>
                        </div>
                        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recommendations */}
                  <div className="p-4 bg-accent-50 rounded-2xl">
                    <p className="font-medium text-accent-700 mb-2">En Uygun Meslekler</p>
                    <div className="flex flex-wrap gap-2">
                      {["UX Tasarimci", "Proje Yoneticisi", "Danismanlik"].map((job) => (
                        <span
                          key={job}
                          className="px-3 py-1 bg-white rounded-full text-sm text-neutral-700"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">%92 Eslesme</p>
                    <p className="text-xs text-neutral-600">UX Tasarimci</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <p className="text-sm font-medium text-neutral-900">AI Analiz Tamamlandi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
