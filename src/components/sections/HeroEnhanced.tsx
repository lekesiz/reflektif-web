"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle, TrendingUp, Users, Target } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui";

export function HeroEnhanced() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white pt-20">
      {/* Background Effects - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" size="lg" className="mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Türkiye&apos;nin İlk AI Destekli Platformu
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 mb-6 leading-tight">
              Kariyerinin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient">
                Yapay Zekası
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-4 leading-relaxed max-w-2xl font-medium">
              Türkiye&apos;nin İlk AI Destekli Yetkinlik Değerlendirme ve Meslek Eşleştirme Platformu
            </p>

            <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-xl">
              Potansiyelini keşfet, tutkunu kariyere dönüştür. Kişilik, yetenek ve hatta hobilerini analiz eden AI motorumuzla geleceğin mesleklerine bugünden hazırlan.
            </p>

            {/* Dual CTA - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/kayit">
                <Button 
                  size="xl" 
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300"
                >
                  Ücretsiz Başla
                </Button>
              </Link>
              <Link href="#nasil-calisir">
                <Button 
                  variant="outline" 
                  size="xl" 
                  leftIcon={<Play className="w-5 h-5" />}
                  className="border-2 hover:bg-neutral-50"
                >
                  Demo Talep Et
                </Button>
              </Link>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Ücretsiz</p>
                  <p className="text-neutral-600">Temel test</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">15 Dakika</p>
                  <p className="text-neutral-600">Hızlı sonuç</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">AI Destekli</p>
                  <p className="text-neutral-600">Akıllı analiz</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - Enhanced with Real Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/homepage-hero.jpg"
                  alt="Reflektif - Kariyerinin Yapay Zekası"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Stats Card 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-neutral-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">95%</p>
                    <p className="text-sm text-neutral-600">İsabet Oranı</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-neutral-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">50K+</p>
                    <p className="text-sm text-neutral-600">Kullanıcı</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl shadow-2xl p-4"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6" />
                  <p className="text-sm font-bold">AI Powered</p>
                </div>
              </motion.div>

              {/* Success Badge - Bottom Right */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-2xl p-4 border-4 border-green-500"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
