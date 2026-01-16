"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Button } from "@/components/ui";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Hemen Başlayabilirsiniz
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Kariyer Yolculuğunuza Bugünden Başlayın
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ücretsiz temel değerlendirme ile başlayın, kendinizi keşfetmeye
            bugünden adım atın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kayit">
              <Button
                variant="white"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Ücretsiz Başla
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Demo Talep Et
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Kredi kartı gerekmez • 15 dakikada sonuç • Kalıcı üyelik zorunluluğu yok
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
