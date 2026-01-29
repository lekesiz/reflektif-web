"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const logos = [
  { name: "Koç Üniversitesi", width: 120 },
  { name: "Sabancı Üniversitesi", width: 140 },
  { name: "Boğaziçi Üniversitesi", width: 130 },
  { name: "ODTÜ", width: 100 },
  { name: "İTÜ", width: 90 },
  { name: "Bilkent Üniversitesi", width: 120 },
  { name: "Hacettepe Üniversitesi", width: 140 },
  { name: "Ankara Üniversitesi", width: 130 },
];

export function LogoBand() {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100">
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3"
          >
            Reflektif ile Büyüyen Kurumlar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600"
          >
            Türkiye&apos;nin önde gelen üniversiteleri ve şirketleri Reflektif&apos;i tercih ediyor
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Placeholder for logo */}
                <div 
                  className="h-16 bg-neutral-200 rounded-lg flex items-center justify-center px-6 transition-all duration-300 group-hover:bg-neutral-300 group-hover:scale-110"
                  style={{ width: logo.width }}
                >
                  <span className="text-xs font-semibold text-neutral-600 text-center">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">50K+</p>
            <p className="text-neutral-600">Aktif Kullanıcı</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary-600 mb-2">95%</p>
            <p className="text-neutral-600">İsabet Oranı</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-600 mb-2">250+</p>
            <p className="text-neutral-600">Meslek Önerisi</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">15 dk</p>
            <p className="text-neutral-600">Ortalama Süre</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
