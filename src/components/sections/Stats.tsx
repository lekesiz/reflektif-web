"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-white/80">{stat.suffix}</span>
              </div>
              <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
