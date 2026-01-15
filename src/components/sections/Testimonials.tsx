"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container, Card, CardContent } from "@/components/ui";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
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
            Kullanicilarimiz{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Binlerce kullanici Reflektif ile dogru kariyer kararlarini aldi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="bordered" className="h-full">
                <CardContent>
                  <Quote className="w-10 h-10 text-primary-200 mb-4" />
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {testimonial.role}
                      </p>
                      {testimonial.company && (
                        <p className="text-sm text-primary-600">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
